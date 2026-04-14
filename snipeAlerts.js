/**
 * snipeAlerts.js — Rutas CRUD para alertas de Sniping
 * Registrar en index.js con:
 *   app.use('/api/snipe-alerts', require('./src/snipeAlerts'));
 */

'use strict';

const express = require('express');
const router  = express.Router();
const db      = require('./db'); // src/db.js

/* ─────────────────────────────────────
   MIDDLEWARE
───────────────────────────────────── */
function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'No autenticado' });
  }
  next();
}

async function requirePremium(req, res, next) {
  const { role, premium_tier } = req.user;
  if (role === 'admin' || role === 'editor') return next();
  if (!premium_tier || premium_tier === 'none') {
    return res.status(403).json({ error: 'Se requiere cuenta Premium para usar las Sniping Tools' });
  }
  // Cargar snipe_alert_limit del usuario desde la BD
  try {
    const { rows } = await db.query(
      'SELECT snipe_alert_limit FROM users WHERE id = $1', [req.user.id]
    );
    if (rows.length) req.user.snipe_alert_limit = rows[0].snipe_alert_limit;
  } catch {}
  next();
}

router.use(requireAuth, requirePremium);

/* ─────────────────────────────────────
   GET /api/snipe-alerts
   Devuelve todas las alertas del usuario
───────────────────────────────────── */
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT id, name, enabled, config
       FROM snipe_alerts
       WHERE user_id = $1
       ORDER BY created_at ASC`,
      [req.user.id]
    );

    // config es JSONB → ya viene como objeto, no hay que parsear
    const alerts = rows.map(row => ({
      id:      row.id,
      name:    row.name,
      enabled: row.enabled,
      ...row.config,
    }));

    res.json(alerts);
  } catch (err) {
    console.error('[snipeAlerts] GET error:', err);
    res.status(500).json({ error: 'Error al obtener alertas' });
  }
});

// Límites por defecto según tier
const TIER_LIMITS = { none: 0, basico: 5, avanzado: 10, ultimate: 20 };

function getAlertLimit(user) {
  if (user.role === 'admin' || user.role === 'editor') return Infinity;
  if (user.snipe_alert_limit !== null && user.snipe_alert_limit !== undefined)
    return user.snipe_alert_limit;
  return TIER_LIMITS[user.premium_tier] ?? 0;
}

/* ─────────────────────────────────────
   POST /api/snipe-alerts
   Crea una nueva alerta
   Body: { id, name, enabled, ...filtros }
───────────────────────────────────── */
router.post('/', async (req, res) => {
  const { id, name, enabled = true, ...config } = req.body;

  if (!id || !name) {
    return res.status(400).json({ error: 'Faltan campos: id y name son obligatorios' });
  }

  try {
    // Comprobar límite de alertas
    const limit = getAlertLimit(req.user);
    if (isFinite(limit)) {
      const { rows } = await db.query(
        'SELECT COUNT(*) AS cnt FROM snipe_alerts WHERE user_id = $1',
        [req.user.id]
      );
      if (parseInt(rows[0].cnt) >= limit) {
        return res.status(403).json({
          error: `Has alcanzado el límite de ${limit} alerta${limit !== 1 ? 's' : ''} para tu plan.`,
          limitReached: true,
        });
      }
    }

    await db.query(
      `INSERT INTO snipe_alerts (id, user_id, name, enabled, config)
       VALUES ($1, $2, $3, $4, $5)`,
      [id, req.user.id, name, enabled, JSON.stringify(config)]
    );
    res.json({ ok: true, id });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ error: 'Ya existe una alerta con ese ID' });
    }
    console.error('[snipeAlerts] POST error:', err);
    res.status(500).json({ error: 'Error al crear la alerta' });
  }
});

/* ─────────────────────────────────────
   PUT /api/snipe-alerts/:id
   Actualiza nombre, enabled y/o filtros
   Soporta actualizaciones parciales
───────────────────────────────────── */
router.put('/:id', async (req, res) => {
  const alertId = req.params.id;

  try {
    const { rows } = await db.query(
      `SELECT name, enabled, config
       FROM snipe_alerts
       WHERE id = $1 AND user_id = $2`,
      [alertId, req.user.id]
    );

    if (!rows.length) {
      return res.status(404).json({ error: 'Alerta no encontrada' });
    }

    const current = rows[0];
    const { id, name, enabled, ...newConfigFields } = req.body;

    const updatedName    = name    !== undefined ? name    : current.name;
    const updatedEnabled = enabled !== undefined ? enabled : current.enabled;
    const updatedConfig  = Object.keys(newConfigFields).length
      ? { ...current.config, ...newConfigFields }
      : current.config;

    await db.query(
      `UPDATE snipe_alerts
       SET name = $1, enabled = $2, config = $3, updated_at = NOW()
       WHERE id = $4 AND user_id = $5`,
      [updatedName, updatedEnabled, JSON.stringify(updatedConfig), alertId, req.user.id]
    );

    res.json({ ok: true });
  } catch (err) {
    console.error('[snipeAlerts] PUT error:', err);
    res.status(500).json({ error: 'Error al actualizar la alerta' });
  }
});

/* ─────────────────────────────────────
   DELETE /api/snipe-alerts/:id
   Elimina una alerta del usuario
───────────────────────────────────── */
router.delete('/:id', async (req, res) => {
  try {
    await db.query(
      `DELETE FROM snipe_alerts
       WHERE id = $1 AND user_id = $2`,
      [req.params.id, req.user.id]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error('[snipeAlerts] DELETE error:', err);
    res.status(500).json({ error: 'Error al eliminar la alerta' });
  }
});

module.exports = router;
