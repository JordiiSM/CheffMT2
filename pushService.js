'use strict';

/**
 * pushService.js — Servicio de notificaciones Web Push
 * Requiere el paquete: npm install web-push
 * Requiere en .env:
 *   VAPID_PUBLIC_KEY=...
 *   VAPID_PRIVATE_KEY=...
 *   VAPID_EMAIL=mailto:tu@email.com
 */

const webpush = require('web-push');
const db      = require('./db');

webpush.setVapidDetails(
  process.env.VAPID_EMAIL,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

/**
 * Envía una notificación push a todas las suscripciones de un usuario.
 * Limpia automáticamente suscripciones inválidas (410 Gone).
 */
async function sendToUser(userId, { title, body, url }) {
  const { rows } = await db.query(
    'SELECT id, endpoint, p256dh, auth FROM push_subscriptions WHERE user_id = $1',
    [userId]
  );

  const payload = JSON.stringify({ title, body, url });

  await Promise.allSettled(rows.map(async row => {
    const subscription = {
      endpoint: row.endpoint,
      keys: { p256dh: row.p256dh, auth: row.auth },
    };
    try {
      await webpush.sendNotification(subscription, payload);
    } catch (err) {
      // 410 = suscripción expirada → eliminarla
      if (err.statusCode === 410 || err.statusCode === 404) {
        await db.query('DELETE FROM push_subscriptions WHERE id = $1', [row.id]);
        console.log(`[push] Suscripción eliminada (${err.statusCode}): user ${userId}`);
      } else {
        throw err;
      }
    }
  }));
}

module.exports = { sendToUser };
