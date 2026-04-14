-- ─────────────────────────────────────────────────────────────
--  Migración: background scanner para Sniping Tools
--  Ejecutar UNA SOLA VEZ en la BD de producción
-- ─────────────────────────────────────────────────────────────

-- Matches guardados en servidor (persisten aunque el navegador esté cerrado)
CREATE TABLE IF NOT EXISTS snipe_matches (
  id          VARCHAR(36)   NOT NULL PRIMARY KEY,
  user_id     INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  alert_id    VARCHAR(36)   NOT NULL,
  alert_name  VARCHAR(255)  NOT NULL,
  item        JSONB         NOT NULL,
  seen        BOOLEAN       NOT NULL DEFAULT FALSE,
  found_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_snipe_matches_user     ON snipe_matches(user_id, found_at DESC);
CREATE INDEX IF NOT EXISTS idx_snipe_matches_alert    ON snipe_matches(alert_id);
CREATE INDEX IF NOT EXISTS idx_snipe_matches_seen     ON snipe_matches(user_id, seen) WHERE seen = FALSE;

-- Suscripciones Web Push por usuario/dispositivo
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id           SERIAL        PRIMARY KEY,
  user_id      INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  endpoint     TEXT          NOT NULL,
  p256dh       TEXT          NOT NULL,
  auth         TEXT          NOT NULL,
  created_at   TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, endpoint)
);

CREATE INDEX IF NOT EXISTS idx_push_sub_user ON push_subscriptions(user_id);
