// ==========================================================================
// DEMOCRACY QUEST - PETA 8 LEVEL INTERACTIVE SCRIPT
// Features: 
// 1. Dynamic Unlock System (Abu-Abu / Grayscale -> Full Vibrant True Colors)
// 2. Interactive Gamified Quiz Engine (Authentic PKN Kelas XI Curriculum)
// 3. Top Progress Bar & 8 Star Shield Medals
// 4. Confetti Celebrations, Haptic Vibrations, & Level Unlocking Animations
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const mapScrollViewport = document.getElementById('mapScrollViewport');
  const progressScore = document.getElementById('progressScore');
  const progressFill = document.getElementById('progressFill');
  const badgeMedalsRow = document.getElementById('badgeMedalsRow');
  const levelNodes = [
    document.getElementById('levelNode1'),
    document.getElementById('levelNode2'),
    document.getElementById('levelNode3'),
    document.getElementById('levelNode4'),
    document.getElementById('levelNode5'),
    document.getElementById('levelNode6'),
    document.getElementById('levelNode7'),
    document.getElementById('levelNode8')
  ];

  // Quiz Modal Elements
  const quizModalBackdrop = document.getElementById('quizModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalLevelPill = document.getElementById('modalLevelPill');
  const modalLevelTitle = document.getElementById('modalLevelTitle');
  const modalLevelTopic = document.getElementById('modalLevelTopic');
  const questionNumber = document.getElementById('questionNumber');
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');
  const feedbackAlert = document.getElementById('feedbackAlert');
  const feedbackIcon = document.getElementById('feedbackIcon');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackDesc = document.getElementById('feedbackDesc');
  const btnSubmitOrNext = document.getElementById('btnSubmitOrNext');

  // Toolbar & Feedback
  const btnUnlockAll = document.getElementById('btnUnlockAll');
  const unlockAllText = document.getElementById('unlockAllText');
  const btnResetProgress = document.getElementById('btnResetProgress');
  const toggleFrameBtn = document.getElementById('toggleFrameBtn');
  const appScreen = document.getElementById('appScreen');
  const frameModeText = document.getElementById('frameModeText');
  const toastNotification = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  const confettiContainer = document.getElementById('confettiContainer');

  // Level Quiz Data (Pendidikan Pancasila Kelas XI)
  const quizData = [
    {
      level: 1,
      title: "Penjelajahi Demokrasi",
      topic: "Demokrasi, HAM, dan kebebasan berekspresi",
      question: "Apa prinsip fundamental Demokrasi Pancasila dalam merumuskan keputusan bersama?",
      options: [
        "A. Voting sepihak dari pihak berkuasa",
        "B. Musyawarah untuk mufakat dengan itikad baik",
        "C. Kehendak kelompok mayoritas secara mutlak",
        "D. Penunjukan langsung tanpa diskusi"
      ],
      correctIndex: 1,
      explanation: "Musyawarah untuk mufakat adalah esensi utama sila ke-4 Pancasila yang menjunjung tinggi kebersamaan dan kebijaksanaan."
    },
    {
      level: 2,
      title: "Pelindung Hak Asasi",
      topic: "Privasi, akses informasi, dan partisipasi publik",
      question: "Dalam era digital, perlindungan data pribadi dan kebebasan berekspresi dijamin oleh...",
      options: [
        "A. Larangan masyarakat mengakses informasi publik",
        "B. Kebijakan penyensoran semua opini masyarakat",
        "C. UUD 1945 Pasal 28F tentang hak berkomunikasi & informasi",
        "D. Penutupan akses media komunikasi internasional"
      ],
      correctIndex: 2,
      explanation: "Pasal 28F UUD 1945 menjamin setiap orang berhak untuk berkomunikasi dan memperoleh informasi untuk mengembangkan pribadinya."
    },
    {
      level: 3,
      title: "Penegak Keadilan",
      topic: "Independensi peradilan dan proses hukum yang adil",
      question: "Prinsip 'Asas Praduga Tak Bersalah' (Presumption of Innocence) dalam peradilan berarti...",
      options: [
        "A. Tersangka dianggap bersalah sejak dilaporkan",
        "B. Setiap orang dianggap tidak bersalah hingga ada putusan hakim yang berkekuatan hukum tetap",
        "C. Hakim berhak langsung menjatuhkan vonis tanpa proses sidang",
        "D. Penegak hukum dapat mengabaikan bukti persidangan"
      ],
      correctIndex: 1,
      explanation: "Asas praduga tak bersalah menjamin hak asasi warga negara agar mendapat perlakuan adil dan tidak dihakimi sebelum pembuktian sah."
    },
    {
      level: 4,
      title: "Ahli Hukum",
      topic: "Pendidikan hukum, akses keadilan, dan peradilan responsif",
      question: "Penegasan bahwa 'Negara Indonesia adalah Negara Hukum' tercantum secara tegas dalam...",
      options: [
        "A. UUD 1945 Pasal 1 Ayat 3",
        "B. UUD 1945 Pasal 27 Ayat 1",
        "C. Pembukaan UUD 1945 Alinea 1",
        "D. UUD 1945 Pasal 33 Ayat 2"
      ],
      correctIndex: 0,
      explanation: "Pasal 1 Ayat 3 UUD NRI 1945 menyatakan secara eksplisit bahwa Negara Indonesia adalah negara hukum (Rechtsstaat)."
    },
    {
      level: 5,
      title: "Penggerak Daerah",
      topic: "Otonomi daerah dan pemberdayaan masyarakat",
      question: "Tujuan utama diterapkannya sistem otonomi daerah di Indonesia adalah...",
      options: [
        "A. Memisahkan kekuasaan daerah dari pemerintah pusat sepenuhnya",
        "B. Meningkatkan pelayanan umum, pemerataan ekonomi, dan partisipasi lokal",
        "C. Mengurangi kewajiban daerah terhadap hukum nasional",
        "D. Membatasi perdagangan antar pulau di Indonesia"
      ],
      correctIndex: 1,
      explanation: "Otonomi daerah mendekatkan pelayanan publik ke masyarakat dan mempercepat pemerataan kesejahteraan di seluruh nusantara."
    },
    {
      level: 6,
      title: "Arsitek Kemakmuran",
      topic: "Pembangunan berkelanjutan dan kesejahteraan masyarakat",
      question: "Pengelolaan perekonomian nasional berdasarkan asas kekeluargaan dan demokrasi ekonomi tertuang pada...",
      options: [
        "A. Pasal 33 UUD 1945",
        "B. Pasal 30 UUD 1945",
        "C. Pasal 36 UUD 1945",
        "D. Pasal 31 UUD 1945"
      ],
      correctIndex: 0,
      explanation: "Pasal 33 UUD 1945 menegaskan bahwa cabang-cabang produksi penting dikuasai oleh negara untuk sebesar-besarnya kemakmuran rakyat."
    },
    {
      level: 7,
      title: "Pejuang Keadilan Sosial",
      topic: "Kesetaraan kesempatan dan distribusi sumber daya",
      question: "Perwujudan Keadilan Sosial bagi Seluruh Rakyat Indonesia tercermin dalam tindakan...",
      options: [
        "A. Memonopoli fasilitas pendidikan hanya untuk kaum berada",
        "B. Memberikan akses pendidikan dan jaminan kesehatan merata bagi semua warga",
        "C. Membatasi lapangan pekerjaan berdasarkan status sosial",
        "D. Menolak bantuan sosial bagi masyarakat prasejahtera"
      ],
      correctIndex: 1,
      explanation: "Sila ke-5 Pancasila menuntut pemerataan hak, akses pendidikan, dan jaminan sosial tanpa diskriminasi."
    },
    {
      level: 8,
      title: "Master Demokrasi",
      topic: "Analisis kasus dan penerapan seluruh pilar demokrasi",
      question: "Sebagai generasi muda penerus bangsa, peran tertinggi dalam menjaga keutuhan demokrasi adalah...",
      options: [
        "A. Bersikap apatis dan tidak peduli terhadap isu kebangsaan",
        "B. Menghargai perbedaan, taat hukum, kritis, dan aktif berkontribusi bagi masyarakat",
        "C. Menyebarkan hoaks dan ujaran kebencian di media sosial",
        "D. Menolak gotong royong dan musyawarah di lingkungan sekitar"
      ],
      correctIndex: 1,
      explanation: "Pendidikan Pancasila membentuk karakter warganegara yang aktif, toleran, cerdas hukum, dan berintegritas tinggi."
    }
  ];

  // Progression State (Persisted via LocalStorage)
  let unlockedLevels = [1];
  try {
    const saved = JSON.parse(localStorage.getItem('dq_unlocked_levels'));
    if (Array.isArray(saved) && saved.length > 0) {
      unlockedLevels = saved;
    }
  } catch (e) {
    unlockedLevels = [1];
  }
  let currentActiveLevel = Math.max(...unlockedLevels);
  let activeQuizLevel = null;
  let selectedOptionIndex = null;
  let isAnswerChecked = false;
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
    const colors = ['#facc15', '#6366f1', '#4ade80', '#f472b6', '#38bdf8', '#fb923c'];

    for (let i = 0; i < 40; i++) {
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
    }, 3000);
  }

  // 3. Render Top 8 Star Shield Medals
  function renderBadges() {
    if (!badgeMedalsRow) return;
    badgeMedalsRow.innerHTML = '';

    for (let i = 1; i <= 8; i++) {
      const badge = document.createElement('div');
      const isUnlocked = unlockedLevels.includes(i);
      badge.className = `star-badge-item ${isUnlocked ? 'active' : 'locked'}`;
      badge.title = `Badge Level ${i}: ${isUnlocked ? 'Terbuka' : 'Terkunci'}`;

      badge.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 4.18l1.45 2.94 3.24.47-2.35 2.29.56 3.23-2.9-1.52-2.9 1.52.56-3.23-2.35-2.29 3.24-.47L12 6.18z"/>
        </svg>
      `;
      badgeMedalsRow.appendChild(badge);
    }
  }

  // 4. Dynamic Path & Character Positioning
  function updateQuestPath() {
    const container = mapScrollViewport;
    const svg = document.getElementById('mapWindingPathSvg');
    const pathLine = document.getElementById('questPathLine');
    const pathDashes = document.getElementById('questPathDashes');
    if (!container || !svg || !pathLine) return;

    const containerRect = container.getBoundingClientRect();
    const scrollTop = container.scrollTop;

    // Collect anchor points for each island in ascending order (Level 1 -> 8)
    const points = [];
    for (let i = 1; i <= 8; i++) {
      const node = document.getElementById(`levelNode${i}`);
      if (node) {
        const anchor = node.querySelector('.island-stage-anchor') || node;
        const rect = anchor.getBoundingClientRect();
        const x = rect.left - containerRect.left + (rect.width / 2);
        const y = rect.top - containerRect.top + scrollTop + (rect.height * 0.42);
        points.push({ x, y, level: i });
      }
    }

    if (points.length < 2) return;

    const stream = document.getElementById('floatingIslandsStream');
    const totalHeight = stream ? stream.scrollHeight : container.scrollHeight;
    svg.setAttribute('viewBox', `0 0 ${containerRect.width || 380} ${totalHeight}`);
    svg.style.height = `${totalHeight}px`;

    // Construct smooth continuous curve through all islands
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const deltaY = p1.y - p0.y;
      const cp1x = p0.x;
      const cp1y = p0.y + deltaY * 0.55;
      const cp2x = p1.x;
      const cp2y = p1.y - deltaY * 0.55;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
    }

    pathLine.setAttribute('d', d);
    if (pathDashes) pathDashes.setAttribute('d', d);

    updateCharacterPosition();
  }

  function updateCharacterPosition() {
    const walker = document.getElementById('questWalkerCharacter');
    if (!walker || !mapScrollViewport) return;

    const highestUnlocked = Math.max(...unlockedLevels);
    const targetNode = document.getElementById(`levelNode${highestUnlocked}`);
    if (!targetNode) return;

    const containerRect = mapScrollViewport.getBoundingClientRect();
    const anchor = targetNode.querySelector('.island-stage-anchor') || targetNode;
    const rect = anchor.getBoundingClientRect();
    const scrollTop = mapScrollViewport.scrollTop;

    // Position character standing proudly on/beside the active island
    const targetX = rect.left - containerRect.left + (rect.width * 0.10);
    const targetY = rect.top - containerRect.top + scrollTop + (rect.height * 0.50);

    walker.style.transform = `translate(${targetX}px, ${targetY}px)`;
  }

  // 5. Update Level Visual States (Abu-Abu vs Warna Asli)
  function updateLevelNodes() {
    const highestUnlocked = Math.max(...unlockedLevels);

    // Compute score based on passed quiz levels from localStorage
    let completedScores = {};
    try {
      completedScores = JSON.parse(localStorage.getItem('dq_level_scores')) || {};
    } catch (e) {}

    let passedLevels = 0;
    for (let i = 1; i <= 8; i++) {
      if (completedScores[i] && completedScores[i] >= 80) {
        passedLevels++;
      }
    }
    // If user has unlocked higher levels, reflect at least (highestUnlocked - 1) * 10
    const scoreVal = Math.max(passedLevels * 10, (highestUnlocked - 1) * 10);
    if (progressScore) progressScore.textContent = `${scoreVal} / 80`;
    if (progressFill) progressFill.style.width = `${(scoreVal / 80) * 100}%`;

    renderBadges();

    levelNodes.forEach((node, index) => {
      if (!node) return;
      const lvl = index + 1;
      const isUnlocked = unlockedLevels.includes(lvl);
      const isCurrent = (lvl === highestUnlocked);

      // Remove existing pointer if any
      const existingPointer = node.querySelector('.active-level-pointer');
      if (existingPointer) existingPointer.remove();

      if (isUnlocked) {
        node.classList.remove('locked');
        node.classList.add('unlocked');

        // Update status icon to play
        const statusIcon = node.querySelector('.level-status-icon');
        if (statusIcon) {
          statusIcon.innerHTML = `<span class="icon-play-ready">▶</span>`;
        }

        // Add active glowing downward pointer to the highest unlocked level
        if (isCurrent) {
          node.classList.add('current-active');
          const pointer = document.createElement('div');
          pointer.className = 'active-level-pointer';
          pointer.title = 'Level Aktif Saat Ini';
          pointer.innerHTML = `
            <div class="pointer-arrow-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,18 4,8 20,8"/>
              </svg>
            </div>
          `;
          node.appendChild(pointer);
        } else {
          node.classList.remove('current-active');
        }
      } else {
        node.classList.remove('unlocked', 'current-active');
        node.classList.add('locked');

        const statusIcon = node.querySelector('.level-status-icon');
        if (statusIcon) {
          statusIcon.innerHTML = `<span class="icon-lock">🔒</span>`;
        }
      }
    });

    // Recompute path and character placement
    setTimeout(updateQuestPath, 50);
  }

  // 5. Open Quiz Modal for a Level
  function openQuiz(levelNumber) {
    const data = quizData.find(q => q.level === levelNumber);
    if (!data) return;

    activeQuizLevel = levelNumber;
    selectedOptionIndex = null;
    isAnswerChecked = false;

    modalLevelPill.textContent = `LEVEL ${data.level}`;
    modalLevelTitle.textContent = data.title;
    modalLevelTopic.textContent = `Topik: ${data.topic}`;
    questionNumber.textContent = `Pertanyaan 1 dari 1`;
    questionText.textContent = data.question;

    // Render Options
    optionsContainer.innerHTML = '';
    data.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.type = 'button';
      const letter = String.fromCharCode(65 + idx); // A, B, C, D
      btn.innerHTML = `
        <span class="option-letter">${letter}</span>
        <span class="option-label-text">${optText.replace(/^[A-D]\.\s*/, '')}</span>
      `;
      btn.addEventListener('click', () => {
        if (isAnswerChecked) return;
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedOptionIndex = idx;
        btnSubmitOrNext.disabled = false;
        btnSubmitOrNext.textContent = 'Cek Jawaban';
      });
      optionsContainer.appendChild(btn);
    });

    feedbackAlert.style.display = 'none';
    feedbackAlert.className = 'feedback-alert';
    btnSubmitOrNext.disabled = true;
    btnSubmitOrNext.textContent = 'Pilih Jawaban';

    quizModalBackdrop.classList.add('active');
  }

  // 6. Handle Quiz Answer Submission / Level Progression
  btnSubmitOrNext.addEventListener('click', () => {
    if (!activeQuizLevel) return;
    const data = quizData.find(q => q.level === activeQuizLevel);
    if (!data) return;

    if (!isAnswerChecked) {
      // Check Answer
      const isCorrect = (selectedOptionIndex === data.correctIndex);
      isAnswerChecked = true;

      const optionButtons = optionsContainer.querySelectorAll('.option-btn');
      optionButtons.forEach((btn, idx) => {
        if (idx === data.correctIndex) {
          btn.classList.add('correct');
        } else if (idx === selectedOptionIndex) {
          btn.classList.add('wrong');
        }
      });

      feedbackAlert.style.display = 'flex';
      if (isCorrect) {
        feedbackAlert.className = 'feedback-alert';
        feedbackIcon.textContent = '🎉';
        feedbackTitle.textContent = 'Jawaban Benar! Luar Biasa!';
        feedbackDesc.textContent = data.explanation;
        btnSubmitOrNext.textContent = activeQuizLevel < 8 ? 'Buka Level Berikutnya! 🚀' : 'Klaim Gelar Juara Demokrasi! 🏆';
        createConfetti();

        if ('vibrate' in navigator) navigator.vibrate([60, 40, 80]);
      } else {
        feedbackAlert.className = 'feedback-alert error';
        feedbackIcon.textContent = '💡';
        feedbackTitle.textContent = 'Kurang Tepat, Coba Pahami Kembali';
        feedbackDesc.textContent = data.explanation;
        btnSubmitOrNext.textContent = 'Coba Lagi';
      }
    } else {
      // If was wrong -> reload quiz
      const isCorrect = (selectedOptionIndex === data.correctIndex);
      if (!isCorrect) {
        openQuiz(activeQuizLevel);
        return;
      }

      // If correct -> Unlock next level!
      const nextLevel = activeQuizLevel + 1;
      quizModalBackdrop.classList.remove('active');

      if (nextLevel <= 8 && !unlockedLevels.includes(nextLevel)) {
        unlockedLevels.push(nextLevel);
        updateLevelNodes();

        // Target next node and apply smooth transition & pulse animation
        const nextNode = levelNodes[nextLevel - 1];
        if (nextNode) {
          nextNode.classList.add('just-unlocked');
          setTimeout(() => {
            nextNode.classList.remove('just-unlocked');
          }, 1500);

          // Scroll to the freshly unlocked level so user sees the transformation!
          nextNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        showToast(`Selamat! Level ${nextLevel} Telah Terbuka & Mengeluarkan Warna Aslinya! ✨`, '🔓');
        createConfetti();
      } else if (activeQuizLevel === 8) {
        showToast('Luar Biasa! Kamu Resmi Menjadi Juara Demokrasi Indonesia! 🏆', '👑');
        createConfetti();
      }
    }
  });

  // Close Modal Button
  modalCloseBtn.addEventListener('click', () => {
    quizModalBackdrop.classList.remove('active');
  });

  quizModalBackdrop.addEventListener('click', (e) => {
    if (e.target === quizModalBackdrop) {
      quizModalBackdrop.classList.remove('active');
    }
  });

  // 7. Attach Click Listeners to Floating Island Cards
  levelNodes.forEach((node, index) => {
    if (!node) return;
    const lvl = index + 1;
    const cardBox = node.querySelector('.island-card-box');
    const graphicWrap = node.querySelector('.island-graphic-wrap');

    const handleLevelClick = () => {
      if (unlockedLevels.includes(lvl)) {
        // Directly open dedicated 10-question quiz page (Photo 2 design)
        window.location.href = `quiz.html?level=${lvl}`;
      } else {
        // Locked level feedback
        node.classList.add('shake-locked');
        setTimeout(() => node.classList.remove('shake-locked'), 450);

        if ('vibrate' in navigator) navigator.vibrate([100, 50, 100]);
        const highestUnlocked = Math.max(...unlockedLevels);
        showToast(`🔒 Level ${lvl} masih berwarna abu-abu! Selesaikan Level ${highestUnlocked} dengan minimal 80 poin untuk membuka warna aslinya.`, '🔒');
      }
    };

    if (cardBox) cardBox.addEventListener('click', handleLevelClick);
    if (graphicWrap) graphicWrap.addEventListener('click', handleLevelClick);
  });

  // 8. Wooden Signboard Click Easter Egg
  const woodenSignBoard = document.getElementById('woodenSignBoard');
  if (woodenSignBoard) {
    woodenSignBoard.addEventListener('click', () => {
      showToast('Jelajahi ke-8 pulau fantasi demokrasi dan jadilah juara!', '🧭');
      createConfetti();
    });
  }

  // 9. Note Sticker Click Easter Egg
  const noteSticker = document.getElementById('noteSticker');
  if (noteSticker) {
    noteSticker.addEventListener('click', () => {
      showToast('"Setiap langkah membawa perubahan untuk Indonesia!" 🇮🇩', '✊');
      createConfetti();
    });
  }

  // 10. Preview Toolbar Debug Controls
  if (btnUnlockAll) {
    btnUnlockAll.addEventListener('click', () => {
      if (unlockedLevels.length === 8) {
        // Re-lock to only level 1
        unlockedLevels = [1];
        localStorage.setItem('dq_unlocked_levels', JSON.stringify([1]));
        unlockAllText.textContent = 'Buka Semua';
        showToast('Level dikunci kembali. Hanya Level 1 yang berwarna.', '🔒');
      } else {
        // Unlock all 8 levels
        unlockedLevels = [1, 2, 3, 4, 5, 6, 7, 8];
        localStorage.setItem('dq_unlocked_levels', JSON.stringify(unlockedLevels));
        unlockAllText.textContent = 'Kunci Sebagian';
        showToast('Semua 8 Level Terbuka dengan Warna Aslinya! 🌈', '🎉');
        createConfetti();
      }
      updateLevelNodes();
    });
  }

  if (btnResetProgress) {
    btnResetProgress.addEventListener('click', () => {
      unlockedLevels = [1];
      localStorage.removeItem('dq_unlocked_levels');
      localStorage.removeItem('dq_level_scores');
      if (unlockAllText) unlockAllText.textContent = 'Buka Semua';
      updateLevelNodes();
      showToast('Progress direset ke Level 1!', '🔄');
      setTimeout(() => {
        if (mapScrollViewport) mapScrollViewport.scrollTop = mapScrollViewport.scrollHeight;
      }, 150);
    });
  }

  if (toggleFrameBtn && appScreen && frameModeText) {
    toggleFrameBtn.addEventListener('click', () => {
      const isFullscreen = appScreen.classList.toggle('fullscreen-mode');
      frameModeText.textContent = isFullscreen ? 'Mode Mobile' : 'Mode Frame';
      showToast(isFullscreen ? 'Beralih ke tampilan layar penuh' : 'Beralih ke tampilan frame mobile', '📱');
    });
  }

  // Window Resize & Image Load Listeners
  window.addEventListener('resize', updateQuestPath);
  window.addEventListener('load', updateQuestPath);
  document.querySelectorAll('.island-img').forEach(img => {
    if (img.complete) {
      updateQuestPath();
    } else {
      img.addEventListener('load', updateQuestPath);
    }
  });

  // Initial Setup
  updateLevelNodes();

  // Scroll initially to Level 1 at the bottom so user starts at Level 1
  setTimeout(() => {
    updateQuestPath();
    if (mapScrollViewport) {
      mapScrollViewport.scrollTop = mapScrollViewport.scrollHeight;
    }
  }, 250);
});
