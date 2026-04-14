-- Añadir límite de alertas de sniping por usuario
-- NULL = usar el límite por defecto según el tier
ALTER TABLE users ADD COLUMN IF NOT EXISTS snipe_alert_limit INTEGER DEFAULT NULL;
