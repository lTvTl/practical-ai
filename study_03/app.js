/**
 * 정보처리기사 기출 퀴즈 게임 애플리케이션 로직 (app.js)
 * 순수 Vanilla JavaScript (Zero Dependency)
 * 
 * 기능:
 * - 6가지 게임 모드 (클래식, 실전 모의고사 & 과락 진단, 서바이벌 데스매치, 10초 타임어택, 과목별 집중 공략, 스마트 오답노트)
 * - 복합 점수 시스템 (기본점수 + 연속 콤보 보너스 + 스피드 판단력 보너스)
 * - 성적 티어/등급 시스템 (S/A/B/C/F)
 * - 모의고사 5개 과목별 과락(40% 미만) 자동 진단 리포트
 * - 스마트 오답노트 자동 수집 및 재시험/마스터 기능
 * - Web Audio API 기반 절차적 사운드 합성 (콤보 피치업, 타임어택 틱, 탈락음)
 * - Canvas Confetti 폭죽 애니메이션
 * - 모드별 랭킹 필터 지원
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. 상수 및 초기 기본 데이터
  // ==========================================================================
  const QUIZ_CONFIG = {
    QUESTIONS_PER_ROUND: 10,
    PASSING_SCORE_RATE: 0.6, // 60% 이상 합격
    CUTOFF_SCORE_RATE: 0.4,  // 40% 미만 과락
    TIME_ATTACK_SECONDS: 10, // 타임어택 문제당 제한 시간
    BASE_SCORE: 100,         // 문제당 기본 점수

    STORAGE_KEY_LEADERBOARD: 'cbt_quiz_leaderboard_v3',
    STORAGE_KEY_WRONG_NOTES: 'cbt_quiz_wrong_notes_v1',
    STORAGE_KEY_THEME: 'cbt_quiz_theme',
    STORAGE_KEY_SOUND: 'cbt_quiz_sound'
  };

  const SUBJECTS = [
    '소프트웨어 설계',
    '소프트웨어 개발',
    '데이터베이스 구축',
    '프로그래밍 언어 활용',
    '정보시스템 구축관리'
  ];

  // ==========================================================================
  // 2. 사운드 컨트롤러 (Web Audio API 기반 무외부파일 사운드 엔진)
  // ==========================================================================
  class SoundController {
    constructor() {
      this.enabled = localStorage.getItem(QUIZ_CONFIG.STORAGE_KEY_SOUND) !== 'false';
      this.audioCtx = null;
    }

    init() {
      if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem(QUIZ_CONFIG.STORAGE_KEY_SOUND, this.enabled);
      return this.enabled;
    }

    playCorrect(combo = 0) {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      // 콤보가 쌓일수록 기본 피치가 조금씩 상승 (최대 +160Hz)
      const pitchOffset = Math.min(combo * 20, 160);
      const base1 = 698.46 + pitchOffset; // F5 부근
      const base2 = 880.00 + pitchOffset; // A5 부근

      this._playTone(base1, now, 0.12, 'sine', 0.15);
      this._playTone(base2, now + 0.1, 0.25, 'sine', 0.16);

      // 4콤보 이상일 때 추가 고음 화음 연출
      if (combo >= 4) {
        this._playTone(base2 * 1.25, now + 0.18, 0.22, 'triangle', 0.12);
      }
    }

    playIncorrect() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      this._playTone(220, now, 0.15, 'sawtooth', 0.12);
      this._playTone(180, now + 0.15, 0.25, 'sawtooth', 0.12);
    }

    playGameOver() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const notes = [392.00, 311.13, 261.63]; // G4, Eb4, C4
      notes.forEach((freq, idx) => {
        this._playTone(freq, now + idx * 0.16, 0.24, 'sawtooth', 0.14);
      });
    }

    playFanfare() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        this._playTone(freq, now + idx * 0.11, 0.2, 'triangle', 0.18);
      });
    }

    playTick() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      this._playTone(950, now, 0.04, 'sine', 0.08);
    }

    playTimeUp() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      this._playTone(330, now, 0.2, 'square', 0.15);
      this._playTone(220, now + 0.2, 0.35, 'square', 0.15);
    }

    _playTone(freq, startTime, duration, type = 'sine', volume = 0.15) {
      try {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(volume, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
      } catch (e) {
        // 예외 무시
      }
    }
  }

  // ==========================================================================
  // 3. Canvas Confetti 효과 (폭죽 애니메이션)
  // ==========================================================================
  class ConfettiEffect {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas ? canvas.getContext('2d') : null;
      this.particles = [];
      this.animationId = null;
      this.colors = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4'];
    }

    start() {
      if (!this.canvas || !this.ctx) return;
      this.stop();
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      this.particles = [];

      for (let i = 0; i < 90; i++) {
        this.particles.push({
          x: this.canvas.width / 2,
          y: this.canvas.height / 2,
          vx: (Math.random() - 0.5) * 14,
          vy: (Math.random() - 0.7) * 16,
          size: Math.random() * 8 + 4,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
          gravity: 0.35,
          opacity: 1
        });
      }

      this._animate();
    }

    stop() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }

    _animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let aliveCount = 0;

      for (const p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.008;

        if (p.opacity > 0) {
          aliveCount++;
          this.ctx.save();
          this.ctx.translate(p.x, p.y);
          this.ctx.rotate((p.rotation * Math.PI) / 180);
          this.ctx.globalAlpha = Math.max(0, p.opacity);
          this.ctx.fillStyle = p.color;
          this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          this.ctx.restore();
        }
      }

      if (aliveCount > 0) {
        this.animationId = requestAnimationFrame(() => this._animate());
      }
    }
  }

  // ==========================================================================
  // 4. 스마트 오답노트 매니저 (WrongNotesManager)
  // ==========================================================================
  const WrongNotesManager = {
    getNotes() {
      try {
        const raw = localStorage.getItem(QUIZ_CONFIG.STORAGE_KEY_WRONG_NOTES);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        return [];
      }
    },

    saveNotes(notes) {
      try {
        localStorage.setItem(QUIZ_CONFIG.STORAGE_KEY_WRONG_NOTES, JSON.stringify(notes));
      } catch (e) {
        console.error('Failed to save wrong notes', e);
      }
    },

    addNote(question) {
      if (!question || !question.id) return;
      const notes = this.getNotes();
      // 이미 저장된 문제는 중복 추가 방지 (최신 일자 갱신)
      const existingIdx = notes.findIndex(item => item.id === question.id);
      if (existingIdx !== -1) {
        notes.splice(existingIdx, 1);
      }
      notes.unshift({
        ...question,
        addedAt: Date.now()
      });
      this.saveNotes(notes);
    },

    removeNote(questionId) {
      const notes = this.getNotes().filter(item => item.id !== questionId);
      this.saveNotes(notes);
      return notes;
    },

    clearAll() {
      localStorage.removeItem(QUIZ_CONFIG.STORAGE_KEY_WRONG_NOTES);
    },

    getCount() {
      return this.getNotes().length;
    }
  };

  // ==========================================================================
  // 5. DOM 요소 캐싱 및 런타임 상태 정의
  // ==========================================================================
  const soundCtrl = new SoundController();
  let confetti = null;

  const DOM = {
    // Screens
    introScreen: document.getElementById('introScreen'),
    gameScreen: document.getElementById('gameScreen'),
    resultScreen: document.getElementById('resultScreen'),

    // Top Controls
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    soundToggleBtn: document.getElementById('soundToggleBtn'),
    soundIcon: document.getElementById('soundIcon'),

    // Intro Screen Elements
    modeGrid: document.getElementById('modeGrid'),
    subjectSelectArea: document.getElementById('subjectSelectArea'),
    subjectChips: document.getElementById('subjectChips'),
    startQuizBtn: document.getElementById('startQuizBtn'),
    startBtnLabel: document.getElementById('startBtnLabel'),
    wrongNoteBadge: document.getElementById('wrongNoteBadge'),
    wrongNoteModeCard: document.getElementById('wrongNoteModeCard'),
    openWrongNotesBtn: document.getElementById('openWrongNotesBtn'),
    utilWrongCount: document.getElementById('utilWrongCount'),
    openLeaderboardFromIntro: document.getElementById('openLeaderboardFromIntro'),
    introTop5List: document.getElementById('introTop5List'),

    // In-game Elements
    currentModeBadge: document.getElementById('currentModeBadge'),
    currentQuestionNum: document.getElementById('currentQuestionNum'),
    currentSubject: document.getElementById('currentSubject'),
    comboBadgeWrap: document.getElementById('comboBadgeWrap'),
    comboCountText: document.getElementById('comboCountText'),
    scorePointsBadge: document.getElementById('scorePointsBadge'),
    scorePointsText: document.getElementById('scorePointsText'),
    timerDisplay: document.getElementById('timerDisplay'),
    timerIcon: document.getElementById('timerIcon'),
    timerText: document.getElementById('timerText'),
    quitQuizBtn: document.getElementById('quitQuizBtn'),
    progressBarFill: document.getElementById('progressBarFill'),
    timeAttackBarContainer: document.getElementById('timeAttackBarContainer'),
    timeAttackBarFill: document.getElementById('timeAttackBarFill'),
    scorePopupWrapper: document.getElementById('scorePopupWrapper'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),

    // Feedback Panel
    feedbackPanel: document.getElementById('feedbackPanel'),
    feedbackHeader: document.getElementById('feedbackHeader'),
    feedbackIcon: document.getElementById('feedbackIcon'),
    feedbackTitle: document.getElementById('feedbackTitle'),
    earnedScoreBadge: document.getElementById('earnedScoreBadge'),
    explanationBox: document.getElementById('explanationBox'),
    explanationText: document.getElementById('explanationText'),
    nextQuestionBtn: document.getElementById('nextQuestionBtn'),
    nextBtnText: document.getElementById('nextBtnText'),

    // Result Screen Elements
    confettiCanvas: document.getElementById('confettiCanvas'),
    resultMedalIcon: document.getElementById('resultMedalIcon'),
    resultStatusTitle: document.getElementById('resultStatusTitle'),
    resultSubText: document.getElementById('resultSubText'),
    resultTierBadge: document.getElementById('resultTierBadge'),
    tierIcon: document.getElementById('tierIcon'),
    tierTitle: document.getElementById('tierTitle'),
    resultPointsTotal: document.getElementById('resultPointsTotal'),
    resultScore: document.getElementById('resultScore'),
    resultTotalQuestions: document.getElementById('resultTotalQuestions'),
    resultPercentage: document.getElementById('resultPercentage'),
    resultMaxCombo: document.getElementById('resultMaxCombo'),
    resultElapsedTime: document.getElementById('resultElapsedTime'),
    resultAvgTime: document.getElementById('resultAvgTime'),
    resultModeName: document.getElementById('resultModeName'),
    mockExamReport: document.getElementById('mockExamReport'),
    subjectResultsList: document.getElementById('subjectResultsList'),
    mockFinalVerdict: document.getElementById('mockFinalVerdict'),
    wrongNoteBanner: document.getElementById('wrongNoteBanner'),
    wrongNoteBannerText: document.getElementById('wrongNoteBannerText'),

    // Result Screen Actions & Register
    rankRegisterCard: document.getElementById('rankRegisterCard'),
    nicknameInput: document.getElementById('nicknameInput'),
    submitScoreBtn: document.getElementById('submitScoreBtn'),
    registerFeedback: document.getElementById('registerFeedback'),
    retryCurrentModeBtn: document.getElementById('retryCurrentModeBtn'),
    reviewWrongNotesFromBtn: document.getElementById('reviewWrongNotesFromBtn'),
    backToIntroBtn: document.getElementById('backToIntroBtn'),
    viewLeaderboardBtn: document.getElementById('viewLeaderboardBtn'),

    // Leaderboard Modal
    leaderboardModal: document.getElementById('leaderboardModal'),
    leaderboardTableBody: document.getElementById('leaderboardTableBody'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    closeModalBtn2: document.getElementById('closeModalBtn2'),
    clearLeaderboardBtn: document.getElementById('clearLeaderboardBtn'),

    // Wrong Notes Modal
    wrongNotesModal: document.getElementById('wrongNotesModal'),
    modalWrongCount: document.getElementById('modalWrongCount'),
    wrongNotesListContainer: document.getElementById('wrongNotesListContainer'),
    closeWrongNotesModalBtn: document.getElementById('closeWrongNotesModalBtn'),
    closeWrongNotesModalBtn2: document.getElementById('closeWrongNotesModalBtn2'),
    clearAllWrongNotesBtn: document.getElementById('clearAllWrongNotesBtn'),
    startWrongNotesQuizBtn: document.getElementById('startWrongNotesQuizBtn')
  };

  // 모드 메타데이터
  const MODE_INFO = {
    classic: { name: '클래식 10제', icon: '🎯', badge: '🎯 클래식' },
    mock: { name: '실전 CBT 모의고사', icon: '📋', badge: '📋 모의고사' },
    survival: { name: '서바이벌 데스매치', icon: '⚡', badge: '⚡ 서바이벌' },
    timeattack: { name: '10초 타임어택', icon: '⏱️', badge: '⏱️ 타임어택' },
    subject: { name: '과목별 집중 공략', icon: '📚', badge: '📚 과목집중' },
    wrongnotes: { name: '스마트 오답노트', icon: '📝', badge: '📝 오답노트' }
  };

  // 앱 런타임 상태
  const state = {
    selectedMode: 'classic',          // 'classic' | 'mock' | 'survival' | 'timeattack' | 'subject' | 'wrongnotes'
    selectedSubject: SUBJECTS[0],     // 과목별 모드 시 선택된 과목
    leaderboardFilter: 'all',          // 랭킹 필터

    questions: [],
    currentIndex: 0,
    score: 0,                         // 맞춘 문제 수
    scorePoints: 0,                   // 획득 CBT 포인트(pt)
    currentCombo: 0,                  // 현재 연속 정답 수
    maxCombo: 0,                      // 최대 콤보 기록
    isAnswered: false,

    startTime: 0,
    elapsedSeconds: 0,
    timerIntervalId: null,

    // 문제별 판단 속도 측정을 위한 시작 시각
    questionStartTime: 0,

    // 타임어택 모드용 카운트다운 타이머
    timeAttackRemaining: 10,
    timeAttackIntervalId: null,

    // 모의고사 모드용 과목별 집계 ({ [과목명]: { total: 0, correct: 0 } })
    subjectStats: {},

    // 서바이벌 모드 종료 여부
    isSurvivalDead: false,

    // 이번 라운드에서 오답 발생 개수
    wrongCountInRound: 0,

    hasRegisteredScore: false
  };

  // ==========================================================================
  // 6. 점수 & 콤보 계산 엔진 (Scoring & Combo System)
  // ==========================================================================
  function calculateQuestionScore(elapsedSecForQuestion, currentCombo) {
    const base = QUIZ_CONFIG.BASE_SCORE;

    // 1. 연속 콤보 보너스
    let comboBonus = 0;
    if (currentCombo === 2) comboBonus = 25;
    else if (currentCombo === 3) comboBonus = 50;
    else if (currentCombo === 4) comboBonus = 75;
    else if (currentCombo >= 5) comboBonus = 100;

    // 2. 스피드 판단력 보너스
    let speedBonus = 0;
    let speedLabel = '';
    if (elapsedSecForQuestion <= 3.0) {
      speedBonus = 50;
      speedLabel = '초광속 판단!';
    } else if (elapsedSecForQuestion <= 6.0) {
      speedBonus = 30;
      speedLabel = '신속 정답!';
    } else if (elapsedSecForQuestion <= 10.0) {
      speedBonus = 15;
      speedLabel = '안정적 정답!';
    }

    const totalEarned = base + comboBonus + speedBonus;
    return {
      total: totalEarned,
      base: base,
      comboBonus: comboBonus,
      speedBonus: speedBonus,
      speedLabel: speedLabel
    };
  }

  function triggerScorePopup(text) {
    const popup = document.createElement('div');
    popup.className = 'score-popup-item';
    popup.textContent = text;
    DOM.scorePopupWrapper.appendChild(popup);
    setTimeout(() => {
      if (popup.parentNode) popup.parentNode.removeChild(popup);
    }, 1250);
  }

  // ==========================================================================
  // 7. 랭킹 데이터 관리 (Leaderboard v3)
  // ==========================================================================
  function getLeaderboard() {
    try {
      const data = localStorage.getItem(QUIZ_CONFIG.STORAGE_KEY_LEADERBOARD);
      if (!data) return [];
      const list = JSON.parse(data);
      return Array.isArray(list) ? list : [];
    } catch (e) {
      return [];
    }
  }

  function saveLeaderboard(list) {
    try {
      localStorage.setItem(QUIZ_CONFIG.STORAGE_KEY_LEADERBOARD, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to save leaderboard', e);
    }
  }

  function addLeaderboardEntry(name, points, score, total, elapsedTime, mode) {
    const list = getLeaderboard();
    const today = new Date().toISOString().split('T')[0];
    const modeName = MODE_INFO[mode] ? MODE_INFO[mode].name : mode;

    const newEntry = {
      id: 'rank_' + Date.now(),
      name: name.trim(),
      points: points,
      score: score,
      total: total,
      elapsedTime: elapsedTime,
      mode: mode,
      modeName: modeName,
      date: today
    };

    list.push(newEntry);

    // 정렬 규칙: 1) 포인트 내림차순 -> 2) 맞힌 문제 수 내림차순 -> 3) 소요 시간 오름차순
    list.sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.elapsedTime - b.elapsedTime;
    });

    saveLeaderboard(list);
    return list;
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    const mm = String(m).padStart(2, '0');
    const ss = String(s).padStart(2, '0');
    return `${mm}:${ss}`;
  }

  function formatTimeKorean(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    if (m === 0) {
      return `${s}초`;
    }
    return `${m}분 ${s}초`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================================================
  // 8. UI 렌더링 헬퍼 & 화면 전환
  // ==========================================================================
  function showScreen(screenEl) {
    [DOM.introScreen, DOM.gameScreen, DOM.resultScreen].forEach((el) => {
      el.classList.remove('active');
    });
    screenEl.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateWrongNoteBadges() {
    const count = WrongNotesManager.getCount();
    DOM.wrongNoteBadge.textContent = `${count}문제`;
    DOM.utilWrongCount.textContent = count;
    DOM.modalWrongCount.textContent = count;
  }

  function renderIntroTop5() {
    const list = getLeaderboard().slice(0, 5);
    DOM.introTop5List.innerHTML = '';

    if (list.length === 0) {
      DOM.introTop5List.innerHTML = '<div class="empty-leaderboard">아직 등록된 랭킹 기록이 없습니다. 첫 번째 챌린저가 되어보세요!</div>';
      return;
    }

    list.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = 'top5-row';

      let medal = `${idx + 1}`;
      if (idx === 0) medal = '🥇';
      else if (idx === 1) medal = '🥈';
      else if (idx === 2) medal = '🥉';

      const modeBadge = MODE_INFO[item.mode] ? MODE_INFO[item.mode].badge : (item.modeName || '기본');

      row.innerHTML = `
        <span class="rank-badge">${medal}</span>
        <span class="rank-user">${escapeHtml(item.name)} <small style="color:var(--text-muted); font-size:0.75rem;">(${modeBadge})</small></span>
        <span class="rank-stat"><strong style="color:var(--primary);">${item.points || (item.score * 100)} pt</strong> (${item.score}/${item.total}개, ${formatTime(item.elapsedTime)})</span>
      `;
      DOM.introTop5List.appendChild(row);
    });
  }

  function renderLeaderboardModal(filter = 'all') {
    state.leaderboardFilter = filter;
    let list = getLeaderboard();

    if (filter !== 'all') {
      list = list.filter(item => item.mode === filter);
    }

    // 탭 액티브 표시
    const tabs = DOM.leaderboardModal.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
      if (tab.dataset.filter === filter) tab.classList.add('active');
      else tab.classList.remove('active');
    });

    DOM.leaderboardTableBody.innerHTML = '';

    if (list.length === 0) {
      DOM.leaderboardTableBody.innerHTML = `
        <tr>
          <td colspan="5" style="padding: 24px; color: var(--text-muted);">
            해당 조건의 기록이 아직 없습니다.
          </td>
        </tr>
      `;
      return;
    }

    list.forEach((item, idx) => {
      const tr = document.createElement('tr');
      let rankText = `${idx + 1}위`;
      let rankClass = '';

      if (idx === 0) { rankText = '🥇 1위'; rankClass = 'rank-top1'; }
      else if (idx === 1) { rankText = '🥈 2위'; rankClass = 'rank-top2'; }
      else if (idx === 2) { rankText = '🥉 3위'; rankClass = 'rank-top3'; }

      const modeDisplay = MODE_INFO[item.mode] ? MODE_INFO[item.mode].badge : (item.modeName || '클래식');
      const pointVal = item.points ? `${item.points.toLocaleString()} pt` : `${item.score * 100} pt`;

      tr.innerHTML = `
        <td class="${rankClass}">${rankText}</td>
        <td style="font-weight: 600;">${escapeHtml(item.name)}</td>
        <td><span class="tag" style="font-size: 0.75rem; padding: 2px 6px;">${modeDisplay}</span></td>
        <td><strong style="color: var(--primary);">${pointVal}</strong> <span style="font-size:0.75rem; color:var(--text-muted);">(${item.score}/${item.total})</span></td>
        <td>${formatTime(item.elapsedTime)}</td>
      `;
      DOM.leaderboardTableBody.appendChild(tr);
    });
  }

  function renderWrongNotesModal() {
    const notes = WrongNotesManager.getNotes();
    updateWrongNoteBadges();
    DOM.wrongNotesListContainer.innerHTML = '';

    if (notes.length === 0) {
      DOM.wrongNotesListContainer.innerHTML = `
        <div class="empty-wrong-notes">
          ✨ 저장된 오답이 없습니다!<br>
          퀴즈를 풀면서 틀린 문제가 생기면 자동으로 이곳에 수집됩니다.
        </div>
      `;
      DOM.startWrongNotesQuizBtn.disabled = true;
      return;
    }

    DOM.startWrongNotesQuizBtn.disabled = false;

    notes.forEach((q) => {
      const card = document.createElement('div');
      card.className = 'wrong-note-card';

      const correctOptText = q.options[q.answer_index] || '';

      card.innerHTML = `
        <div class="wrong-note-meta">
          <span class="wrong-note-subject">${escapeHtml(q.subject)}</span>
          <button class="delete-single-note-btn" data-id="${q.id}">삭제 ✕</button>
        </div>
        <div class="wrong-note-q">Q. ${escapeHtml(q.question)}</div>
        <div class="wrong-note-answer">정답: ${q.answer_index + 1}번. ${escapeHtml(correctOptText)}</div>
        <div class="wrong-note-exp">💡 ${escapeHtml(q.explanation)}</div>
      `;

      card.querySelector('.delete-single-note-btn').addEventListener('click', () => {
        WrongNotesManager.removeNote(q.id);
        renderWrongNotesModal();
      });

      DOM.wrongNotesListContainer.appendChild(card);
    });
  }

  // ==========================================================================
  // 9. 퀴즈 생성 및 모드별 출제 로직 (Question Generation)
  // ==========================================================================
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function generateQuizQuestions(mode) {
    if (typeof QUESTION_BANK === 'undefined' || QUESTION_BANK.length === 0) {
      return [];
    }

    // 1. 클래식 10제: 전체 은행에서 무작위 10문제
    if (mode === 'classic') {
      return shuffleArray(QUESTION_BANK).slice(0, QUIZ_CONFIG.QUESTIONS_PER_ROUND);
    }

    // 2. 실전 CBT 모의고사: 5개 과목에서 균등하게 2문제씩 총 10문제 추출
    if (mode === 'mock') {
      const selected = [];
      SUBJECTS.forEach((subj) => {
        const subjQuestions = QUESTION_BANK.filter(q => q.subject === subj);
        const picked = shuffleArray(subjQuestions).slice(0, 2);
        selected.push(...picked);
      });
      // 실제 시험 순서처럼 과목 순서대로 출제하거나 셔플 가능 (과목 순서 배치로 실제감 극대화)
      return selected;
    }

    // 3. 서바이벌 데스매치: 전체 60문제를 무작위 셔플 (틀릴 때까지 계속)
    if (mode === 'survival') {
      return shuffleArray(QUESTION_BANK);
    }

    // 4. 10초 타임어택: 10문제 무작위 추출
    if (mode === 'timeattack') {
      return shuffleArray(QUESTION_BANK).slice(0, QUIZ_CONFIG.QUESTIONS_PER_ROUND);
    }

    // 5. 과목별 집중 공략: 선택한 과목 12문제 중 10문제 추출
    if (mode === 'subject') {
      const targetSubj = state.selectedSubject;
      const subjQuestions = QUESTION_BANK.filter(q => q.subject === targetSubj);
      return shuffleArray(subjQuestions).slice(0, QUIZ_CONFIG.QUESTIONS_PER_ROUND);
    }

    // 6. 스마트 오답노트: 오답노트에 저장된 문제 풀
    if (mode === 'wrongnotes') {
      const notes = WrongNotesManager.getNotes();
      return shuffleArray(notes);
    }

    return shuffleArray(QUESTION_BANK).slice(0, QUIZ_CONFIG.QUESTIONS_PER_ROUND);
  }

  // ==========================================================================
  // 10. 게임 진행 및 정답 판정 (Game Flow Engine)
  // ==========================================================================
  function startQuiz(modeOverride) {
    const mode = modeOverride || state.selectedMode;
    state.selectedMode = mode;

    // 오답노트 모드 검사
    if (mode === 'wrongnotes') {
      const notes = WrongNotesManager.getNotes();
      if (notes.length === 0) {
        alert('저장된 오답노트가 없습니다. 다른 모드를 먼저 플레이하여 오답을 쌓아보세요!');
        return;
      }
    }

    const quizQuestions = generateQuizQuestions(mode);
    if (!quizQuestions || quizQuestions.length === 0) {
      alert('문제 데이터를 구성할 수 없습니다. 문제 은행을 확인해주세요.');
      return;
    }

    // 상태 초기화
    state.questions = quizQuestions;
    state.currentIndex = 0;
    state.score = 0;
    state.scorePoints = 0;
    state.currentCombo = 0;
    state.maxCombo = 0;
    state.isAnswered = false;
    state.hasRegisteredScore = false;
    state.isSurvivalDead = false;
    state.wrongCountInRound = 0;
    state.startTime = Date.now();
    state.elapsedSeconds = 0;

    // 과목별 통계 초기화
    state.subjectStats = {};
    SUBJECTS.forEach(subj => {
      state.subjectStats[subj] = { total: 0, correct: 0 };
    });

    // 전체 타이머 가동
    if (state.timerIntervalId) clearInterval(state.timerIntervalId);
    DOM.timerText.textContent = '00:00';
    state.timerIntervalId = setInterval(() => {
      state.elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
      DOM.timerText.textContent = formatTime(state.elapsedSeconds);
    }, 1000);

    // 모드 인디케이터 배지 설정
    const modeInfo = MODE_INFO[mode] || { badge: mode };
    DOM.currentModeBadge.textContent = modeInfo.badge;

    // 점수 및 콤보 UI 리셋
    DOM.scorePointsText.textContent = '0';
    DOM.comboCountText.textContent = '0';
    DOM.comboBadgeWrap.classList.remove('active');

    // 타임어택 게이지 표시 여부
    if (mode === 'timeattack') {
      DOM.timeAttackBarContainer.style.display = 'block';
    } else {
      DOM.timeAttackBarContainer.style.display = 'none';
    }

    soundCtrl.init();
    renderCurrentQuestion();
    showScreen(DOM.gameScreen);
  }

  function renderCurrentQuestion() {
    state.isAnswered = false;
    const q = state.questions[state.currentIndex];
    const total = state.questions.length;
    const currentNum = state.currentIndex + 1;

    // 문제 표시 시각 기록 (판단 속도 측정용)
    state.questionStartTime = Date.now();

    // 1. 상태 바 & 프로그레스 바
    if (state.selectedMode === 'survival') {
      DOM.currentQuestionNum.textContent = `❤️ 생존 ${currentNum}문제째`;
      DOM.progressBarFill.style.width = '100%';
    } else {
      DOM.currentQuestionNum.textContent = `문제 ${currentNum} / ${total}`;
      const progressPercent = (currentNum / total) * 100;
      DOM.progressBarFill.style.width = `${progressPercent}%`;
    }

    DOM.currentSubject.textContent = q.subject || '정보처리기사';

    // 2. 문제 텍스트
    DOM.questionText.textContent = q.question;

    // 3. 보기 4개 버튼 동적 렌더링
    DOM.optionsContainer.innerHTML = '';
    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.index = idx;
      btn.innerHTML = `
        <span class="option-badge">${idx + 1}</span>
        <span class="option-text">${escapeHtml(optText)}</span>
      `;
      btn.addEventListener('click', () => handleOptionSelect(idx));
      DOM.optionsContainer.appendChild(btn);
    });

    // 4. 피드백 패널 숨김
    DOM.feedbackPanel.classList.remove('visible');

    // 5. 다음 버튼 텍스트 설정
    if (state.selectedMode === 'survival') {
      DOM.nextBtnText.textContent = '다음 생존 문제 ➔';
    } else if (currentNum === total) {
      DOM.nextBtnText.textContent = '🏁 최종 성적표 확인하기';
    } else {
      DOM.nextBtnText.textContent = '다음 문제 ➔';
    }

    // 6. 타임어택 모드 카운트다운 타이머 시작
    startTimeAttackCountdown();
  }

  function startTimeAttackCountdown() {
    if (state.timeAttackIntervalId) {
      clearInterval(state.timeAttackIntervalId);
      state.timeAttackIntervalId = null;
    }

    if (state.selectedMode !== 'timeattack') return;

    state.timeAttackRemaining = QUIZ_CONFIG.TIME_ATTACK_SECONDS;
    DOM.timeAttackBarFill.style.width = '100%';
    DOM.timeAttackBarFill.classList.remove('danger');

    const totalMs = QUIZ_CONFIG.TIME_ATTACK_SECONDS * 1000;
    const startTime = Date.now();

    state.timeAttackIntervalId = setInterval(() => {
      if (state.isAnswered) {
        clearInterval(state.timeAttackIntervalId);
        return;
      }

      const elapsed = Date.now() - startTime;
      const remainingMs = Math.max(0, totalMs - elapsed);
      const remainingSec = remainingMs / 1000;
      const percent = (remainingMs / totalMs) * 100;

      DOM.timeAttackBarFill.style.width = `${percent}%`;

      if (remainingSec <= 3.0) {
        DOM.timeAttackBarFill.classList.add('danger');
        soundCtrl.playTick();
      }

      if (remainingMs <= 0) {
        clearInterval(state.timeAttackIntervalId);
        handleTimeAttackTimeout();
      }
    }, 100);
  }

  function stopTimeAttackCountdown() {
    if (state.timeAttackIntervalId) {
      clearInterval(state.timeAttackIntervalId);
      state.timeAttackIntervalId = null;
    }
  }

  function handleTimeAttackTimeout() {
    if (state.isAnswered) return;
    soundCtrl.playTimeUp();
    handleOptionSelect(-1, true); // -1: 시간 초과
  }

  function handleOptionSelect(selectedIndex, isTimeout = false) {
    if (state.isAnswered) return;
    state.isAnswered = true;
    stopTimeAttackCountdown();

    const q = state.questions[state.currentIndex];
    const isCorrect = !isTimeout && selectedIndex === q.answer_index;
    const optionButtons = DOM.optionsContainer.querySelectorAll('.option-btn');
    const elapsedSecForQuestion = Math.max(0.1, (Date.now() - state.questionStartTime) / 1000);

    // 모든 버튼 비활성화 및 정답 버튼 강조
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answer_index) {
        btn.classList.add('correct');
      }
    });

    // 과목 통계 누적
    if (state.subjectStats[q.subject]) {
      state.subjectStats[q.subject].total++;
      if (isCorrect) state.subjectStats[q.subject].correct++;
    }

    if (isCorrect) {
      // 콤보 증가 및 계산
      state.currentCombo++;
      if (state.currentCombo > state.maxCombo) {
        state.maxCombo = state.currentCombo;
      }

      const scoreDetail = calculateQuestionScore(elapsedSecForQuestion, state.currentCombo);
      state.score++;
      state.scorePoints += scoreDetail.total;

      soundCtrl.playCorrect(state.currentCombo);

      // UI 콤보 & 점수 업데이트
      DOM.scorePointsText.textContent = state.scorePoints.toLocaleString();
      DOM.comboCountText.textContent = state.currentCombo;
      DOM.comboBadgeWrap.classList.add('active');

      // 점수 팝업 트리거
      const popupMsg = `+${scoreDetail.total} pt ${state.currentCombo >= 2 ? `(🔥${state.currentCombo}콤보)` : ''}`;
      triggerScorePopup(popupMsg);

      DOM.feedbackHeader.className = 'feedback-header is-correct';
      DOM.feedbackIcon.textContent = '✅';
      DOM.feedbackTitle.textContent = state.currentCombo >= 2 ? `정답입니다! (${state.currentCombo}연속 콤보 🔥)` : '정답입니다!';
      DOM.earnedScoreBadge.textContent = `+${scoreDetail.total} pt`;
      DOM.earnedScoreBadge.style.display = 'inline-block';

      // 오답노트 모드에서 정답 맞히면 오답노트에서 자동 제거!
      if (state.selectedMode === 'wrongnotes') {
        WrongNotesManager.removeNote(q.id);
        updateWrongNoteBadges();
      }
    } else {
      // 오답 처리
      state.wrongCountInRound++;
      state.currentCombo = 0;
      DOM.comboCountText.textContent = '0';
      DOM.comboBadgeWrap.classList.remove('active');

      if (!isTimeout && selectedIndex >= 0 && optionButtons[selectedIndex]) {
        optionButtons[selectedIndex].classList.add('incorrect');
      }

      // 오답노트에 자동 등록 (오답노트 모드가 아닐 때)
      if (state.selectedMode !== 'wrongnotes') {
        WrongNotesManager.addNote(q);
        updateWrongNoteBadges();
      }

      DOM.feedbackHeader.className = 'feedback-header is-incorrect';
      DOM.feedbackIcon.textContent = isTimeout ? '⏰' : '❌';
      DOM.feedbackTitle.textContent = isTimeout ? '시간 초과! 아쉽습니다.' : '오답입니다!';
      DOM.earnedScoreBadge.style.display = 'none';

      // 서바이벌 모드: 단 1회 오답으로 탈락
      if (state.selectedMode === 'survival') {
        state.isSurvivalDead = true;
        soundCtrl.playGameOver();
        DOM.feedbackTitle.textContent = '💀 오답으로 탈락하셨습니다!';
        DOM.nextBtnText.textContent = '🏁 최종 탈락 기록 확인하기';
      } else {
        soundCtrl.playIncorrect();
      }
    }

    // 상세 해설 렌더링
    DOM.explanationText.textContent = q.explanation || '해설이 준비되어 있지 않습니다.';
    DOM.feedbackPanel.classList.add('visible');

    setTimeout(() => {
      DOM.nextQuestionBtn.focus();
    }, 50);
  }

  function goToNextQuestion() {
    if (!state.isAnswered) return;

    // 서바이벌 모드에서 탈락했으면 바로 결과 화면
    if (state.selectedMode === 'survival' && state.isSurvivalDead) {
      finishQuiz();
      return;
    }

    if (state.currentIndex + 1 < state.questions.length) {
      state.currentIndex++;
      renderCurrentQuestion();
    } else {
      finishQuiz();
    }
  }

  // ==========================================================================
  // 11. 결과 산출 및 성적표/과락 평가 (Result & Tier Evaluation)
  // ==========================================================================
  function calculateTier(scoreRate, points, isMockPassed, mode) {
    if (mode === 'survival') {
      if (state.score >= 15) return { tier: 'tier-s', title: 'S등급 (초인적 생존자 👑)', icon: '👑' };
      if (state.score >= 10) return { tier: 'tier-a', title: 'A등급 (마스터 생존자 🥇)', icon: '🥇' };
      if (state.score >= 6) return { tier: 'tier-b', title: 'B등급 (숙련자 생존자 🥈)', icon: '🥈' };
      if (state.score >= 3) return { tier: 'tier-c', title: 'C등급 (새싹 수험생 ⚠️)', icon: '⚠️' };
      return { tier: 'tier-f', title: 'F등급 (생존 훈련 필요 🚨)', icon: '🚨' };
    }

    if (!isMockPassed && mode === 'mock') {
      return { tier: 'tier-f', title: 'F등급 (과락 또는 점수 미달 🚨)', icon: '🚨' };
    }

    if (scoreRate >= 0.9) return { tier: 'tier-s', title: 'S등급 (수석 합격권 👑)', icon: '👑' };
    if (scoreRate >= 0.8) return { tier: 'tier-a', title: 'A등급 (안정 합격권 🥇)', icon: '🥇' };
    if (scoreRate >= 0.6) return { tier: 'tier-b', title: 'B등급 (가상 합격권 🥈)', icon: '🥈' };
    if (scoreRate >= 0.4) return { tier: 'tier-c', title: 'C등급 (과락 위험 / 재도전 권장 ⚠️)', icon: '⚠️' };
    return { tier: 'tier-f', title: 'F등급 (불합격권 🚨)', icon: '🚨' };
  }

  function finishQuiz() {
    // 타이머 종료
    clearInterval(state.timerIntervalId);
    stopTimeAttackCountdown();
    state.elapsedSeconds = Math.max(1, Math.floor((Date.now() - state.startTime) / 1000));

    const total = state.selectedMode === 'survival' ? Math.max(1, state.currentIndex + 1) : state.questions.length;
    const score = state.score;
    const scoreRate = score / total;
    const percent = Math.round(scoreRate * 100);

    // 모의고사 모드 과락(40% 미만) 검사
    let hasCutoffFailure = false;
    let failedSubjects = [];

    if (state.selectedMode === 'mock') {
      DOM.mockExamReport.style.display = 'block';
      DOM.subjectResultsList.innerHTML = '';

      SUBJECTS.forEach((subj) => {
        const stat = state.subjectStats[subj] || { total: 2, correct: 0 };
        const subjRate = stat.total > 0 ? stat.correct / stat.total : 0;
        const subjPercent = Math.round(subjRate * 100);
        const isCutoff = subjRate < QUIZ_CONFIG.CUTOFF_SCORE_RATE; // 40% 미만

        if (isCutoff) {
          hasCutoffFailure = true;
          failedSubjects.push(subj);
        }

        const item = document.createElement('div');
        item.className = 'subject-result-item';
        item.innerHTML = `
          <div class="subject-row-header">
            <span class="subject-name">${escapeHtml(subj)}</span>
            <span class="subject-score-badge ${isCutoff ? 'badge-fail' : 'badge-pass'}">
              ${stat.correct}/${stat.total} (${subjPercent}점) ${isCutoff ? '⚠️ 과락' : '✅ 통과'}
            </span>
          </div>
          <div class="subject-mini-bar">
            <div class="subject-mini-fill ${isCutoff ? 'fill-fail' : 'fill-pass'}" style="width: ${subjPercent}%;"></div>
          </div>
        `;
        DOM.subjectResultsList.appendChild(item);
      });

      const isOverallPass = percent >= 60;
      if (!hasCutoffFailure && isOverallPass) {
        DOM.mockFinalVerdict.className = 'mock-final-verdict verdict-pass';
        DOM.mockFinalVerdict.innerHTML = '🎉 [합격] 전 과목 과락 없이 평균 60점 이상을 달성하셨습니다!';
      } else if (hasCutoffFailure) {
        DOM.mockFinalVerdict.className = 'mock-final-verdict verdict-fail';
        DOM.mockFinalVerdict.innerHTML = `⚠️ [과락 불합격] <strong>${failedSubjects.join(', ')}</strong> 과목에서 과락(40점 미만)이 발생했습니다.`;
      } else {
        DOM.mockFinalVerdict.className = 'mock-final-verdict verdict-fail';
        DOM.mockFinalVerdict.innerHTML = `🚨 [점수 미달] 과락은 없으나 총점(${percent}점)이 합격 기준인 60점 미만입니다.`;
      }
    } else {
      DOM.mockExamReport.style.display = 'none';
    }

    // 최종 합격 여부 결정
    let isPassed = false;
    if (state.selectedMode === 'mock') {
      isPassed = percent >= 60 && !hasCutoffFailure;
    } else if (state.selectedMode === 'survival') {
      isPassed = score >= 6;
    } else {
      isPassed = percent >= 60;
    }

    // 티어 산출
    const tierInfo = calculateTier(scoreRate, state.scorePoints, isPassed, state.selectedMode);
    DOM.resultTierBadge.className = `result-tier-badge ${tierInfo.tier}`;
    DOM.tierIcon.textContent = tierInfo.icon;
    DOM.tierTitle.textContent = tierInfo.title;

    // 점수 & 메타 렌더링
    DOM.resultPointsTotal.textContent = state.scorePoints.toLocaleString();
    DOM.resultScore.textContent = score;
    DOM.resultTotalQuestions.textContent = total;
    DOM.resultPercentage.textContent = `정답률 ${percent}% (${percent}점)`;
    DOM.resultMaxCombo.textContent = `${state.maxCombo}연속 🔥`;
    DOM.resultElapsedTime.textContent = formatTimeKorean(state.elapsedSeconds);
    const avgSec = (state.elapsedSeconds / total).toFixed(1);
    DOM.resultAvgTime.textContent = `${avgSec}초`;
    DOM.resultModeName.textContent = MODE_INFO[state.selectedMode] ? MODE_INFO[state.selectedMode].name : state.selectedMode;

    // 합격/불합격 축하 연출
    if (isPassed) {
      DOM.resultMedalIcon.textContent = '🏅';
      DOM.resultStatusTitle.textContent = '축하합니다! 합격 기준을 달성했습니다!';
      DOM.resultSubText.textContent = `실전 시험에서도 훌륭한 성과가 기대됩니다! (총 ${score}문제 정답)`;
      soundCtrl.playFanfare();
      if (confetti) confetti.start();
    } else {
      DOM.resultMedalIcon.textContent = state.selectedMode === 'survival' ? '💀' : '📖';
      DOM.resultStatusTitle.textContent = state.selectedMode === 'survival' ? `총 ${score}문제 생존 후 탈락!` : '아쉽습니다! 조금만 더 도전해보세요!';
      DOM.resultSubText.textContent = hasCutoffFailure ? '취약 과목의 과락을 보완하면 충분히 합격할 수 있습니다!' : '오답노트 복습 후 재도전해보세요!';
      if (confetti) confetti.stop();
    }

    // 오답노트 알림 및 복습 버튼 제어
    const currentWrongNotesCount = WrongNotesManager.getCount();
    updateWrongNoteBadges();
    if (state.wrongCountInRound > 0) {
      DOM.wrongNoteBanner.style.display = 'flex';
      DOM.wrongNoteBannerText.textContent = `이번 라운드 틀린 ${state.wrongCountInRound}문제가 오답노트에 자동 저장되었습니다.`;
      DOM.reviewWrongNotesFromBtn.style.display = 'inline-flex';
    } else if (currentWrongNotesCount > 0) {
      DOM.wrongNoteBanner.style.display = 'flex';
      DOM.wrongNoteBannerText.textContent = `현재 오답노트에 ${currentWrongNotesCount}문제가 보관되어 있습니다.`;
      DOM.reviewWrongNotesFromBtn.style.display = 'inline-flex';
    } else {
      DOM.wrongNoteBanner.style.display = 'none';
      DOM.reviewWrongNotesFromBtn.style.display = 'none';
    }

    // 닉네임 입력 폼 리셋
    DOM.nicknameInput.value = '';
    DOM.nicknameInput.disabled = false;
    DOM.submitScoreBtn.disabled = false;
    DOM.registerFeedback.textContent = '';
    DOM.registerFeedback.className = 'register-msg';

    showScreen(DOM.resultScreen);
  }

  function registerScore() {
    if (state.hasRegisteredScore) return;

    const nickname = DOM.nicknameInput.value.trim();
    if (!nickname) {
      DOM.registerFeedback.textContent = '닉네임을 입력해주세요.';
      DOM.registerFeedback.className = 'register-msg error';
      DOM.nicknameInput.focus();
      return;
    }

    if (nickname.length < 2 || nickname.length > 10) {
      DOM.registerFeedback.textContent = '닉네임은 2자 이상 10자 이하여야 합니다.';
      DOM.registerFeedback.className = 'register-msg error';
      DOM.nicknameInput.focus();
      return;
    }

    const total = state.selectedMode === 'survival' ? Math.max(1, state.currentIndex + 1) : state.questions.length;
    addLeaderboardEntry(nickname, state.scorePoints, state.score, total, state.elapsedSeconds, state.selectedMode);
    state.hasRegisteredScore = true;

    DOM.nicknameInput.disabled = true;
    DOM.submitScoreBtn.disabled = true;
    DOM.registerFeedback.textContent = `🎉 [${nickname}] 님의 점수(${state.scorePoints.toLocaleString()} pt)가 순위표에 성공적으로 등록되었습니다!`;
    DOM.registerFeedback.className = 'register-msg success';

    renderIntroTop5();
  }

  // ==========================================================================
  // 12. 테마 & 사운드 토글
  // ==========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem(QUIZ_CONFIG.STORAGE_KEY_THEME);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    applyTheme(isDark);
  }

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      DOM.themeIcon.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      DOM.themeIcon.textContent = '🌙';
    }
  }

  function toggleTheme() {
    const isDarkNow = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextDark = !isDarkNow;
    applyTheme(nextDark);
    localStorage.setItem(QUIZ_CONFIG.STORAGE_KEY_THEME, nextDark ? 'dark' : 'light');
  }

  function initSoundButton() {
    DOM.soundIcon.textContent = soundCtrl.enabled ? '🔊' : '🔇';
  }

  function toggleSound() {
    const isEnabled = soundCtrl.toggle();
    DOM.soundIcon.textContent = isEnabled ? '🔊' : '🔇';
  }

  // ==========================================================================
  // 13. 모드 선택 UI 바인딩
  // ==========================================================================
  function selectMode(mode) {
    state.selectedMode = mode;
    const cards = DOM.modeGrid.querySelectorAll('.mode-card');
    cards.forEach(card => {
      if (card.dataset.mode === mode) card.classList.add('active');
      else card.classList.remove('active');
    });

    // 과목 선택 영역 노출 제어
    if (mode === 'subject') {
      DOM.subjectSelectArea.style.display = 'block';
    } else {
      DOM.subjectSelectArea.style.display = 'none';
    }

    // 시작 버튼 텍스트 변경
    const modeInfo = MODE_INFO[mode] || { name: mode };
    DOM.startBtnLabel.textContent = `🚀 ${modeInfo.name} 시작하기`;
  }

  function selectSubject(subj) {
    state.selectedSubject = subj;
    const chips = DOM.subjectChips.querySelectorAll('.chip-btn');
    chips.forEach(chip => {
      if (chip.dataset.subject === subj) chip.classList.add('active');
      else chip.classList.remove('active');
    });
  }

  // ==========================================================================
  // 14. 모달 관리 (순위표 & 오답노트)
  // ==========================================================================
  function openLeaderboard(filter = 'all') {
    renderLeaderboardModal(filter);
    DOM.leaderboardModal.classList.add('active');
  }

  function closeLeaderboard() {
    DOM.leaderboardModal.classList.remove('active');
  }

  function clearLeaderboard() {
    if (confirm('모든 랭킹 기록을 초기화하시겠습니까?')) {
      localStorage.removeItem(QUIZ_CONFIG.STORAGE_KEY_LEADERBOARD);
      renderLeaderboardModal(state.leaderboardFilter);
      renderIntroTop5();
    }
  }

  function openWrongNotesModal() {
    renderWrongNotesModal();
    DOM.wrongNotesModal.classList.add('active');
  }

  function closeWrongNotesModal() {
    DOM.wrongNotesModal.classList.remove('active');
  }

  function clearAllWrongNotes() {
    if (confirm('오답노트에 저장된 모든 문제를 비우시겠습니까?')) {
      WrongNotesManager.clearAll();
      renderWrongNotesModal();
      updateWrongNoteBadges();
    }
  }

  // ==========================================================================
  // 15. 이벤트 바인딩 (Event Listeners)
  // ==========================================================================
  function bindEvents() {
    // 헤더 컨트롤
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    DOM.soundToggleBtn.addEventListener('click', toggleSound);

    // 모드 카드 클릭 이벤트
    const modeCards = DOM.modeGrid.querySelectorAll('.mode-card');
    modeCards.forEach(card => {
      card.addEventListener('click', () => {
        selectMode(card.dataset.mode);
      });
    });

    // 과목 선택 칩 클릭 이벤트
    const subjChips = DOM.subjectChips.querySelectorAll('.chip-btn');
    subjChips.forEach(chip => {
      chip.addEventListener('click', () => {
        selectSubject(chip.dataset.subject);
      });
    });

    // 인트로 메인 버튼
    DOM.startQuizBtn.addEventListener('click', () => startQuiz());
    DOM.openLeaderboardFromIntro.addEventListener('click', () => openLeaderboard('all'));
    DOM.openWrongNotesBtn.addEventListener('click', openWrongNotesModal);

    // 인게임 버튼
    DOM.nextQuestionBtn.addEventListener('click', goToNextQuestion);
    DOM.quitQuizBtn.addEventListener('click', () => {
      if (confirm('현재 진행 중인 퀴즈를 포기하고 메인으로 돌아가시겠습니까?')) {
        clearInterval(state.timerIntervalId);
        stopTimeAttackCountdown();
        showScreen(DOM.introScreen);
      }
    });

    // 결과 화면 버튼들
    DOM.submitScoreBtn.addEventListener('click', registerScore);
    DOM.nicknameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') registerScore();
    });
    DOM.retryCurrentModeBtn.addEventListener('click', () => {
      if (confetti) confetti.stop();
      startQuiz(state.selectedMode);
    });
    DOM.reviewWrongNotesFromBtn.addEventListener('click', () => {
      if (confetti) confetti.stop();
      startQuiz('wrongnotes');
    });
    DOM.backToIntroBtn.addEventListener('click', () => {
      if (confetti) confetti.stop();
      updateWrongNoteBadges();
      renderIntroTop5();
      showScreen(DOM.introScreen);
    });
    DOM.viewLeaderboardBtn.addEventListener('click', () => openLeaderboard('all'));

    // 랭킹 모달 이벤트
    DOM.closeModalBtn.addEventListener('click', closeLeaderboard);
    DOM.closeModalBtn2.addEventListener('click', closeLeaderboard);
    DOM.clearLeaderboardBtn.addEventListener('click', clearLeaderboard);
    DOM.leaderboardModal.addEventListener('click', (e) => {
      if (e.target === DOM.leaderboardModal) closeLeaderboard();
    });

    // 랭킹 필터 탭 클릭 이벤트
    const filterTabs = DOM.leaderboardModal.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        renderLeaderboardModal(tab.dataset.filter);
      });
    });

    // 오답노트 모달 이벤트
    DOM.closeWrongNotesModalBtn.addEventListener('click', closeWrongNotesModal);
    DOM.closeWrongNotesModalBtn2.addEventListener('click', closeWrongNotesModal);
    DOM.clearAllWrongNotesBtn.addEventListener('click', clearAllWrongNotes);
    DOM.startWrongNotesQuizBtn.addEventListener('click', () => {
      closeWrongNotesModal();
      startQuiz('wrongnotes');
    });
    DOM.wrongNotesModal.addEventListener('click', (e) => {
      if (e.target === DOM.wrongNotesModal) closeWrongNotesModal();
    });

    // 키보드 단축키 지원 (1, 2, 3, 4 키로 보기 선택, Enter/Space로 다음 문제)
    window.addEventListener('keydown', (e) => {
      // 모달 닫기 (ESC)
      if (e.key === 'Escape') {
        if (DOM.leaderboardModal.classList.contains('active')) closeLeaderboard();
        if (DOM.wrongNotesModal.classList.contains('active')) closeWrongNotesModal();
        return;
      }

      // 게임 화면 활성화 상태일 때만
      if (!DOM.gameScreen.classList.contains('active')) return;

      if (!state.isAnswered) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const index = parseInt(e.key, 10) - 1;
          handleOptionSelect(index);
        }
      } else {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          goToNextQuestion();
        }
      }
    });
  }

  // ==========================================================================
  // 16. 초기화 (App Init)
  // ==========================================================================
  function init() {
    initTheme();
    initSoundButton();
    updateWrongNoteBadges();
    renderIntroTop5();
    bindEvents();

    if (DOM.confettiCanvas) {
      confetti = new ConfettiEffect(DOM.confettiCanvas);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
