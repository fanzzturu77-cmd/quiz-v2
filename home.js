// ==========================================================================
// DEMOCRACY QUEST - BERANDA INTERACTIVE SCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const gemBadge = document.getElementById('gemBadge');
  const gemCount = document.getElementById('gemCount');
  const bannerUtama = document.getElementById('bannerUtama');
  const promoCard = document.getElementById('promoCard');
  const promoActionBtn = document.getElementById('promoActionBtn');
  const seeAllBtn = document.getElementById('seeAllBtn');
  const mainGameCard = document.getElementById('mainGameCard');
  const gameCardPlayBtn = document.getElementById('gameCardPlayBtn');
  const btnFavorite = document.getElementById('btnFavorite');
  const toggleFrameBtn = document.getElementById('toggleFrameBtn');
  const appScreen = document.getElementById('appScreen');
  const frameModeText = document.getElementById('frameModeText');
  const toastNotification = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  const confettiContainer = document.getElementById('confettiContainer');

  const navItems = [
    document.getElementById('navHome'),
    document.getElementById('navQuiz'),
    document.getElementById('navPlay'),
    document.getElementById('navLeaderboard'),
    document.getElementById('navProfile')
  ];

  let coins = 30;
  let toastTimer = null;

  // 1. Toast Notification
  function showToast(message, icon = '✨') {
    if (toastTimer) clearTimeout(toastTimer);
    toastMsg.textContent = message;
    const iconEl = toastNotification.querySelector('.toast-icon');
    if (iconEl) iconEl.textContent = icon;

    toastNotification.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 2800);
  }

  // 2. Confetti Particle Burst
  function createConfetti() {
    if (!confettiContainer) return;
    confettiContainer.innerHTML = '';
    const colors = ['#f472b6', '#facc15', '#60a5fa', '#a855f7', '#4ade80', '#fb923c'];

    for (let i = 0; i < 35; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.width = `${Math.random() * 8 + 6}px`;
      particle.style.height = `${Math.random() * 8 + 6}px`;
      particle.style.animationDelay = `${Math.random() * 0.3}s`;
      particle.style.animationDuration = `${Math.random() * 1.2 + 1.6}s`;

      confettiContainer.appendChild(particle);
    }

    setTimeout(() => {
      confettiContainer.innerHTML = '';
    }, 2800);
  }

  // 3. Gem / Coin Reward Click
  if (gemBadge) {
    gemBadge.addEventListener('click', () => {
      coins += 5;
      if (gemCount) gemCount.textContent = coins;
      gemBadge.style.transform = 'scale(1.15)';
      setTimeout(() => {
        gemBadge.style.transform = '';
      }, 200);
      showToast(`+5 Koin Demokrasi! Total Koin: ${coins}`, '🪙');
      createConfetti();
    });
  }

  // 4. Banner Utama Click
  if (bannerUtama) {
    bannerUtama.addEventListener('click', () => {
      showToast('Peringkat Juara Demokrasi: Nadia Putri Peringkat #1!', '🏆');
      createConfetti();
    });
  }

  // 5. Promo Card Click
  function handlePromoClick() {
    showToast('Misi Demokrasi: Kuis HAM & Hukum Terbuka!', '👑');
    createConfetti();
  }
  if (promoCard) promoCard.addEventListener('click', handlePromoClick);
  if (promoActionBtn) promoActionBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    handlePromoClick();
  });

  // 6. See All Games
  if (seeAllBtn) {
    seeAllBtn.addEventListener('click', () => {
      showToast('Menampilkan seluruh modul kuis Pendidikan Pancasila...', '📚');
    });
  }

  // 7. Favorite Heart Button Toggle
  if (btnFavorite) {
    btnFavorite.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = btnFavorite.classList.toggle('active');
      btnFavorite.style.transform = 'scale(1.25)';
      setTimeout(() => {
        btnFavorite.style.transform = '';
      }, 200);
      if (isActive) {
        showToast('Democracy Quest ditambahkan ke game favorit! ❤️', '⭐');
      } else {
        showToast('Dihapus dari game favorit', '🤍');
      }
    });
  }

  // 8. Main Game Card Play Click
  function handlePlayGame() {
    showToast('Memulai Democracy Quest: Bab Demokrasi & HAM...', '🎮');
    createConfetti();
  }
  if (mainGameCard) mainGameCard.addEventListener('click', handlePlayGame);
  if (gameCardPlayBtn) gameCardPlayBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    handlePlayGame();
  });

  // 9. Bottom Navigation Tabs
  navItems.forEach((item) => {
    if (item) {
      item.addEventListener('click', () => {
        navItems.forEach((btn) => btn && btn.classList.remove('active'));
        item.classList.add('active');
        const label = item.querySelector('.nav-label')?.textContent || '';
        showToast(`Membuka menu ${label}...`, '📍');
      });
    }
  });

  // 10. Frame Mode Toggle
  if (toggleFrameBtn && appScreen) {
    toggleFrameBtn.addEventListener('click', () => {
      const isFullscreen = appScreen.classList.toggle('fullscreen-mode');
      if (isFullscreen) {
        frameModeText.textContent = 'Mode Frame';
      } else {
        frameModeText.textContent = 'Mode Layar Penuh';
      }
    });
  }
});
