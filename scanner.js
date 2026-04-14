'use strict';

/**
 * scanner.js — Escáner de mercado en background
 * Carga: require('./src/scanner').start()  desde index.js
 *
 * Cada SCAN_INTERVAL_MS:
 *  1. Descarga 531.json desde la web pública
 *  2. Obtiene todas las alertas activas de usuarios premium/admin
 *  3. Para cada alerta, busca items coincidentes
 *  4. Guarda los nuevos matches en snipe_matches
 *  5. Envía notificación push al usuario
 */

const db          = require('./db');
const pushService = require('./pushService');

const SCAN_INTERVAL_MS = 2 * 60 * 1000; // 2 minutos
const DATA_URL         = 'https://jordism.com/data/531.json';
const NAMES_URL        = 'https://jordism.com/data/item_names.json';
const STATS_URL        = 'https://jordism.com/data/stat_map.json';

// ── Caché de datos auxiliares (se recarga cada hora) ──────────
let itemNames  = {};
let statMap    = {};
let auxLoadedAt = 0;

async function loadAuxData() {
  const now = Date.now();
  if (now - auxLoadedAt < 60 * 60 * 1000) return; // recarga cada hora
  try {
    const [names, stats] = await Promise.all([
      fetch(NAMES_URL).then(r => r.json()).catch(() => ({})),
      fetch(STATS_URL).then(r => r.json()).catch(() => ({})),
    ]);
    itemNames  = names;
    statMap    = stats;
    auxLoadedAt = now;
    console.log('[scanner] Datos auxiliares cargados');
  } catch (e) {
    console.warn('[scanner] Error cargando datos auxiliares:', e.message);
  }
}

// ── Mapa de elementos (igual que en el frontend) ──────────────
const ELEM_STAT_MAP = {
  99:{ key:'fire'  }, 100:{ key:'ice'    }, 101:{ key:'wind'   },
  102:{ key:'earth'}, 103:{ key:'dark'   }, 104:{ key:'light'  },
  251:{ key:'fire' }, 252:{ key:'ice'    }, 253:{ key:'wind'   },
  254:{ key:'earth'}, 255:{ key:'dark'   }, 256:{ key:'light'  },
};

function getElemKey(item) {
  for (const list of [item.attrs, item.rand]) {
    if (!Array.isArray(list)) continue;
    for (const a of list) {
      const sid = Array.isArray(a) ? a[0] : a?.type;
      if (ELEM_STAT_MAP[sid]) return ELEM_STAT_MAP[sid].key;
    }
  }
  return null;
}

// ── Construye lista de bonos para un item ─────────────────────
function buildEnchList(item) {
  const result = [];
  const all    = [...(item.attrs || []), ...(item.rand || [])];
  const paired = new Set();

  for (let i = 0; i < all.length; i++) {
    if (paired.has(i)) continue;
    const a   = all[i];
    const sid = Array.isArray(a) ? a[0] : a?.type;
    const val = Array.isArray(a) ? a[1] : a?.value;
    if (!sid || !val) continue;

    // Par 71/72
    if (sid === 71 && i + 1 < all.length) {
      const b    = all[i + 1];
      const sid2 = Array.isArray(b) ? b[0] : b?.type;
      const val2 = Array.isArray(b) ? b[1] : b?.value;
      if (sid2 === 72) {
        const combined = (val * 256 + val2);
        const tpl = statMap[71] || '';
        result.push({ text: tpl.replace('%d', ''), val: combined });
        paired.add(i + 1);
        continue;
      }
    }

    const tpl = statMap[String(sid)] || statMap[sid] || '';
    if (tpl) result.push({ text: tpl.replace('%d', ''), val: Number(val) });
  }
  return result;
}

