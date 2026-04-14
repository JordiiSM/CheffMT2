// ─────────────────────────────────────────────────────────────
//  Añadir estos dos endpoints al archivo:
//  /var/www/cheffmt2-api/src/users/routes.js
//  (justo antes de module.exports = router;)
// ─────────────────────────────────────────────────────────────

// Cambiar límite de alertas de sniping
router.patch('/:id/snipe-limit', isAdmin, async (req, res) => {
  const { limit } = req.body;
  const value = limit === null || limit === '' ? null : parseInt(limit);
  if (value !== null && (isNaN(value) || value < 0)) {
    return res.status(400).json({ error: 'Límite inválido' });
  }
  const result = await db.query(
    'UPDATE users SET snipe_alert_limit = $1 WHERE id = $2 RETURNING *',
    [value, req.params.id]
  );
  res.json(result.rows[0]);
});

// Obtener lista completa de usuarios (con snipe_alert_limit)
// Reemplaza el GET '/' existente o añade este campo:
// SELECT id, name, email, avatar, role, premium_tier, premium_expires_at, snipe_alert_limit, created_at
