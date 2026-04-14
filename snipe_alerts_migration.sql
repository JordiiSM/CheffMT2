-- ─────────────────────────────────────────────────────────────
--  Migración: tabla snipe_alerts para CheffM2 Sniping Tools
--  Ejecutar una sola vez en la BD de producción
-- ─────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS snipe_alerts (
  -- UUID generado en el cliente (crypto.randomUUID / uid())
  id          VARCHAR(36)   NOT NULL,

  -- FK al ID del usuario en la tabla de usuarios existente
  -- Ajustar el tipo (INT o VARCHAR) según tu tabla `users`
  user_id     INT           NOT NULL,

  name        VARCHAR(255)  NOT NULL,
  enabled     TINYINT(1)    NOT NULL DEFAULT 1,

  -- Todos los filtros (fName, fSeller, fCat, fElem, fPlus,
  -- fMinYang, fMaxYang, fMinWon, fMaxWon, fBonus, etc.)
  -- se almacenan serializados en JSON
  config      JSON          NOT NULL,

  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
                                     ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  INDEX idx_snipe_user (user_id),

  -- Opcional: descomentar si tienes tabla `users` con FK
  -- FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