// ── Lógica de matching (replica del frontend) ─────────────────
function itemMatchesAlert(item, cfg) {
  // Nombre
  const name = (itemNames[String(item.vnum)] || item.name || '').toLowerCase();
  if (cfg.fName && !name.includes(cfg.fName.toLowerCase())) return false;

  // Vendedor
  if (cfg.fSeller && !(item.seller || '').toLowerCase().includes(cfg.fSeller.toLowerCase())) return false;

  // Categoría
  if (cfg.fCat && item.category !== cfg.fCat) return false;

  // Elemento
  if (cfg.fElem && getElemKey(item) !== cfg.fElem) return false;

  // Plus mínimo
  if (cfg.fPlus != null && cfg.fPlus !== '') {
    if ((item.set?.[0] ?? 0) < parseInt(cfg.fPlus)) return false;
  }

  // Precio Yang
  if (cfg.fMinYang != null && (item.yangPrice == null || item.yangPrice < cfg.fMinYang)) return false;
  if (cfg.fMaxYang != null && (item.yangPrice == null || item.yangPrice > cfg.fMaxYang)) return false;

  // Precio Won
  if (cfg.fMinWon != null && (item.wonPrice == null || item.wonPrice < cfg.fMinWon)) return false;
  if (cfg.fMaxWon != null && (item.wonPrice == null || item.wonPrice > cfg.fMaxWon)) return false;

  // Bonos (AND)
  if (cfg.fBonus && cfg.fBonus.length > 0) {
    const enchList = buildEnchList(item);
    for (const { text, minVal } of cfg.fBonus) {
      const match = enchList.some(e => e.text.includes(text) && (minVal <= 0 || e.val >= minVal));
      if (!match) return false;
    }
  }

  return true;
}

// ── ID único simple ───────────────────────────────────────────
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// ── Escaneo principal ─────────────────────────────────────────
async function runScan() {
  console.log('[scanner] Iniciando escaneo…');

  await loadAuxData();

  // 1. Descargar items del mercado
  let items;
  try {
    const res = await fetch(`${DATA_URL}?t=${Date.now()}`);
    items = await res.json();
  } catch (e) {
    console.error('[scanner] Error descargando 531.json:', e.message);
    return;
  }

  // 2. Obtener todas las alertas activas de usuarios premium/admin
  let alerts;
  try {
    const { rows } = await db.query(`
      SELECT sa.id, sa.user_id, sa.name, sa.config
      FROM   snipe_alerts sa
      JOIN   users u ON u.id = sa.user_id
      WHERE  sa.enabled = TRUE
        AND  (
               u.role IN ('admin', 'editor')
               OR (u.premium_tier IS NOT NULL AND u.premium_tier <> 'none')
             )
    `);
    alerts = rows;
  } catch (e) {
    console.error('[scanner] Error leyendo alertas:', e.message);
    return;
  }

  if (!alerts.length) {
    console.log('[scanner] Sin alertas activas, terminando.');
    return;
  }

  // 3. Para cada alerta, encontrar items coincidentes
  let totalNew = 0;

  for (const alert of alerts) {
    const cfg = alert.config; // JSONB ya viene como objeto

    const matching = items.filter(item => itemMatchesAlert(item, cfg));
    if (!matching.length) continue;

    // 4. ¿Cuáles ya fueron registrados (últimas 2h para esta alerta)?
    const { rows: existing } = await db.query(
      `SELECT (item->>'vnum') AS vnum
       FROM   snipe_matches
       WHERE  alert_id = $1 AND user_id = $2
         AND  found_at > NOW() - INTERVAL '2 hours'`,
      [alert.id, alert.user_id]
    );
    const seenVnums = new Set(existing.map(r => String(r.vnum)));

    const newItems = matching.filter(i => !seenVnums.has(String(i.vnum ?? i.id)));
    if (!newItems.length) continue;

    // 5. Guardar nuevos matches en BD
    for (const item of newItems) {
      await db.query(
        `INSERT INTO snipe_matches (id, user_id, alert_id, alert_name, item)
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (id) DO NOTHING`,
        [uid(), alert.user_id, alert.id, alert.name, JSON.stringify(item)]
      );
    }

    totalNew += newItems.length;

    // 6. Enviar push al usuario
    try {
      await pushService.sendToUser(alert.user_id, {
        title: `🎯 ${alert.name}`,
        body:  `${newItems.length} item${newItems.length > 1 ? 's' : ''} encontrado${newItems.length > 1 ? 's' : ''} en el mercado`,
        url:   'https://jordism.com/sniping.html',
      });
    } catch (e) {
      console.warn(`[scanner] Error enviando push a user ${alert.user_id}:`, e.message);
    }
  }

  console.log(`[scanner] Escaneo completado. ${totalNew} nuevos matches.`);
}

// ── Arrancar el loop ──────────────────────────────────────────
function start() {
  console.log(`[scanner] Arrancando (intervalo: ${SCAN_INTERVAL_MS / 1000}s)`);
  runScan(); // primer escaneo inmediato al arrancar
  setInterval(runScan, SCAN_INTERVAL_MS);
}

module.exports = { start };
