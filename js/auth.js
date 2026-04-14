/**
 * auth.js — Sistema de autenticación compartido
 * Se incluye en todas las páginas. Detecta si el usuario está logueado
 * y renderiza el botón de login o el avatar con dropdown.
 */
(function () {
  const API_BASE = 'https://jordism.com/api';
  const ROLE_LABELS = { admin: 'Admin', editor: 'Editor', moderador: 'Mod', user: '' };

  // ── Render: usuario no logueado ───────────────────
  function renderLoginBtn(container) {
    const a = document.createElement('a');
    a.href = API_BASE + '/auth/google';
    a.className = 'navbar-login';
    a.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      Entrar`;
    container.appendChild(a);
  }

  // ── Render: usuario logueado ──────────────────────
  function renderUserMenu(container, user) {
    const roleLabel = ROLE_LABELS[user.role] || '';
    const wrapper = document.createElement('div');
    wrapper.className = 'navbar-user';
    wrapper.innerHTML = `
      <button class="navbar-user-btn" id="authMenuBtn">
        <img class="navbar-user-avatar"
          src="${user.avatar || ''}"
          alt="${user.name}"
          onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=c0392b&color=fff'">
        ${user.name.split(' ')[0]}
        ${roleLabel ? `<span class="navbar-role-badge">${roleLabel}</span>` : ''}
      </button>
      <div class="navbar-user-dropdown" id="authDropdown">
        <a href="${API_BASE}/perfil">👤 Mi perfil</a>
        ${user.role === 'admin' ? `<a href="https://jordism.com/admin">⚙️ Panel admin</a>` : ''}
        <div class="dropdown-divider"></div>
        <button id="authLogoutBtn">🚪 Cerrar sesión</button>
      </div>`;
    container.appendChild(wrapper);

    // Toggle dropdown
    document.getElementById('authMenuBtn').addEventListener('click', function (e) {
      e.stopPropagation();
      document.getElementById('authDropdown').classList.toggle('open');
    });
    document.addEventListener('click', function () {
      const d = document.getElementById('authDropdown');
      if (d) d.classList.remove('open');
    });

    // Logout
    document.getElementById('authLogoutBtn').addEventListener('click', function () {
      window.location.href = API_BASE + '/auth/logout';
    });
  }

  // ── Init ──────────────────────────────────────────
  function initAuth() {
    const container = document.getElementById('navbar-auth');
    if (!container) return;

    fetch(API_BASE + '/me', { credentials: 'include', mode: 'cors' })
      .then(r => r.ok ? r.json() : null)
      .then(user => {
        if (user) {
          renderUserMenu(container, user);
        } else {
          renderLoginBtn(container);
        }
      })
      .catch(() => renderLoginBtn(container));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
  } else {
    initAuth();
  }
})();
