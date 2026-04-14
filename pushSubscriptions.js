'use strict';

/**
 * pushSubscriptions.js — Guardar/eliminar suscripciones Web Push
 * Registrar en index.js con:
 *   app.use('/push', require('./src/pushSubscriptions'));
 */

const express = require('express');
const router  = express.Router();
const db      = require('./db');

function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).json({ error: 'No autenticado' });
  next();
}

router.use(requireAuth);

/* POST /push/subscribe — guardar suscripción */
router.post('/subscribe', async (req, res) => {
  const { endpoint, keys } = req.body;
  if (!endpoint || !keys?.p256dh || !keys?.auth) {
    return res.status(400).json({ error: 'Suscripción inválida' });
  }
  try {
    await db.query(
      `INSERT INTO push_subscriptions (user_id, endpoint, p256dh, auth)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (user_id, endpoint) DO UPDATE SET p256dh = $3, auth = $4`,
      [req.user.id, endpoint, keys.p256dh, keys.auth]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error('[push] subscribe error:', err);
    res.status(500).json({ error: 'Error al guardar suscripción' });
  }
});

/* DELETE /push/subscribe — eliminar suscripción */
router.delete('/subscribe', async (req, res) => {
  const { endpoint } = req.body;
  if (!endpoint) return res.status(400).json({ error: 'Falta endpoint' });
  try {
    await db.query(
      'DELETE FROM push_subscriptions WHERE user_id = $1 AND endpoint = $2',
      [req.user.id, endpoint]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error('[push] unsubscribe error:', err);
    res.status(500).json({ error: 'Error al eliminar suscripción' });
  }
});

/* GET /push/vapid-public-key — la clave pública para el cliente */
router.get('/vapid-public-key', (req, res) => {
  res.json({ key: process.env.VAPID_PUBLIC_KEY });
});

module.exports = router;
