/**
 * ============================================================================
 * 리눅스마스터 2급 CBT & 합격 마스터 애플리케이션 코어 엔진 (app.js)
 * ----------------------------------------------------------------------------
 * - 1차 / 2차 기출 문제집 분리 및 통합 학습 엔진
 * - 6대 전문 게임/시험 모드 (CBT, 서바이벌, 타임어택, 챕터집중, 킬러문항, 오답재시험)
 * - 11개 챕터 핵심 요약 정리관 (Study Hub) 인터랙티브 아코디언 및 실시간 검색
 * - 486제 전 문항 기출 사전 및 AI 교차검증 상세 해설 열람
 * - 스마트폰 모바일 최적화 및 데스크톱 모바일 뷰 에뮬레이터 모드
 * - Web Audio API 기반 무의존성 신디사이저 효과음
 * ============================================================================
 */

(function () {
  'use strict';

  // 복수 정답 판정 및 표시 유틸리티
  function isQuestionCorrect(q, choiceIndex) {
    if (choiceIndex === undefined || choiceIndex < 0) return false;
    if (Array.isArray(q.answer_indexes) && q.answer_indexes.length > 0) {
      return q.answer_indexes.includes(choiceIndex);
    }
    return choiceIndex === q.answer_index;
  }

  function getQuestionAnswerDisplay(q) {
    if (Array.isArray(q.answer_indexes) && q.answer_indexes.length > 0) {
      return q.answer_indexes.map(idx => `${idx + 1}번. ${q.options[idx]}`).join(' / ');
    }
    return `${q.answer_index + 1}번. ${q.options[q.answer_index]}`;
  }


  // --------------------------------------------------------------------------
  // 1. 애플리케이션 상태 (State Management)
  // --------------------------------------------------------------------------
  const state = {
    currentStage: 'all',        // 'all' | '1차' | '2차'
    currentView: 'home',        // 'home' | 'quiz' | 'study' | 'wrong' | 'explorer' | 'result'
    currentMode: 'cbt',         // 'cbt' | 'survival' | 'timeattack' | 'subject' | 'killer' | 'wrong_retry'
    selectedChapter: null,

    // 퀴즈 진행 상태
    quizQuestions: [],
    currentIndex: 0,
    userAnswers: [],            // 선택한 보기 인덱스 (0~3 또는 -1)
    isAnswerRevealed: false,
    streak: 0,
    maxStreak: 0,
    examStartTime: 0,
    examTimerInterval: null,
    timeAttackRemaining: 10,
    timeAttackInterval: null,

    // 로컬 스토리지 영속화 데이터
    soundEnabled: true,
    isDarkMode: true,
    isMobileEmulator: false,
    wrongQuestionIds: new Set(),
    bookmarkedIds: new Set(),
    stats: {
      solved: 0,
      correct: 0
    }
  };

  // --------------------------------------------------------------------------
  // 2. Web Audio API 사운드 신디사이저 (Zero-Dependency)
  // --------------------------------------------------------------------------
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playSound(type) {
    if (!state.soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'correct') {
        // 경쾌한 정답 딩동 톤 (523Hz -> 659Hz)
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        // 오답 저음 톤 (220Hz -> 164Hz)
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(164.81, now + 0.12);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'click') {
        // 부드러운 탭 사운드
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'tick') {
        // 타임어택 카운트다운 째깍 사운드
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, now);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        osc.start(now);
        osc.stop(now + 0.03);
      } else if (type === 'victory') {
        // 시험 합격 팡파레 (아르페지오 C-E-G-C)
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
          const o = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          o.connect(g);
          g.connect(audioCtx.destination);
          o.type = 'triangle';
          o.frequency.setValueAtTime(freq, now + idx * 0.1);
          g.gain.setValueAtTime(0.15, now + idx * 0.1);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);
          o.start(now + idx * 0.1);
          o.stop(now + idx * 0.1 + 0.4);
        });
      }
    } catch (e) {
      console.warn('Audio playback error:', e);
    }
  }

  // --------------------------------------------------------------------------
  // 3. 로컬 스토리지 동기화 (Storage)
  // --------------------------------------------------------------------------
  const STORAGE_KEYS = {
    WRONG: 'LM2_WRONG_IDS',
    BOOKMARKS: 'LM2_BOOKMARKS',
    STATS: 'LM2_USER_STATS',
    SETTINGS: 'LM2_SETTINGS'
  };

  function loadStorage() {
    try {
      const wrong = localStorage.getItem(STORAGE_KEYS.WRONG);
      if (wrong) state.wrongQuestionIds = new Set(JSON.parse(wrong));

      const bmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      if (bmarks) state.bookmarkedIds = new Set(JSON.parse(bmarks));

      const stats = localStorage.getItem(STORAGE_KEYS.STATS);
      if (stats) state.stats = JSON.parse(stats);

      const settings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (settings) {
        const s = JSON.parse(settings);
        if (s.soundEnabled !== undefined) state.soundEnabled = s.soundEnabled;
        if (s.isDarkMode !== undefined) state.isDarkMode = s.isDarkMode;
        if (s.isMobileEmulator !== undefined) state.isMobileEmulator = s.isMobileEmulator;
        if (s.currentStage !== undefined) state.currentStage = s.currentStage;
      }
    } catch (e) {
      console.warn('LocalStorage load error:', e);
    }
  }

  function saveStorage() {
    try {
      localStorage.setItem(STORAGE_KEYS.WRONG, JSON.stringify([...state.wrongQuestionIds]));
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify([...state.bookmarkedIds]));
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(state.stats));
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify({
        soundEnabled: state.soundEnabled,
        isDarkMode: state.isDarkMode,
        isMobileEmulator: state.isMobileEmulator,
        currentStage: state.currentStage
      }));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  // --------------------------------------------------------------------------
  // 4. UI 뷰 전환 및 차수 필터링
  // --------------------------------------------------------------------------
  function switchView(viewName) {
    state.currentView = viewName;
    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
    
    const target = document.getElementById(`view${capitalize(viewName)}`);
    if (target) {
      target.classList.add('active');
    }

    // 상단 탭 활성화 상태
    document.querySelectorAll('.main-tabs .tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    // 모바일 하단 네비게이션 활성화 상태 동기화
    document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(btn => {
      const mv = btn.dataset.mobileView;
      const isMatch = (mv === viewName) ||
        (mv === 'stage1' && viewName === 'quiz' && state.currentStage === '1차') ||
        (mv === 'stage2' && viewName === 'quiz' && state.currentStage === '2차');
      btn.classList.toggle('active', isMatch);
    });

    // 뷰 진입별 초기화 함수 호출
    if (viewName === 'home') {
      updateHomeDashboard();
    } else if (viewName === 'study') {
      renderStudyHub();
    } else if (viewName === 'wrong') {
      renderWrongNoteList();
    } else if (viewName === 'explorer') {
      renderQuestionExplorer();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setAppStage(stage) {
    state.currentStage = stage;
    saveStorage();

    // 헤더 차수 필터 알약 버튼 갱신
    document.querySelectorAll('.stage-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.stage === stage);
    });

    // 홈 배너 인디케이터 갱신
    updateHomeStageBanner();
    updateHomeDashboard();
  }

  function updateHomeStageBanner() {
    const el = document.getElementById('currentStageIndicator');
    if (!el) return;

    const total1 = QUESTION_BANK.filter(q => q.stage === '1차').length;
    const total2 = QUESTION_BANK.filter(q => q.stage === '2차').length;

    if (state.currentStage === '1차') {
      el.innerHTML = `📘 <strong>1차 시험 전용 모드</strong> (${total1}문항: 리눅스의 이해, 설치 및 기본 명령어)`;
    } else if (state.currentStage === '2차') {
      el.innerHTML = `📗 <strong>2차 시험 전용 모드</strong> (${total2}문항: 10대 핵심 영역 집중 CBT)`;
    } else {
      el.innerHTML = `🌟 <strong>통합 올인원 모드</strong> (1차 ${total1}제 + 2차 ${total2}제 = 총 ${total1 + total2}제)`;
    }

    const cbtSpec = document.getElementById('cbtModeSpec');
    if (cbtSpec) {
      if (state.currentStage === '1차') cbtSpec.textContent = '1차 실전: 20문항 (과락 판정)';
      else if (state.currentStage === '2차') cbtSpec.textContent = '2차 실전: 40문항 (과락 판정)';
      else cbtSpec.textContent = '통합 실전: 50문항 (과락 판정)';
    }
  }

  function updateHomeDashboard() {
    updateHomeStageBanner();

    // 통계 숫자 반영
    const totalSolvedEl = document.getElementById('statTotalSolved');
    const accuracyEl = document.getElementById('statAccuracy');
    const wrongCountEl = document.getElementById('statWrongCount');
    const wrongBadge = document.getElementById('wrongCountBadge');
    const mobileWrongBadge = document.getElementById('mobileWrongBadge');

    const wrongTotal = state.wrongQuestionIds.size;
    if (totalSolvedEl) totalSolvedEl.textContent = state.stats.solved;
    if (accuracyEl) {
      const rate = state.stats.solved > 0
        ? Math.round((state.stats.correct / state.stats.solved) * 100)
        : 0;
      accuracyEl.textContent = `${rate}%`;
    }
    if (wrongCountEl) wrongCountEl.textContent = wrongTotal;

    const wrongSpecEl = document.getElementById('wrongModeSpec');
    if (wrongSpecEl) wrongSpecEl.textContent = `오답 ${wrongTotal}문제 누적`;

    // 뱃지 표시
    [wrongBadge, mobileWrongBadge].forEach(badge => {
      if (badge) {
        badge.textContent = wrongTotal;
        badge.classList.toggle('hidden', wrongTotal === 0);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. 퀴즈 생성 및 모드별 로직
  // --------------------------------------------------------------------------
  function getCandidateQuestions(stageFilter) {
    if (!stageFilter || stageFilter === 'all') {
      return [...QUESTION_BANK];
    }
    return QUESTION_BANK.filter(q => q.stage === stageFilter);
  }

  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function startQuizMode(mode, chapterFilter = null) {
    state.currentMode = mode;
    state.selectedChapter = chapterFilter;
    state.streak = 0;
    state.currentIndex = 0;
    state.isAnswerRevealed = false;
    clearInterval(state.timeAttackInterval);

    let candidates = getCandidateQuestions(state.currentStage);

    if (mode === 'practice') {
      // 학습형 연습 모드: 순서대로 풀며 즉시 채점 및 상세 해설 열람
      state.quizQuestions = [...candidates];
    } else if (mode === 'cbt') {
      // 실전 CBT 모의고사
      let limit = 40;
      if (state.currentStage === '1차') limit = 20;
      else if (state.currentStage === 'all') limit = 50;
      state.quizQuestions = shuffle(candidates).slice(0, limit);
    } else if (mode === 'survival') {
      // 1-Life 서바이벌 (전체 무작위 셔플)
      state.quizQuestions = shuffle(candidates);
    } else if (mode === 'timeattack') {
      // 10초 타임어택 (30문항 스피드런)
      state.quizQuestions = shuffle(candidates).slice(0, 30);
    } else if (mode === 'subject') {
      // 챕터별 집중 공략
      if (chapterFilter) {
        state.quizQuestions = shuffle(QUESTION_BANK.filter(q => q.chapter === chapterFilter));
      } else {
        state.quizQuestions = shuffle(candidates).slice(0, 20);
      }
    } else if (mode === 'killer') {
      // 킬러문항 챌린지 (계산, 특수권한, 시그널 등 고난도 키워드)
      const killerKeywords = ['umask', 'chmod', '시그널', 'kill', '포트', 'fstab', '서브넷', 'nice', 'crontab', 'LILO'];
      const killerPool = QUESTION_BANK.filter(q => 
        killerKeywords.some(kw => q.question.includes(kw) || q.options.some(o => o.includes(kw)))
      );
      state.quizQuestions = shuffle(killerPool).slice(0, 25);
    } else if (mode === 'wrong_retry') {
      // 오답 집중 재시험
      const wrongList = QUESTION_BANK.filter(q => state.wrongQuestionIds.has(q.id));
      if (wrongList.length === 0) {
        alert('🎉 현재 오답노트에 등록된 문제가 없습니다! 다른 퀴즈 모드를 먼저 풀어보세요.');
        return;
      }
      state.quizQuestions = shuffle(wrongList);
    }

    if (state.quizQuestions.length === 0) {
      alert('선택하신 조건에 해당하는 문제가 없습니다.');
      return;
    }

    state.userAnswers = new Array(state.quizQuestions.length).fill(-1);
    state.examStartTime = Date.now();

    switchView('quiz');
    renderCurrentQuestion();
  }

  // --------------------------------------------------------------------------
  // 6. 퀴즈 화면 렌더링 및 인터랙션
  // --------------------------------------------------------------------------
  function renderCurrentQuestion() {
    const q = state.quizQuestions[state.currentIndex];
    if (!q) return;

    state.isAnswerRevealed = false;
    clearInterval(state.timeAttackInterval);

    // 진행도 표시
    const total = state.quizQuestions.length;
    const currentNum = state.currentIndex + 1;
    document.getElementById('quizProgressText').textContent = `문제 ${currentNum} / ${total}`;
    document.getElementById('quizProgressFill').style.width = `${(currentNum / total) * 100}%`;
    document.getElementById('quizStreakText').textContent = `🔥 ${state.streak} 연승`;

    // 뱃지 표시
    document.getElementById('quizStageBadge').textContent = q.stage;
    const isMultiAns = Array.isArray(q.answer_indexes) && q.answer_indexes.length > 1;
    document.getElementById('quizSubjectBadge').textContent = isMultiAns ? `${q.chapter || q.subject} [※ 복수정답 문항: 정답 2개]` : (q.chapter || q.subject);

    // 북마크 상태 표시
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    bookmarkBtn.textContent = state.bookmarkedIds.has(q.id) ? '⭐' : '🔖';
    bookmarkBtn.title = state.bookmarkedIds.has(q.id) ? '북마크 해제' : '문제 북마크 추가';

    // 지문 및 문항 번호
    document.getElementById('qNumber').textContent = `Q.${currentNum}`;
    
    // 지문 서식 변환 (명령어 `# command` 코드 블록 하이라이트)
    const formattedQ = formatTerminalCommands(q.question);
    document.getElementById('questionText').innerHTML = formattedQ;

    // 4개 선택지 렌더링
    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = '';

    const selectedAns = state.userAnswers[state.currentIndex];

    q.options.forEach((optText, idx) => {
      const optBtn = document.createElement('button');
      optBtn.className = 'option-item';
      if (selectedAns === idx) optBtn.classList.add('selected');

      const indexLabels = ['①', '②', '③', '④'];
      optBtn.innerHTML = `
        <span class="opt-index">${indexLabels[idx]}</span>
        <span class="opt-text">${escapeHtml(optText)}</span>
      `;

      optBtn.addEventListener('click', () => handleOptionClick(idx));
      optionsList.appendChild(optBtn);
    });

    // 연습 모드 전용 버튼 표시 제어
    const practiceAnsBtn = document.getElementById('revealPracticeAnsBtn');
    if (practiceAnsBtn) {
      practiceAnsBtn.style.display = (state.currentMode === 'practice') ? 'inline-flex' : 'none';
    }

    // 해설 박스 초기화
    const expBox = document.getElementById('explanationBox');
    expBox.classList.add('hidden');

    // 이미 답변한 문제이거나 해설을 본 상태이면 상태 복원
    if (selectedAns !== -1 && selectedAns !== undefined) {
      revealAnswer(selectedAns, q.answer_index);
    }

    // 타임어택 모드인 경우 10초 카운트다운 타이머 구동
    const timerBadge = document.getElementById('quizTimerBadge');
    if (state.currentMode === 'timeattack') {
      timerBadge.classList.remove('hidden');
      startTimeAttackCountdown();
    } else {
      timerBadge.classList.add('hidden');
    }

    // 네비게이션 버튼 가시성 제어
    document.getElementById('quizPrevBtn').style.visibility = state.currentIndex > 0 ? 'visible' : 'hidden';
    const isLast = state.currentIndex === total - 1;
    document.getElementById('quizSkipBtn').style.display = isLast ? 'none' : 'inline-block';
    document.getElementById('quizSubmitBtn').style.display = isLast ? 'inline-block' : 'none';
  }

  function formatTerminalCommands(text) {
    let safe = escapeHtml(text);
    // `# export ...` or `$ command` 터미널 구문 강조
    safe = safe.replace(/(#\s*[^\n]+)/g, '<code>$1</code>');
    safe = safe.replace(/(\$\s*[^\n]+)/g, '<code>$1</code>');
    return safe;
  }

  function startTimeAttackCountdown() {
    state.timeAttackRemaining = 10;
    const timerBadge = document.getElementById('quizTimerBadge');
    timerBadge.textContent = `⏱️ ${state.timeAttackRemaining}초`;

    clearInterval(state.timeAttackInterval);
    state.timeAttackInterval = setInterval(() => {
      state.timeAttackRemaining--;
      playSound('tick');
      timerBadge.textContent = `⏱️ ${state.timeAttackRemaining}초`;

      if (state.timeAttackRemaining <= 0) {
        clearInterval(state.timeAttackInterval);
        handleTimeAttackTimeout();
      }
    }, 1000);
  }

  function handleTimeAttackTimeout() {
    playSound('wrong');
    const q = state.quizQuestions[state.currentIndex];
    state.userAnswers[state.currentIndex] = -2; // 시간 초과
    state.wrongQuestionIds.add(q.id);
    state.streak = 0;
    saveStorage();

    revealAnswer(-2, q.answer_index, "⏱️ 10초 시간 초과! 아쉽게도 정답을 고르지 못했습니다.");
  }

  function handleOptionClick(choiceIndex) {
    if (state.isAnswerRevealed) return;
    clearInterval(state.timeAttackInterval);

    const q = state.quizQuestions[state.currentIndex];
    state.userAnswers[state.currentIndex] = choiceIndex;
    const isCorrect = isQuestionCorrect(q, choiceIndex);

    // 통계 갱신
    state.stats.solved++;
    if (isCorrect) {
      state.stats.correct++;
      state.streak++;
      if (state.streak > state.maxStreak) state.maxStreak = state.streak;
      playSound('correct');
      // 맞춘 문제는 오답노트에서 자동 제거 (오답노트 클리어 효과)
      if (state.currentMode === 'wrong_retry') {
        state.wrongQuestionIds.delete(q.id);
      }
    } else {
      state.streak = 0;
      playSound('wrong');
      state.wrongQuestionIds.add(q.id);
    }
    saveStorage();

    // 모드별 액션
    if (state.currentMode === 'practice') {
      // 연습 모드: 문제를 풀자마자 즉시 정답 및 상세 해설 표시 (자동 넘어가지 않고 정독 가능)
      revealAnswer(choiceIndex, q.answer_index);
    } else if (state.currentMode === 'cbt') {
      // 실전 CBT는 즉시 답을 보여주지 않고 선택만 마킹한 후 다음 문제로 즉시 넘김
      const optButtons = document.querySelectorAll('.option-item');
      optButtons.forEach((b, idx) => b.classList.toggle('selected', idx === choiceIndex));

      setTimeout(() => {
        if (state.currentIndex < state.quizQuestions.length - 1) {
          state.currentIndex++;
          renderCurrentQuestion();
        } else {
          // 마지막 문제 선택 시 자동 제출 여부 안내
          revealAnswer(choiceIndex, q.answer_index);
        }
      }, 350);
    } else if (state.currentMode === 'survival') {
      // 서바이벌 모드: 틀리면 즉시 탈락!
      revealAnswer(choiceIndex, q.answer_index);
      if (!isCorrect) {
        setTimeout(() => {
          alert(`⚡ 서바이벌 탈락! 연속 정답 기록: ${state.maxStreak}연승`);
          finishExam();
        }, 1200);
      }
    } else {
      // 타임어택, 챕터집중, 킬러, 오답재시험 등: 즉시 피드백
      revealAnswer(choiceIndex, q.answer_index);
    }
  }

  function revealAnswer(userChoice, correctChoice, customHeaderMsg = null) {
    state.isAnswerRevealed = true;
    const q = state.quizQuestions[state.currentIndex];
    const isCorrect = isQuestionCorrect(q, userChoice);

    const optButtons = document.querySelectorAll('.option-item');
    optButtons.forEach((btn, idx) => {
      btn.classList.add('disabled');
      const isAnswerItem = Array.isArray(q.answer_indexes) ? q.answer_indexes.includes(idx) : (idx === correctChoice);
      if (isAnswerItem) {
        btn.classList.add('correct');
      } else if (idx === userChoice) {
        btn.classList.add('wrong');
      }
    });

    // 해설 박스 노출
    const expBox = document.getElementById('explanationBox');
    const titleEl = document.getElementById('expResultTitle');
    const noteEl = document.getElementById('expVerifiedNote');
    const contentEl = document.getElementById('expContent');

    if (customHeaderMsg) {
      titleEl.textContent = customHeaderMsg;
      titleEl.style.color = 'var(--accent-red)';
    } else if (Array.isArray(q.answer_indexes) && q.answer_indexes.length > 1) {
      const ansLabels = q.answer_indexes.map(i => `${i + 1}번`).join(', ');
      if (isCorrect) {
        titleEl.textContent = `🎉 정답입니다! (복수 정답: ${ansLabels})`;
        titleEl.style.color = 'var(--accent-green)';
      } else {
        titleEl.textContent = `❌ 오답입니다. (복수 정답: ${ansLabels} 모두 정답)`;
        titleEl.style.color = 'var(--accent-red)';
      }
    } else if (isCorrect) {
      titleEl.textContent = '🎉 정답입니다!';
      titleEl.style.color = 'var(--accent-green)';
    } else {
      titleEl.textContent = `❌ 오답입니다. (정답: ${correctChoice + 1}번)`;
      titleEl.style.color = 'var(--accent-red)';
    }

    noteEl.textContent = q.verification_note ? `[${q.verification_note}]` : '';
    contentEl.innerHTML = `<strong>💡 핵심 해설:</strong> ${escapeHtml(q.explanation)}`;

    expBox.classList.remove('hidden');

    const nextBtn = document.getElementById('nextQuestionBtn');
    if (state.currentIndex === state.quizQuestions.length - 1) {
      nextBtn.textContent = '최종 시험 결과 확인 ➔';
    } else {
      nextBtn.textContent = '다음 문제로 이동 ➔';
    }
  }

  function handleNextQuestion() {
    if (state.currentIndex < state.quizQuestions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
    } else {
      finishExam();
    }
  }

  function handlePrevQuestion() {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderCurrentQuestion();
    }
  }

  function handleSkipQuestion() {
    if (state.currentIndex < state.quizQuestions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
    }
  }

  function toggleBookmark() {
    const q = state.quizQuestions[state.currentIndex];
    if (!q) return;

    if (state.bookmarkedIds.has(q.id)) {
      state.bookmarkedIds.delete(q.id);
    } else {
      state.bookmarkedIds.add(q.id);
    }
    saveStorage();
    renderCurrentQuestion();
  }

  // --------------------------------------------------------------------------
  // 7. 시험 종료 및 결과 화면 판정 (Result View)
  // --------------------------------------------------------------------------
  function finishExam() {
    clearInterval(state.timeAttackInterval);
    clearInterval(state.examTimerInterval);

    const total = state.quizQuestions.length;
    let correctCount = 0;
    const subjectStats = {};

    state.quizQuestions.forEach((q, idx) => {
      const uAns = state.userAnswers[idx];
      const isCorrect = isQuestionCorrect(q, uAns);
      if (isCorrect) correctCount++;

      const subKey = q.chapter || q.subject || '기본 과목';
      if (!subjectStats[subKey]) {
        subjectStats[subKey] = { total: 0, correct: 0 };
      }
      subjectStats[subKey].total++;
      if (isCorrect) subjectStats[subKey].correct++;
    });

    const finalScore = Math.round((correctCount / total) * 100);
    const durationSeconds = Math.max(1, Math.round((Date.now() - state.examStartTime) / 1000));
    const durationFormatted = `${Math.floor(durationSeconds / 60)}분 ${durationSeconds % 60}초`;

    // 합격/과락 판정 (총점 60점 이상 & 매 과목 40% 이상)
    let isPassed = finalScore >= 60;
    let hasFailedSubject = false;

    for (const sub in subjectStats) {
      const s = subjectStats[sub];
      const subScore = (s.correct / s.total) * 100;
      if (subScore < 40) {
        hasFailedSubject = true;
      }
    }

    if (hasFailedSubject && state.currentMode === 'cbt') {
      isPassed = false; // 과락 발생 시 불합격
    }

    // 결과 UI 렌더링
    const verdictBadge = document.getElementById('resultVerdictBadge');
    const verdictIcon = document.getElementById('resultVerdictIcon');
    const verdictText = document.getElementById('resultVerdictText');

    verdictBadge.className = 'result-verdict-badge';
    if (isPassed) {
      verdictBadge.classList.add('pass');
      verdictIcon.textContent = '🎉';
      verdictText.textContent = `최종 합격 (합격 기준 60점 달성)`;
      playSound('victory');
    } else {
      verdictBadge.classList.add('fail');
      verdictIcon.textContent = '⚠️';
      if (hasFailedSubject && finalScore >= 60) {
        verdictText.textContent = `과락 불합격 (40점 미만 과목 발생)`;
      } else {
        verdictText.textContent = `불합격 (합격 기준 60점 미달)`;
      }
      playSound('wrong');
    }

    document.getElementById('resultScoreNum').textContent = finalScore;
    document.getElementById('resultModeName').textContent = getModeDisplayName(state.currentMode);
    document.getElementById('resultStageName').textContent = state.currentStage === 'all' ? '전체 통합' : `${state.currentStage} 시험 대비`;
    document.getElementById('resultDuration').textContent = durationFormatted;
    document.getElementById('resultCorrectRatio').textContent = `${correctCount}개 정답 / ${total - correctCount}개 오답`;

    // 과목별 과락 진단표 렌더링
    const breakdownList = document.getElementById('resultBreakdownList');
    breakdownList.innerHTML = '';

    for (const sub in subjectStats) {
      const s = subjectStats[sub];
      const pct = Math.round((s.correct / s.total) * 100);
      const isSubFailed = pct < 40;

      const item = document.createElement('div');
      item.className = 'breakdown-item';
      item.innerHTML = `
        <div class="breakdown-header">
          <span>${escapeHtml(sub)} (${s.correct}/${s.total})</span>
          <span class="breakdown-score ${isSubFailed ? 'fail-warn' : ''}">
            ${pct}점 ${isSubFailed ? '⚠️ 과락 위험' : '정상'}
          </span>
        </div>
        <div class="breakdown-bar">
          <div class="breakdown-bar-fill" style="width: ${pct}%; background-color: ${isSubFailed ? 'var(--accent-red)' : 'var(--primary)'}"></div>
        </div>
      `;
      breakdownList.appendChild(item);
    }

    switchView('result');
  }

  function getModeDisplayName(mode) {
    const map = {
      practice: '연습 모드 (즉시 해설)',
      cbt: '실전 CBT 모의고사',
      survival: '서바이벌 데스매치',
      timeattack: '10초 타임어택',
      subject: '과목/챕터별 집중 공략',
      killer: '교차검증 킬러문항 챌린지',
      wrong_retry: '스마트 오답 집중 재시험'
    };
    return map[mode] || mode;
  }

  // --------------------------------------------------------------------------
  // 8. 뷰 3: 핵심 요약 정리관 (Study Hub) 렌더링
  // --------------------------------------------------------------------------
  let studyStageFilter = 'all';

  function renderStudyHub() {
    const container = document.getElementById('studyChaptersContainer');
    if (!container) return;
    container.innerHTML = '';

    const query = (document.getElementById('studySearchInput').value || '').trim().toLowerCase();

    const filtered = STUDY_CHAPTERS.filter(ch => {
      // 1. 차수 필터
      if (studyStageFilter !== 'all' && ch.stage !== studyStageFilter) return false;
      // 2. 검색어 필터
      if (!query) return true;
      const matchTitle = ch.title.toLowerCase().includes(query);
      const matchDesc = ch.description.toLowerCase().includes(query);
      const matchSections = ch.sections.some(s => 
        s.subtitle.toLowerCase().includes(query) ||
        (s.content && s.content.toLowerCase().includes(query)) ||
        (s.table && JSON.stringify(s.table).toLowerCase().includes(query))
      );
      return matchTitle || matchDesc || matchSections;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">검색 결과가 없습니다</h3>
          <p class="empty-desc">'${escapeHtml(query)}' 키워드에 해당하는 요약 내용을 찾을 수 없습니다.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((ch, chIdx) => {
      const card = document.createElement('div');
      card.className = `chapter-accordion ${query ? 'open' : (chIdx === 0 ? 'open' : '')}`;
      
      let sectionsHtml = '';
      ch.sections.forEach(sec => {
        let tableHtml = '';
        if (sec.table) {
          const ths = sec.table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('');
          const trs = sec.table.rows.map(row => 
            `<tr>${row.map(col => `<td>${col}</td>`).join('')}</tr>`
          ).join('');
          tableHtml = `
            <div class="study-table-wrap">
              <table class="study-table">
                <thead><tr>${ths}</tr></thead>
                <tbody>${trs}</tbody>
              </table>
            </div>
          `;
        }

        sectionsHtml += `
          <div class="study-section-card">
            <h4 class="section-subtitle">${escapeHtml(sec.subtitle)}</h4>
            <div class="section-text">${sec.content || ''}</div>
            ${tableHtml}
          </div>
        `;
      });

      card.innerHTML = `
        <div class="accordion-header">
          <div class="chapter-title-group">
            <span class="chapter-stage-tag">${ch.stage}</span>
            <h3 class="chapter-name">${escapeHtml(ch.title)}</h3>
          </div>
          <span class="accordion-arrow">▼</span>
        </div>
        <div class="accordion-body">
          <div class="chapter-desc-box">${escapeHtml(ch.description)}</div>
          ${sectionsHtml}
        </div>
      `;

      card.querySelector('.accordion-header').addEventListener('click', () => {
        card.classList.toggle('open');
      });

      container.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // 9. 뷰 4: 스마트 오답노트 (Wrong Note) 렌더링
  // --------------------------------------------------------------------------
  let wrongStageFilter = 'all';

  function renderWrongNoteList() {
    const container = document.getElementById('wrongListContainer');
    if (!container) return;
    container.innerHTML = '';

    const wrongList = QUESTION_BANK.filter(q => state.wrongQuestionIds.has(q.id));

    // 카운트 숫자 갱신
    document.getElementById('wrongFilterAllCount').textContent = wrongList.length;
    document.getElementById('wrongFilter1Count').textContent = wrongList.filter(q => q.stage === '1차').length;
    document.getElementById('wrongFilter2Count').textContent = wrongList.filter(q => q.stage === '2차').length;

    const filtered = wrongList.filter(q => {
      if (wrongStageFilter !== 'all' && q.stage !== wrongStageFilter) return false;
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🎉</div>
          <h3 class="empty-title">오답노트가 비어 있습니다!</h3>
          <p class="empty-desc">틀린 문제가 없거나 모든 오답을 완벽히 마스터하셨습니다.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(q => {
      const card = document.createElement('div');
      card.className = 'wrong-item-card';

      card.innerHTML = `
        <div class="card-meta-row">
          <div style="display:flex; gap:6px;">
            <span class="badge stage-badge">${q.stage}</span>
            <span class="badge subject-badge">${escapeHtml(q.chapter || q.subject)}</span>
          </div>
          <button class="btn-subtle" onclick="removeSingleWrong(${q.id})">오답 삭제 ✕</button>
        </div>
        <h4 class="card-title">${escapeHtml(q.question)}</h4>
        <div class="card-answer-box">
          <div class="ans-line">정답: <strong>${escapeHtml(getQuestionAnswerDisplay(q))}</strong></div>
          <div style="margin-top:6px; color:var(--text-muted);">
            💡 <strong>해설:</strong> ${escapeHtml(q.explanation)}
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  window.removeSingleWrong = function (id) {
    state.wrongQuestionIds.delete(id);
    saveStorage();
    renderWrongNoteList();
    updateHomeDashboard();
  };

  // --------------------------------------------------------------------------
  // 10. 뷰 5: 전 문항 기출 사전 (Question Explorer)
  // --------------------------------------------------------------------------
  function renderQuestionExplorer() {
    const container = document.getElementById('explorerListContainer');
    if (!container) return;
    container.innerHTML = '';

    const query = (document.getElementById('explorerSearchInput').value || '').trim().toLowerCase();
    const stageVal = document.getElementById('explorerStageSelect').value;
    const chapterVal = document.getElementById('explorerChapterSelect').value;

    // 챕터 셀렉트박스 옵션 채우기 (최초 1회)
    const chapterSelect = document.getElementById('explorerChapterSelect');
    if (chapterSelect.children.length <= 1) {
      const uniqueChapters = [...new Set(QUESTION_BANK.map(q => q.chapter || q.subject))];
      uniqueChapters.forEach(ch => {
        const opt = document.createElement('option');
        opt.value = ch;
        opt.textContent = ch;
        chapterSelect.appendChild(opt);
      });
    }

    const filtered = QUESTION_BANK.filter(q => {
      if (stageVal !== 'all' && q.stage !== stageVal) return false;
      if (chapterVal !== 'all' && (q.chapter || q.subject) !== chapterVal) return false;
      if (!query) return true;

      const matchQ = q.question.toLowerCase().includes(query);
      const matchOpts = q.options.some(o => o.toLowerCase().includes(query));
      const matchExp = q.explanation.toLowerCase().includes(query);
      return matchQ || matchOpts || matchExp;
    });

    document.getElementById('explorerMatchCount').textContent = filtered.length;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">일치하는 문항이 없습니다</h3>
          <p class="empty-desc">다른 검색어나 필터를 설정해보세요.</p>
        </div>
      `;
      return;
    }

    // 성능을 위해 상위 100문항만 가상화 렌더링
    const slice = filtered.slice(0, 100);

    slice.forEach(q => {
      const card = document.createElement('div');
      card.className = 'explorer-item-card';

      const optListHtml = q.options.map((opt, i) => {
        const isAns = Array.isArray(q.answer_indexes) ? q.answer_indexes.includes(i) : (i === q.answer_index);
        return `<li style="${isAns ? 'color:var(--accent-green); font-weight:700;' : ''}">${i + 1}. ${escapeHtml(opt)} ${isAns ? '✓ (정답)' : ''}</li>`;
      }).join('');

      card.innerHTML = `
        <div class="card-meta-row">
          <div style="display:flex; gap:6px;">
            <span class="badge stage-badge">${q.stage}</span>
            <span class="badge subject-badge">${escapeHtml(q.chapter || q.subject)}</span>
          </div>
          <span style="font-size:0.75rem; color:var(--text-sub);">출처: ${escapeHtml(q.source)}</span>
        </div>
        <h4 class="card-title">${escapeHtml(q.question)}</h4>
        <ul style="margin: 8px 0 12px 20px; font-size:0.9rem; line-height:1.6;">${optListHtml}</ul>
        <div class="card-answer-box">
          <div>💡 <strong>해설:</strong> ${escapeHtml(q.explanation)}</div>
          ${q.verification_note ? `<div style="margin-top:4px; font-size:0.75rem; color:var(--accent-green);">🛡️ ${escapeHtml(q.verification_note)}</div>` : ''}
        </div>
      `;

      container.appendChild(card);
    });

    if (filtered.length > 100) {
      const moreNotice = document.createElement('div');
      moreNotice.style.textAlign = 'center';
      moreNotice.style.padding = '16px';
      moreNotice.style.color = 'var(--text-sub)';
      moreNotice.textContent = `... 외 ${filtered.length - 100}개 문항이 더 있습니다. 상세 검색어를 입력해 범위를 좁혀보세요.`;
      container.appendChild(moreNotice);
    }
  }

  // --------------------------------------------------------------------------
  // 11. 챕터 선택 모달 (Subject Mastery Modal)
  // --------------------------------------------------------------------------
  window.openSubjectModal = function () {
    const modal = document.getElementById('subjectModal');
    const list = document.getElementById('subjectSelectionList');
    list.innerHTML = '';

    const chaptersMap = {};
    QUESTION_BANK.forEach(q => {
      const chName = q.chapter || q.subject;
      if (!chaptersMap[chName]) {
        chaptersMap[chName] = { stage: q.stage, count: 0 };
      }
      chaptersMap[chName].count++;
    });

    for (const ch in chaptersMap) {
      const info = chaptersMap[ch];
      const item = document.createElement('div');
      item.className = 'subject-select-item';
      item.innerHTML = `
        <div class="sub-item-info">
          <strong>${escapeHtml(ch)}</strong>
          <span>${info.stage} 시험 영역 (${info.count}문항 수록)</span>
        </div>
        <button class="btn-subtle">학습 시작 →</button>
      `;
      item.addEventListener('click', () => {
        closeSubjectModal();
        startQuizMode('subject', ch);
      });
      list.appendChild(item);
    }

    modal.classList.remove('hidden');
  };

  window.closeSubjectModal = function () {
    document.getElementById('subjectModal').classList.add('hidden');
  };

  // --------------------------------------------------------------------------
  // 12. 유틸리티 함수 & 이벤트 리스너 등록
  // --------------------------------------------------------------------------
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[m]);
  }

  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // 전역 노출 함수
  window.switchView = switchView;
  window.setAppStage = setAppStage;
  window.startQuizMode = startQuizMode;

  function initEventListeners() {
    // 1. 헤더 브랜드 클릭 시 홈으로 이동
    document.getElementById('brandHomeBtn').addEventListener('click', () => switchView('home'));

    // 2. 상단 차수 알약 버튼
    document.querySelectorAll('.stage-pill').forEach(btn => {
      btn.addEventListener('click', () => setAppStage(btn.dataset.stage));
    });

    // 3. 메인 탭 클릭
    document.querySelectorAll('.main-tabs .tab-btn').forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    // 4. 모바일 하단 네비게이션 클릭
    document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const mv = btn.dataset.mobileView;
        if (mv === 'stage1') {
          setAppStage('1차');
          startQuizMode('cbt');
        } else if (mv === 'stage2') {
          setAppStage('2차');
          startQuizMode('cbt');
        } else {
          switchView(mv);
        }
      });
    });

    // 5. 스마트폰 화면 에뮬레이터 토글 버튼
    const mobileToggleBtn = document.getElementById('mobileViewToggleBtn');
    if (mobileToggleBtn) {
      mobileToggleBtn.addEventListener('click', () => {
        state.isMobileEmulator = !state.isMobileEmulator;
        document.body.classList.toggle('mobile-emulator-active', state.isMobileEmulator);
        playSound('click');
        saveStorage();
      });
    }

    // 6. 사운드 On/Off 토글
    const soundBtn = document.getElementById('soundToggleBtn');
    soundBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      soundBtn.querySelector('.icon').textContent = state.soundEnabled ? '🔊' : '🔇';
      playSound('click');
      saveStorage();
    });

    // 7. 테마 전환 토글 (다크 / 라이트)
    const themeBtn = document.getElementById('themeToggleBtn');
    themeBtn.addEventListener('click', () => {
      state.isDarkMode = !state.isDarkMode;
      document.body.classList.toggle('light-theme', !state.isDarkMode);
      document.body.classList.toggle('dark-theme', state.isDarkMode);
      playSound('click');
      saveStorage();
    });

    // 8. 퀴즈 조작 버튼들
    document.getElementById('nextQuestionBtn').addEventListener('click', handleNextQuestion);
    const practiceAnsBtnEl = document.getElementById('revealPracticeAnsBtn');
    if (practiceAnsBtnEl) {
      practiceAnsBtnEl.addEventListener('click', revealPracticeAnswerDirectly);
    }
    document.getElementById('quizPrevBtn').addEventListener('click', handlePrevQuestion);
    document.getElementById('quizSkipBtn').addEventListener('click', handleSkipQuestion);
    document.getElementById('quizSubmitBtn').addEventListener('click', finishExam);
    document.getElementById('quizQuitBtn').addEventListener('click', () => {
      if (confirm('현재 진행 중인 시험을 종료하고 홈으로 이동하시겠습니까?')) {
        clearInterval(state.timeAttackInterval);
        switchView('home');
      }
    });
    document.getElementById('bookmarkBtn').addEventListener('click', toggleBookmark);

    // 9. 결과 화면 버튼들
    document.getElementById('resultReviewWrongBtn').addEventListener('click', () => switchView('wrong'));
    document.getElementById('resultRetryBtn').addEventListener('click', () => startQuizMode(state.currentMode, state.selectedChapter));

    // 10. 요약집 검색 및 차수 필터
    const studySearch = document.getElementById('studySearchInput');
    const clearStudyBtn = document.getElementById('clearStudySearchBtn');
    studySearch.addEventListener('input', () => {
      clearStudyBtn.classList.toggle('hidden', !studySearch.value);
      renderStudyHub();
    });
    clearStudyBtn.addEventListener('click', () => {
      studySearch.value = '';
      clearStudyBtn.classList.add('hidden');
      renderStudyHub();
    });

    document.querySelectorAll('.study-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.study-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        studyStageFilter = pill.dataset.studyStage;
        renderStudyHub();
      });
    });

    document.getElementById('expandAllChaptersBtn').addEventListener('click', () => {
      document.querySelectorAll('.chapter-accordion').forEach(a => a.classList.add('open'));
    });
    document.getElementById('collapseAllChaptersBtn').addEventListener('click', () => {
      document.querySelectorAll('.chapter-accordion').forEach(a => a.classList.remove('open'));
    });

    // 11. 오답노트 필터 및 버튼
    document.querySelectorAll('.wrong-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.wrong-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        wrongStageFilter = btn.dataset.wrongStage;
        renderWrongNoteList();
      });
    });

    document.getElementById('retryWrongQuestionsBtn').addEventListener('click', () => {
      startQuizMode('wrong_retry');
    });

    document.getElementById('clearWrongNotesBtn').addEventListener('click', () => {
      if (confirm('오답노트에 수집된 모든 문제를 비우시겠습니까?')) {
        state.wrongQuestionIds.clear();
        saveStorage();
        renderWrongNoteList();
        updateHomeDashboard();
      }
    });

    // 12. 기출 사전 필터
    const explorerSearch = document.getElementById('explorerSearchInput');
    const clearExplorerBtn = document.getElementById('clearExplorerSearchBtn');
    explorerSearch.addEventListener('input', () => {
      clearExplorerBtn.classList.toggle('hidden', !explorerSearch.value);
      renderQuestionExplorer();
    });
    clearExplorerBtn.addEventListener('click', () => {
      explorerSearch.value = '';
      clearExplorerBtn.classList.add('hidden');
      renderQuestionExplorer();
    });

    document.getElementById('explorerStageSelect').addEventListener('change', renderQuestionExplorer);
    document.getElementById('explorerChapterSelect').addEventListener('change', renderQuestionExplorer);

    // 13. 키보드 단축키 지원 (숫자 1, 2, 3, 4로 보기 선택)
    window.addEventListener('keydown', (e) => {
      if (state.currentView !== 'quiz') return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        handleOptionClick(idx);
      } else if (e.key === 'Enter') {
        if (state.isAnswerRevealed) {
          handleNextQuestion();
        }
      } else if (e.key === 'ArrowRight') {
        handleSkipQuestion();
      } else if (e.key === 'ArrowLeft') {
        handlePrevQuestion();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 13. 초기 실행 (Bootstrap)
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    loadStorage();

    // 초기 테마 및 에뮬레이터 적용
    document.body.classList.toggle('light-theme', !state.isDarkMode);
    document.body.classList.toggle('dark-theme', state.isDarkMode);
    document.body.classList.toggle('mobile-emulator-active', state.isMobileEmulator);

    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) soundBtn.querySelector('.icon').textContent = state.soundEnabled ? '🔊' : '🔇';

    initEventListeners();
    setAppStage(state.currentStage || 'all');
    switchView('home');
  });

})();
