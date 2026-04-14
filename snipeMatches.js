'use strict';

/**
 * snipeMatches.js — Rutas para leer/borrar matches guardados en BD
 * Registrar en index.js con:
 *   app.use('/snipe-matches', require('./src/snipeMatches'));
 */

const express = require('express');
const router  = express.Router();
const db      = require('./db');

function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).json({ error: 'No autenticado' });
  next();
}
function requirePremium(req, res, next) {
  const { role, premium_tier } = req.user;
  if (role === 'admin' || role === 'editor') return next();
  if (!premium_tier || premium_tier === 'none')
    return res.status(403).json({ error: 'Se requiere cuenta Premium' });
  next();
}

router.use(requireAuth, requirePremium);

/* GET /snipe-matches — últimos 200 matches del usuario */
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT id, alert_id, alert_name, item, seen, found_at
       FROM   snipe_matches
       WHERE  user_id = $1
       ORDER  BY found_at DESC
       LIMIT  200`,
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    console.error('[snipeMatches] GET error:', err);
    res.status(500).json({ error: 'Error al obtener matches' });
  }
});

/* POST /snipe-matches/client — guardar match encontrado por el escáner del cliente */
router.post('/client', async (req, res) => {
  const { id, alert_id, alert_name, item } = req.body;
  if (!id || !alert_id || !item) return res.status(400).json({ error: 'Faltan campos' });
  const vnum = String(item.vnum ?? item.id ?? '');
  try {
    // Evitar duplicados: mismo item+alerta en las últimas 2 horas
    const { rows } = await db.query(
      `SELECT 1 FROM snipe_matches
       WHERE user_id = $1 AND alert_id = $2
         AND (item->>'vnum') = $3
         AND found_at > NOW() - INTERVAL '2 hours'
       LIMIT 1`,
      [req.user.id, alert_id, vnum]
    );
    if (rows.length) return res.json({ ok: true, skipped: true });

    await db.query(
      `INSERT INTO snipe_matches (id, user_id, alert_id, alert_name, item)
       VALUES ($1, $2, $3, $4, $5)`,
      [id, req.user.id, alert_id, alert_name || '', JSON.stringify(item)]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error('[snipeMatches] POST client error:', err);
    res.status(500).json({ error: 'Error' });
  }
});

/* PATCH /snipe-matches/seen — marcar todos como vistos */
router.patch('/seen', async (req, res) => {
  try {
    await db.query(
      'UPDATE snipe_matches SET seen = TRUE WHERE user_id = $1 AND seen = FALSE',
      [req.user.id]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error('[snipeMatches] PATCH seen error:', err);
    res.status(500).json({ error: 'Error' });
  }
});

/* DELETE /snipe-matches — borrar todos los matches del usuario */
router.delete('/', async (req, res) => {
  try {
    await db.query('DELETE FROM snipe_matches WHERE user_id = $1', [req.user.id]);
    res.json({ ok: true });
  } catch (err) {
    console.error('[snipeMatches] DELETE error:', err);
    res.status(500).json({ error: 'Error al borrar matches' });
  }
});

module.exports = router;
