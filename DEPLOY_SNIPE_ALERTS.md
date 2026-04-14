# Despliegue: Sniping Alerts en BD

## Pasos en orden

### 1. Ejecutar la migración SQL

```bash
# Conéctate a MySQL y ejecuta:
mysql -u root -p nombre_base_de_datos < snipe_alerts_migration.sql

# O directamente en el cliente MySQL:
# source /ruta/al/archivo/snipe_alerts_migration.sql
```

> Ajusta `user_id INT` por `VARCHAR(100)` si tu tabla `users` usa strings como ID.

---

### 2. Copiar la ruta al backend

```bash
cp snipeAlerts.js /var/www/cheffmt2/api/routes/snipeAlerts.js
```

---

### 3. Registrar la ruta en app.js

Abre el `app.js` (o `index.js`) principal del API y añade esta línea junto al resto de rutas:

```javascript
app.use('/api/snipe-alerts', require('./routes/snipeAlerts'));
```

---

### 4. Ajustar la importación de DB

En `snipeAlerts.js`, la línea:

```javascript
const db = require('../db');
```

Cámbiala para que apunte al mismo módulo de base de datos que usan las otras rutas del proyecto.

---

### 5. Reiniciar el servidor

```bash
pm2 restart cheffmt2-api
pm2 logs cheffmt2-api --lines 20 --nostream
```

---

### 6. Subir los archivos del frontend

```bash
# Desde tu máquina local (o el servidor si tiene acceso):
scp sniping.html root@tu-servidor:/var/www/cheffmt2/sniping.html
```

O con el pull habitual desde git:

```bash
cd /var/www/cheffmt2 && git pull origin master
```

---

## Comportamiento final

| Situación | Comportamiento |
|-----------|----------------|
| Usuario logueado | Alertas guardadas en MySQL, sincronizadas entre dispositivos |
| Usuario invitado (no logueado) | Alertas guardadas en localStorage del navegador (igual que antes) |
| Error de API | Muestra toast de error, no modifica el estado local |
