// ==========================================================================
// QUIZZ K5 - INTERACTIVE SCRIPT
// Features: Draggable Slider Button (Swipe to Start), Functional Red Navigation,
// Carousel Slide Transitions, Confetti Particles, & Micro-Interactions.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Navigation & Carousel elements
  const navDashes = [
    document.getElementById('navDash0'),
    document.getElementById('navDash1'),
    document.getElementById('navDash2')
  ];
  const carouselTrack = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const backBtn = document.getElementById('backBtn');
  const skipBtn = document.getElementById('skipBtn');

  // Slider Elements
  const sliderContainer = document.getElementById('sliderPillContainer');
  const sliderThumb = document.getElementById('sliderThumb');
  const sliderFillTrack = document.getElementById('sliderFillTrack');
  const sliderTextLabel = document.getElementById('sliderTextLabel');
  const sliderArrows = document.getElementById('sliderArrows');

  // UI Modals & Easter Eggs
  const toastNotification = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  const confettiContainer = document.getElementById('confettiContainer');
  const toggleFrameBtn = document.getElementById('toggleFrameBtn');
  const appScreen = document.getElementById('appScreen');
  const frameModeText = document.getElementById('frameModeText');

  // Floating Elements
  const floatingBook = document.getElementById('floatingBook');
  const floatingDiploma = document.getElementById('floatingDiploma');
  const floatingGlobe = document.getElementById('floatingGlobe');
  const chipLeft = document.getElementById('chipLeft');
  const chipRight = document.getElementById('chipRight');

  let currentSlideIndex = 0;
  const totalSlides = slides.length;
  let toastTimer = null;

  // --------------------------------------------------------------------------
  // 1. TOAST & NOTIFICATIONS
  // --------------------------------------------------------------------------
  function showToast(message, icon = '✨') {
    if (toastTimer) clearTimeout(toastTimer);
    toastMsg.textContent = message;
    const iconEl = toastNotification.querySelector('.toast-icon');
    if (iconEl) iconEl.textContent = icon;

    toastNotification.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 2600);
  }

  // --------------------------------------------------------------------------
  // 2. SLIDE NAVIGATION & RED DASHES
  // --------------------------------------------------------------------------
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentSlideIndex = index;

    // Shift carousel track
    const offset = -(currentSlideIndex * (100 / totalSlides));
    carouselTrack.style.transform = `translateX(${offset}%)`;

    // Update active class on slides
    slides.forEach((slide, idx) => {
      if (idx === currentSlideIndex) {
        slide.classList.add('slide-active');
      } else {
        slide.classList.remove('slide-active');
      }
    });

    // Update Red Navigation indicators
    navDashes.forEach((dash, idx) => {
      if (dash) {
        if (idx === currentSlideIndex) {
          dash.classList.add('active');
        } else {
          dash.classList.remove('active');
        }
      }
    });

    // Update Back button state
    if (backBtn) {
      if (currentSlideIndex === 0) {
        backBtn.classList.add('disabled');
      } else {
        backBtn.classList.remove('disabled');
      }
    }

    // Update slider label on final slide
    if (sliderTextLabel) {
      const mainLabel = sliderTextLabel.querySelector('.main-label');
      if (currentSlideIndex === totalSlides - 1) {
        if (mainLabel) mainLabel.textContent = 'Mulai Kuis!';
      } else {
        if (mainLabel) mainLabel.textContent = 'Get Start';
      }
    }
  }

  // Attach click listeners to Red Navigation Dashes
  navDashes.forEach((dashBtn, idx) => {
    if (dashBtn) {
      dashBtn.addEventListener('click', () => {
        goToSlide(idx);
        showToast(`Halaman ${idx + 1} dari ${totalSlides}`, '📍');
      });
    }
  });

  // Back Button Click
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (currentSlideIndex > 0) {
        goToSlide(currentSlideIndex - 1);
      } else {
        showToast('Kamu berada di halaman pertama', 'ℹ️');
      }
    });
  }

  // Skip Button Click
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      if (currentSlideIndex === totalSlides - 1) {
        showToast('Menuju Beranda Kuis... 🚀', '⏩');
        setTimeout(() => {
          window.location.href = 'beranda/index.html';
        }, 600);
      } else {
        goToSlide(totalSlides - 1);
        showToast('Langsung ke halaman siap kuis! Geser untuk mulai 🚀', '⏩');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. DRAGGABLE SLIDER BUTTON ("BISA DIGESER")
  // --------------------------------------------------------------------------
  let isDragging = false;
  let startPointerX = 0;
  let currentTranslateX = 0;
  let maxSlide = 0;

  function calculateMaxSlide() {
    if (!sliderContainer || !sliderThumb) return 200;
    const containerWidth = sliderContainer.getBoundingClientRect().width;
    const thumbWidth = sliderThumb.getBoundingClientRect().width;
    // 6px left padding offset + 6px right cushion
    return Math.max(10, containerWidth - thumbWidth - 12);
  }

  function updateSliderVisuals(x) {
    sliderThumb.style.transform = `translateY(-50%) translateX(${x}px)`;
    sliderFillTrack.style.width = `${x + 36}px`;

    // Fade out text label as slider moves
    const progress = Math.min(1, Math.max(0, x / (maxSlide || 1)));
    sliderTextLabel.style.opacity = (1 - progress * 1.5).toString();

    // Pulse triple arrows
    if (sliderArrows) {
      sliderArrows.style.transform = `translateX(${progress * 6}px)`;
      sliderArrows.style.opacity = (1 - progress * 0.8).toString();
    }
  }

  function resetSlider() {
    sliderThumb.classList.add('animating');
    sliderFillTrack.style.transition = 'width 0.32s cubic-bezier(0.34, 1.56, 0.64, 1)';

    currentTranslateX = 0;
    updateSliderVisuals(0);

    setTimeout(() => {
      sliderThumb.classList.remove('animating');
      sliderFillTrack.style.transition = '';
    }, 350);
  }

  function triggerSuccess() {
    maxSlide = calculateMaxSlide();
    sliderThumb.classList.add('animating');
    sliderFillTrack.style.transition = 'width 0.25s ease-out';
    updateSliderVisuals(maxSlide);

    // Confetti celebration
    createConfetti();

    // Haptic vibration feedback
    if ('vibrate' in navigator) {
      navigator.vibrate([40, 60, 100]);
    }

    if (currentSlideIndex < totalSlides - 1) {
      showToast('Luar biasa! Lanjut ke langkah berikutnya! 🎉', '⭐');
      setTimeout(() => {
        goToSlide(currentSlideIndex + 1);
        resetSlider();
      }, 650);
    } else {
      showToast('Selamat Datang! Menuju Beranda Kuis... 🚀', '🏆');
      setTimeout(() => {
        window.location.href = 'beranda/index.html';
      }, 1000);
    }
  }

  // Pointer Events (Mouse + Touch)
  if (sliderThumb && sliderContainer) {
    maxSlide = calculateMaxSlide();
    window.addEventListener('resize', () => {
      maxSlide = calculateMaxSlide();
    });
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        maxSlide = calculateMaxSlide();
      }, 100);
    });

    sliderThumb.addEventListener('pointerdown', (e) => {
      isDragging = true;
      maxSlide = calculateMaxSlide();
      startPointerX = e.clientX - currentTranslateX;
      sliderThumb.setPointerCapture(e.pointerId);
      sliderThumb.classList.remove('animating');
      sliderFillTrack.style.transition = 'none';
    });

    sliderThumb.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const rawX = e.clientX - startPointerX;
      currentTranslateX = Math.max(0, Math.min(rawX, maxSlide));
      updateSliderVisuals(currentTranslateX);
    });

    function handlePointerEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      try {
        sliderThumb.releasePointerCapture(e.pointerId);
      } catch (err) {}

      // If dragged past 65% -> success unlock!
      if (currentTranslateX >= maxSlide * 0.65) {
        triggerSuccess();
      } else {
        // Elastic spring back
        resetSlider();
      }
    }

    sliderThumb.addEventListener('pointerup', handlePointerEnd);
    sliderThumb.addEventListener('pointercancel', handlePointerEnd);

    // Fallback tap on container
    sliderContainer.addEventListener('click', (e) => {
      if (isDragging) return;
      if (e.target === sliderThumb || sliderThumb.contains(e.target)) return;

      maxSlide = calculateMaxSlide();
      sliderThumb.classList.add('animating');
      sliderFillTrack.style.transition = 'width 0.35s ease';
      updateSliderVisuals(maxSlide);

      setTimeout(() => {
        triggerSuccess();
      }, 350);
    });
  }

  // --------------------------------------------------------------------------
  // 4. TOUCH SWIPE ON CAROUSEL (SWIPE LEFT / RIGHT)
  // --------------------------------------------------------------------------
  let touchStartX = 0;
  let touchStartY = 0;
  const carouselContainer = document.getElementById('carouselContainer');

  if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    carouselContainer.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Ensure horizontal swipe
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0 && currentSlideIndex < totalSlides - 1) {
          goToSlide(currentSlideIndex + 1);
        } else if (deltaX > 0 && currentSlideIndex > 0) {
          goToSlide(currentSlideIndex - 1);
        }
      }
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // 5. CONFETTI BURST ANIMATION
  // --------------------------------------------------------------------------
  function createConfetti() {
    if (!confettiContainer) return;
    confettiContainer.innerHTML = '';
    const colors = ['#f43f5e', '#fde047', '#38bdf8', '#a855f7', '#4ade80', '#fb923c'];

    for (let i = 0; i < 40; i++) {
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

  // --------------------------------------------------------------------------
  // 6. CHARACTER TAP TOAST (NO ANIMATION / STATIC AS REQUESTED)
  // --------------------------------------------------------------------------
  document.querySelectorAll('.hero-img').forEach((img) => {
    img.addEventListener('click', () => {
      showToast('Ayo belajar dan jadilah juara kuis! 🌟', '🎓');
    });
  });

  // Floating Elements Tap Interactivity
  if (floatingGlobe) {
    floatingGlobe.addEventListener('click', () => {
      showToast('Jelajahi Beragam Pengetahuan Dunia! 🌍', '🗺️');
      createConfetti();
    });
  }

  if (chipLeft) {
    chipLeft.addEventListener('click', () => {
      showToast('Kuis Cocok Untuk Semua Kalangan & Usia! 🌐', '💡');
    });
  }

  if (floatingDiploma) {
    floatingDiploma.addEventListener('click', () => {
      showToast('Sertifikat & Bintang Juara Menantimu! 🏆', '⭐');
    });
  }

  if (floatingBook) {
    floatingBook.addEventListener('click', () => {
      showToast('Buku Ajaib Pengetahuan Siap Dibaca! 📖', '✨');
      createConfetti();
    });
  }

  if (chipRight) {
    chipRight.addEventListener('click', () => {
      showToast('Uji Kecepatan & Ketangkasan Berpikirmu! 🧠', '⚡');
      createConfetti();
    });
  }

  // --------------------------------------------------------------------------
  // 7. TOGGLE FRAME MODE (DESKTOP PREVIEW)
  // --------------------------------------------------------------------------
  if (toggleFrameBtn && appScreen) {
    toggleFrameBtn.addEventListener('click', () => {
      const isFullscreen = appScreen.classList.toggle('fullscreen-mode');
      if (isFullscreen) {
        frameModeText.textContent = 'Mode Frame';
      } else {
        frameModeText.textContent = 'Mode Layar Penuh';
      }
      setTimeout(() => {
        maxSlide = calculateMaxSlide();
      }, 350);
    });
  }

  // Initialize on first slide
  goToSlide(0);
});
