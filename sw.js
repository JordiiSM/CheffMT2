/**
 * sw.js — Service Worker para notificaciones push de CheffM2 Sniping
 * Debe estar en la raíz del sitio: jordism.com/sw.js
 */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

/* ── Recibir push del servidor ─────────────────────────────── */
self.addEventListener('push', event => {
  if (!event.data) return;

  let data;
  try { data = event.data.json(); }
  catch { data = { title: 'CheffM2 Sniping', body: event.data.text() }; }

  const options = {
    body:    data.body  || '',
    icon:    data.icon  || 'https://jordism.com/favicon.ico',
    badge:   'https://jordism.com/favicon.ico',
    vibrate: [200, 100, 200],
    data:    { url: data.url || 'https://jordism.com/cheffmt2/sniping.html' },
    actions: [
      { action: 'open', title: 'Ver items' },
      { action: 'close', title: 'Cerrar' },
    ],
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'CheffM2 Sniping', options)
  );
});

/* ── Click en la notificación ──────────────────────────────── */
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'close') return;

  const url = event.notification.data?.url || 'https://jordism.com/sniping.html';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
      const existing = clients.find(c => c.url.includes('sniping.html'));
      if (existing) return existing.focus();
      return self.clients.openWindow(url);
    })
  );
});
