// ==========================================================================
// DEMOCRACY QUEST - REUSABLE UNIFIED BOTTOM NAVBAR COMPONENT
// Items: Beranda | Peta Level | Misi | Peringkat | Profil
// Theme: Beranda Sky Blue Palette (#60a5fa, #2563eb, #eff6ff)
// ==========================================================================

(function() {
  // 1. Auto-inject navbar.css if not already loaded
  function ensureNavbarStyles() {
    if (document.getElementById('dqNavbarStyles')) return;
    const isInsideFolder = window.location.pathname.includes('/beranda/') || 
                           window.location.pathname.includes('/peta_level/');
    const cssPath = isInsideFolder ? '../components/navbar.css' : 'components/navbar.css';

    const link = document.createElement('link');
    link.id = 'dqNavbarStyles';
    link.rel = 'stylesheet';
    link.href = cssPath;
    document.head.appendChild(link);
  }

  // 2. Main Render Function
  function renderNavbar() {
    ensureNavbarStyles();

    // Determine current path depth
    const path = window.location.pathname.toLowerCase();
    const isInPetaLevel = path.includes('/peta_level/');
    const isInBeranda = path.includes('/beranda/');

    const berandaUrl = isInBeranda ? 'index.html' : (isInPetaLevel ? '../beranda/index.html' : 'beranda/index.html');
    const petaLevelUrl = isInPetaLevel ? 'index.html' : (isInBeranda ? '../peta_level/index.html' : 'peta_level/index.html');

    // Find mount point or existing bottom-nav-bar
    let navContainer = document.getElementById('appNavbar') || document.querySelector('.bottom-nav-bar');
    const appScreen = document.getElementById('appScreen') || document.querySelector('.app-screen');

    if (!navContainer && appScreen) {
      navContainer = document.createElement('nav');
      navContainer.className = 'bottom-nav-bar';
      navContainer.id = 'appNavbar';
      appScreen.appendChild(navContainer);
    }

    if (!navContainer) return;

    // Determine active menu item
    let activeItem = navContainer.getAttribute('data-active') || '';
    if (!activeItem) {
      if (isInBeranda) activeItem = 'beranda';
      else if (isInPetaLevel && !path.includes('quiz.html')) activeItem = 'peta_level';
    }

    navContainer.className = 'bottom-nav-bar';
    navContainer.setAttribute('aria-label', 'Navigasi Utama');
    navContainer.innerHTML = `
      <!-- 1. Beranda -->
      <a href="${berandaUrl}" class="nav-item ${activeItem === 'beranda' ? 'active' : ''}" id="navItemBeranda" title="Halaman Beranda">
        <div class="nav-icon-container">
          <svg viewBox="0 0 24 24" fill="${activeItem === 'beranda' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3L2 12H5V20H9V14H15V20H19V12H22L12 3Z"/>
          </svg>
        </div>
        <span class="nav-label">Beranda</span>
      </a>

      <!-- 2. Peta Level -->
      <a href="${petaLevelUrl}" class="nav-item ${activeItem === 'peta_level' ? 'active' : ''}" id="navItemPetaLevel" title="Peta 8 Level Kuis">
        <div class="nav-icon-container">
          <svg viewBox="0 0 24 24" fill="${activeItem === 'peta_level' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
          </svg>
        </div>
        <span class="nav-label">Peta Level</span>
      </a>

      <!-- 3. Misi -->
      <button type="button" class="nav-item ${activeItem === 'misi' ? 'active' : ''}" id="navItemMisi" title="Misi Demokrasi">
        <div class="nav-icon-container">
          <svg viewBox="0 0 24 24" fill="${activeItem === 'misi' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        </div>
        <span class="nav-label">Misi</span>
      </button>

      <!-- 4. Peringkat -->
      <button type="button" class="nav-item ${activeItem === 'peringkat' ? 'active' : ''}" id="navItemPeringkat" title="Papan Peringkat">
        <div class="nav-icon-container">
          <svg viewBox="0 0 24 24" fill="${activeItem === 'peringkat' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="12" width="6" height="9" rx="1"></rect>
            <rect x="9" y="6" width="6" height="15" rx="1"></rect>
            <rect x="16" y="9" width="6" height="12" rx="1"></rect>
          </svg>
        </div>
        <span class="nav-label">Peringkat</span>
      </button>

      <!-- 5. Profil (Provil) -->
      <button type="button" class="nav-item ${activeItem === 'profil' ? 'active' : ''}" id="navItemProfil" title="Profil Pengguna">
        <div class="nav-icon-container">
          <svg viewBox="0 0 24 24" fill="${activeItem === 'profil' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <span class="nav-label">Profil</span>
      </button>
    `;

    // Ensure interactive popups for Misi, Peringkat, Profil
    setupNavModals(appScreen, petaLevelUrl);
  }

  // 3. Modals for Interactive Nav Items
  function setupNavModals(appScreen, petaLevelUrl) {
    if (!appScreen) return;
    let modalBackdrop = document.getElementById('navModalBackdrop');
    if (!modalBackdrop) {
      modalBackdrop = document.createElement('div');
      modalBackdrop.className = 'nav-modal-backdrop';
      modalBackdrop.id = 'navModalBackdrop';
      modalBackdrop.innerHTML = `
        <div class="nav-modal-card" id="navModalCard" role="dialog" aria-modal="true">
          <button class="nav-modal-close" id="navModalClose" type="button" aria-label="Tutup">✕</button>
          <div class="nav-modal-icon" id="navModalIcon">🎯</div>
          <h3 class="nav-modal-title" id="navModalTitle">Judul</h3>
          <p class="nav-modal-desc" id="navModalDesc">Deskripsi modal</p>
          <button class="nav-modal-action-btn" id="navModalActionBtn" type="button">Tutup</button>
        </div>
      `;
      appScreen.appendChild(modalBackdrop);

      const closeBtn = modalBackdrop.querySelector('#navModalClose');
      const actionBtn = modalBackdrop.querySelector('#navModalActionBtn');
      const closeModal = () => modalBackdrop.classList.remove('active');

      closeBtn.addEventListener('click', closeModal);
      actionBtn.addEventListener('click', () => {
        if (actionBtn.dataset.action === 'goto_map') {
          window.location.href = petaLevelUrl;
        } else {
          closeModal();
        }
      });
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }

    const titleEl = modalBackdrop.querySelector('#navModalTitle');
    const descEl = modalBackdrop.querySelector('#navModalDesc');
    const iconEl = modalBackdrop.querySelector('#navModalIcon');
    const actionBtn = modalBackdrop.querySelector('#navModalActionBtn');

    // Misi Click
    const btnMisi = document.getElementById('navItemMisi');
    if (btnMisi) {
      btnMisi.addEventListener('click', () => {
        iconEl.textContent = '🎯';
        titleEl.textContent = 'Misi Demokrasi';
        descEl.textContent = 'Selesaikan seluruh 8 Level Kuis Pendidikan Pancasila Kelas XI. Kumpulkan 8 Badge Prestasi dan jadilah Juara Demokrasi sejati!';
        actionBtn.textContent = 'Jelajahi Peta Level 🗺️';
        actionBtn.dataset.action = 'goto_map';
        modalBackdrop.classList.add('active');
      });
    }

    // Peringkat Click
    const btnPeringkat = document.getElementById('navItemPeringkat');
    if (btnPeringkat) {
      btnPeringkat.addEventListener('click', () => {
        iconEl.textContent = '🏆';
        titleEl.textContent = 'Peringkat Nasional';
        descEl.textContent = 'Selamat! Nadia Putri (Pelajar Kelas XI) menempati Posisi Teratas dengan skor pembelajaran demokrasi tertinggi se-Indonesia!';
        actionBtn.textContent = 'Tutup & Lanjutkan';
        actionBtn.dataset.action = 'close';
        modalBackdrop.classList.add('active');
      });
    }

    // Profil Click
    const btnProfil = document.getElementById('navItemProfil');
    if (btnProfil) {
      btnProfil.addEventListener('click', () => {
        iconEl.textContent = '👤';
        titleEl.textContent = 'Profil Nadia Putri';
        descEl.textContent = 'Status: Pelajar Aktif | Jenjang: SMA/SMK Kelas XI | Topik Utama: Demokrasi, HAM, Hukum, & Kemakmuran Indonesia.';
        actionBtn.textContent = 'Tutup';
        actionBtn.dataset.action = 'close';
        modalBackdrop.classList.add('active');
      });
    }
  }

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavbar);
  } else {
    renderNavbar();
  }

  window.renderAppNavbar = renderNavbar;
})();
