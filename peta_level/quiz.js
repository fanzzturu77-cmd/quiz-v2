// ==========================================================================
// DEMOCRACY QUEST - QUIZ LOGIC CONTROLLER (PHOTO 2 DESIGN 1:1)
// 10 Soal per Level | Skor Maksimal 100 | Syarat Lulus Min. 80 Poin
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Parse URL Parameter for Level (1-8, Default 1)
  const urlParams = new URLSearchParams(window.location.search);
  let currentLevel = parseInt(urlParams.get('level'), 10);
  if (isNaN(currentLevel) || currentLevel < 1 || currentLevel > 8) {
    currentLevel = 1;
  }

  // 2. Fetch Level Data from QUIZ_BANK
  const levelData = (typeof QUIZ_BANK !== 'undefined')
    ? (QUIZ_BANK.find(item => item.level === currentLevel) || QUIZ_BANK[0])
    : null;

  if (!levelData) {
    console.error("Quiz bank data not found for level:", currentLevel);
    return;
  }

  // 3. State Management
  const totalQuestions = levelData.questions.length; // 10 soal
  let currentQuestionIndex = 0;
  const userAnswers = new Array(totalQuestions).fill(null);

  // 4. DOM Elements
  const levelTagPill = document.getElementById('levelTagPill');
  const levelMainTitle = document.getElementById('levelMainTitle');
  const levelFocusText = document.getElementById('levelFocusText');
  const stepPill = document.getElementById('stepPill');
  const stepProgressBar = document.getElementById('stepProgressBar');
  const questionNumCircle = document.getElementById('questionNumCircle');
  const questionPromptText = document.getElementById('questionPromptText');
  const optionsRadioList = document.getElementById('optionsRadioList');
  const btnPrevQuestion = document.getElementById('btnPrevQuestion');
  const btnNextQuestion = document.getElementById('btnNextQuestion');
  const nextBtnText = document.getElementById('nextBtnText');
  const btnBackToMap = document.getElementById('btnBackToMap');

  // Modal Result Elements
  const quizResultBackdrop = document.getElementById('quizResultBackdrop');
  const resultStatusTag = document.getElementById('resultStatusTag');
  const resultTitle = document.getElementById('resultTitle');
  const resultSubtitle = document.getElementById('resultSubtitle');
  const scoreValue = document.getElementById('scoreValue');
  const scoreBadgeStatus = document.getElementById('scoreBadgeStatus');
  const btnClaimAndNext = document.getElementById('btnClaimAndNext');
  const btnRetryQuiz = document.getElementById('btnRetryQuiz');

  // Interactive Tools
  const toastNotification = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  const confettiContainer = document.getElementById('confettiContainer');
  const toggleFrameBtn = document.getElementById('toggleFrameBtn');
  const frameModeText = document.getElementById('frameModeText');
  const appScreen = document.getElementById('appScreen');

  let toastTimer = null;

  // 5. Toast Feedback
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

  // 6. Confetti Particle Burst
  function triggerConfetti() {
    if (!confettiContainer) return;
    confettiContainer.innerHTML = '';
    const colors = ['#facc15', '#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#10b981'];

    for (let i = 0; i < 45; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.width = `${Math.random() * 8 + 6}px`;
      particle.style.height = `${Math.random() * 8 + 6}px`;
      particle.style.animationDelay = `${Math.random() * 0.25}s`;
      particle.style.animationDuration = `${Math.random() * 1.2 + 1.8}s`;

      confettiContainer.appendChild(particle);
    }

    setTimeout(() => {
      confettiContainer.innerHTML = '';
    }, 3200);
  }

  // 7. Initialize Level Header Info
  function initLevelHeader() {
    levelTagPill.textContent = `Level ${levelData.level}`;
    levelMainTitle.textContent = levelData.title;
    levelFocusText.textContent = levelData.focus;
    document.title = `Democracy Quest - Level ${levelData.level}: ${levelData.title}`;
  }

  // 8. Render Current Question
  function renderQuestion() {
    const qData = levelData.questions[currentQuestionIndex];
    if (!qData) return;

    // Update Progress Step
    const currentStep = currentQuestionIndex + 1;
    stepPill.textContent = `Soal ${currentStep} dari ${totalQuestions}`;
    const progressPercent = (currentStep / totalQuestions) * 100;
    stepProgressBar.style.width = `${progressPercent}%`;

    // Update Question Card
    questionNumCircle.textContent = currentStep;
    questionPromptText.textContent = qData.question;

    // Render Options A, B, C, D
    optionsRadioList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    qData.options.forEach((optText, idx) => {
      const isSelected = (userAnswers[currentQuestionIndex] === idx);
      const card = document.createElement('div');
      card.className = `option-radio-card ${isSelected ? 'selected' : ''}`;
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.tabIndex = 0;

      card.innerHTML = `
        <div class="radio-circle-indicator">
          <div class="radio-dot-inner"></div>
        </div>
        <span class="option-label-letter">${letters[idx]}.</span>
        <span class="option-body-text">${optText}</span>
      `;

      // Option selection handler
      const selectOption = () => {
        userAnswers[currentQuestionIndex] = idx;
        document.querySelectorAll('.option-radio-card').forEach(c => {
          c.classList.remove('selected');
          c.setAttribute('aria-checked', 'false');
        });
        card.classList.add('selected');
        card.setAttribute('aria-checked', 'true');

        if ('vibrate' in navigator) {
          navigator.vibrate(30);
        }
      };

      card.addEventListener('click', selectOption);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectOption();
        }
      });

      optionsRadioList.appendChild(card);
    });

    // Update Navigation Buttons
    btnPrevQuestion.disabled = (currentQuestionIndex === 0);

    if (currentQuestionIndex === totalQuestions - 1) {
      nextBtnText.textContent = 'Selesai & Kumpulkan';
    } else {
      nextBtnText.textContent = 'Selanjutnya';
    }
  }

  // 9. Previous Button Listener
  btnPrevQuestion.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  });

  // 10. Next / Submit Button Listener
  btnNextQuestion.addEventListener('click', () => {
    // If not answered yet, remind user
    if (userAnswers[currentQuestionIndex] === null) {
      showToast('Silakan pilih salah satu jawaban terlebih dahulu! ✍️', '💡');
      return;
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      // Final Question: Calculate score and evaluate passing requirement
      finishQuiz();
    }
  });

  // 11. Finish Quiz & Grade Calculation
  function finishQuiz() {
    let correctCount = 0;
    levelData.questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) {
        correctCount++;
      }
    });

    const score = correctCount * 10; // 10 poin per soal, total 100
    const passed = (score >= 80); // Minimal 80 poin untuk lulus

    // Save progression in LocalStorage
    saveProgress(currentLevel, score, passed);

    // Populate Results Modal
    scoreValue.textContent = `${score} / 100`;

    if (passed) {
      resultStatusTag.textContent = 'LULUS DENGAN PRESTASI!';
      resultStatusTag.style.background = '#dcfce7';
      resultStatusTag.style.color = '#15803d';
      resultTitle.textContent = `Selamat Nadia Putri!`;
      resultSubtitle.textContent = `Kamu berhasil menjawab ${correctCount} dari 10 soal dengan benar di Level ${currentLevel} (${levelData.title}). Badge resmi terbuka!`;
      scoreBadgeStatus.textContent = 'Terbuka & Diraih 🏅';
      scoreBadgeStatus.style.color = '#16a34a';

      if (currentLevel < 8) {
        btnClaimAndNext.innerHTML = `<span>Buka Level ${currentLevel + 1} di Peta! 🗺️</span>`;
      } else {
        btnClaimAndNext.innerHTML = `<span>Juara Demokrasi Lengkap! 🏆</span>`;
      }

      triggerConfetti();
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 150]);
      }
    } else {
      resultStatusTag.textContent = 'BELUM MEMENUHI SYARAT (MIN. 80 POIN)';
      resultStatusTag.style.background = '#fee2e2';
      resultStatusTag.style.color = '#b91c1c';
      resultTitle.textContent = `Semangat Nadia Putri!`;
      resultSubtitle.textContent = `Kamu memperoleh skor ${score} (${correctCount}/10 benar). Syarat membuka badge adalah minimal 80 poin. Ayo coba lagi!`;
      scoreBadgeStatus.textContent = 'Belum Terbuka 🔒';
      scoreBadgeStatus.style.color = '#dc2626';

      btnClaimAndNext.innerHTML = `<span>Kembali ke Peta Level 🗺️</span>`;
    }

    quizResultBackdrop.classList.add('active');
    quizResultBackdrop.setAttribute('aria-hidden', 'false');
  }

  // 12. Save Progression State
  function saveProgress(level, score, passed) {
    try {
      // Get saved unlocked levels
      let unlocked = JSON.parse(localStorage.getItem('dq_unlocked_levels')) || [1];
      if (passed) {
        const nextLvl = level + 1;
        if (nextLvl <= 8 && !unlocked.includes(nextLvl)) {
          unlocked.push(nextLvl);
        }
      }
      localStorage.setItem('dq_unlocked_levels', JSON.stringify(unlocked));

      // Save high score
      let scores = JSON.parse(localStorage.getItem('dq_level_scores')) || {};
      if (!scores[level] || score > scores[level]) {
        scores[level] = score;
      }
      localStorage.setItem('dq_level_scores', JSON.stringify(scores));
    } catch (e) {
      console.warn("LocalStorage save error:", e);
    }
  }

  // 13. Modal Actions
  btnClaimAndNext.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  btnRetryQuiz.addEventListener('click', () => {
    // Reset answers
    for (let i = 0; i < totalQuestions; i++) {
      userAnswers[i] = null;
    }
    currentQuestionIndex = 0;
    quizResultBackdrop.classList.remove('active');
    quizResultBackdrop.setAttribute('aria-hidden', 'true');
    renderQuestion();
    showToast('Kuis direset. Silakan kerjakan kembali!', '🔄');
  });

  // 14. Desktop Preview Toolbar Controls
  if (toggleFrameBtn) {
    toggleFrameBtn.addEventListener('click', () => {
      const isFull = appScreen.classList.toggle('fullscreen-mode');
      frameModeText.textContent = isFull ? 'Mode Full' : 'Mode Frame';
    });
  }

  // Start initialization
  initLevelHeader();
  renderQuestion();
});
