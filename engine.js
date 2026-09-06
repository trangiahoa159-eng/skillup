/* =========================================================
   SkillUp — Shared engine
   This file is IDENTICAL across every skill page. It reads
   `window.SKILL_DATA` (defined by that page's own
   data/<skill>.data.js, loaded BEFORE this file) and builds
   the whole page + quiz from it.

   Do not edit this per-skill. If you need to change how the
   site behaves everywhere, edit it here once.
   ========================================================= */

(function () {
    const DATA = window.SKILL_DATA;
    if (!DATA) {
        document.body.innerHTML =
            '<p style="color:#f87171;padding:2rem;font-family:sans-serif;">' +
            'SKILL_DATA not found. Make sure your data/&lt;skill&gt;.data.js ' +
            'script tag is included BEFORE shared/engine.js.</p>';
        return;
    }

    const QUESTIONS_PER_QUIZ = Math.min(
        DATA.questionsPerQuiz || 10,
        DATA.quizBank.length
    );

    /* ---------- build page skeleton into #app ---------- */
    function renderSkeleton() {
        document.title = `SkillUp - ${DATA.title}`;

        const pillarsHtml = DATA.pillars.map((p, i) => `
            <div class="pillar-card" style="animation: fadeInUp 0.5s var(--ease-smooth) ${i * 0.08}s backwards;">
                <h3>${p.title}</h3>
                <p>${p.text}</p>
            </div>
        `).join('');

        const actionsHtml = DATA.actions.map(a => `
            <div class="action-item">
                <div class="action-icon">${a.icon}</div>
                <div class="action-content">
                    <h4>${a.title}</h4>
                    <p>${a.text}</p>
                </div>
            </div>
        `).join('');

        document.getElementById('app').innerHTML = `
            <div class="ambient-glow glow-1"></div>
            <div class="ambient-glow glow-2"></div>
            <div class="ambient-glow glow-3"></div>

            <div class="container">
                <a href="${DATA.backLink.href}" class="back-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    ${DATA.backLink.text}
                </a>

                <div class="header">
                    <span class="header-badge">${DATA.badge}</span>
                    <div>
                        <h1 id="skill-title" class="brand-title" title="Click to reset view">${DATA.title}</h1>
                    </div>
                    <p id="skill-subtitle">${DATA.subtitle}</p>
                </div>

                <div class="tab-navigation" id="tab-nav">
                    <button class="tab-btn" data-tab="knowledge-tab">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                        <div class="tab-btn-text">
                            <span class="tab-title">Essential Knowledge</span>
                            <span class="tab-desc">Explore theories, pillars &amp; practical frameworks</span>
                        </div>
                    </button>
                    <button class="tab-btn" data-tab="quiz-tab">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <div class="tab-btn-text">
                            <span class="tab-title">Quiz Assessment</span>
                            <span class="tab-desc">Test your understanding with ${QUESTIONS_PER_QUIZ} random questions</span>
                        </div>
                    </button>
                </div>

                <div id="knowledge-tab" class="tab-content">
                    <div class="glass-panel">
                        <div class="section-title">
                            <span>💡</span> The Essence of ${DATA.title}
                        </div>
                        <div id="knowledge-def" class="knowledge-def">${DATA.definition}</div>

                        <div class="section-title" style="margin-top: 2.2rem;">
                            <span>🏛️</span> Core Pillars
                        </div>
                        <div id="pillars-grid" class="pillars-grid">${pillarsHtml}</div>

                        <div class="practical-section">
                            <div class="section-title">
                                <span>🚀</span> Practical Action Framework
                            </div>
                            <div class="action-list">${actionsHtml}</div>

                            <div class="pro-tip">
                                <span class="pro-tip-icon">💡</span>
                                <div><strong>Pro-Tip:</strong> ${DATA.proTip}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="quiz-tab" class="tab-content">
                    <div class="glass-panel">
                        <div class="quiz-header">
                            <span>Question <span id="current-question">1</span>/<span id="total-questions">${QUESTIONS_PER_QUIZ}</span></span>
                            <span class="score-badge">Score: <span id="score">0</span></span>
                        </div>

                        <div class="progress-container">
                            <div class="progress-bar" id="progress-bar"></div>
                        </div>

                        <div id="quiz-container">
                            <div class="question-text" id="question-text">Loading question...</div>
                            <div class="options-list" id="options-list"></div>
                            <div class="explanation-box" id="explanation-box"></div>
                            <button class="action-btn" id="next-btn">Continue</button>
                        </div>

                        <div class="result-screen" id="result-screen">
                            <h2 class="result-title">Assessment Complete!</h2>
                            <div class="result-score" id="final-score">0/${QUESTIONS_PER_QUIZ}</div>
                            <div class="star-rating" id="star-rating">⭐⭐⭐</div>
                            <p class="feedback-text" id="feedback-text">Great job on completing the assessment!</p>
                            <button class="restart-btn" id="restart-btn">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="site-footer">
                <div class="footer-inner">
                    <div class="footer-left" id="footer-home">
                        <div class="footer-badge-icon">S</div>
                        <span class="copyright-text">&copy; 2026 SkillUp. All rights reserved.</span>
                    </div>
                    <div class="footer-links">
                        <a href="#" class="footer-link">Privacy Policy</a>
                        <a href="#" class="footer-link">Terms of Service</a>
                        <a href="#" class="footer-link">Support</a>
                    </div>
                </div>
            </footer>
        `;
    }

    /* ---------- tab switching ---------- */
    function switchTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

        const nav = document.getElementById('tab-nav');
        nav.classList.add('shrunk');

        const activeContent = document.getElementById(tabId);
        if (activeContent) activeContent.classList.add('active');

        const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        if (tabId === 'quiz-tab' && quizState.questions.length === 0) {
            startQuiz();
        }
    }

    function resetToHome() {
        const nav = document.getElementById('tab-nav');
        nav.classList.remove('shrunk');
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    }

    /* ---------- quiz state/logic ---------- */
    let quizState = {
        questions: [],
        currentIndex: 0,
        score: 0,
        answered: false
    };

    function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function startQuiz() {
        const picked = shuffleArray(DATA.quizBank).slice(0, QUESTIONS_PER_QUIZ);

        quizState.questions = picked.map(q => {
            const optionsWithFlag = q.options.map((opt, i) => ({
                text: opt.text,
                explanation: opt.explanation,
                isCorrect: i === q.correctIndex
            }));
            return {
                question: q.question,
                options: shuffleArray(optionsWithFlag)
            };
        });

        quizState.currentIndex = 0;
        quizState.score = 0;

        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('result-screen').style.display = 'none';
        document.getElementById('total-questions').textContent = QUESTIONS_PER_QUIZ;
        document.getElementById('score').textContent = 0;

        renderQuestion();
    }

    function renderQuestion() {
        const total = quizState.questions.length;
        const idx = quizState.currentIndex;
        const q = quizState.questions[idx];

        const quizContainer = document.getElementById('quiz-container');
        quizContainer.style.opacity = 0;
        quizContainer.style.transform = 'translateY(10px)';

        setTimeout(() => {
            document.getElementById('current-question').textContent = idx + 1;
            document.getElementById('progress-bar').style.width = `${(idx / total) * 100}%`;
            document.getElementById('question-text').textContent = q.question;

            const list = document.getElementById('options-list');
            list.innerHTML = '';
            q.options.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.style.animation = `fadeInUp 0.4s var(--ease-smooth) ${i * 0.06}s backwards`;
                btn.textContent = opt.text;
                btn.onclick = () => selectOption(i);
                list.appendChild(btn);
            });

            const explBox = document.getElementById('explanation-box');
            explBox.className = 'explanation-box';
            explBox.style.display = 'none';
            explBox.innerHTML = '';

            document.getElementById('next-btn').style.display = 'none';
            quizState.answered = false;

            requestAnimationFrame(() => {
                quizContainer.style.opacity = 1;
                quizContainer.style.transform = 'translateY(0)';
            });
        }, 180);
    }

    function selectOption(selectedIdx) {
        if (quizState.answered) return;
        quizState.answered = true;

        const q = quizState.questions[quizState.currentIndex];
        const selectedOpt = q.options[selectedIdx];
        const correctIdx = q.options.findIndex(o => o.isCorrect);
        const isCorrect = selectedOpt.isCorrect;

        const buttons = document.querySelectorAll('#options-list .option-btn');
        buttons.forEach((btn, i) => {
            btn.disabled = true;
            if (i === correctIdx) btn.classList.add('correct');
            else if (i === selectedIdx) btn.classList.add('incorrect');
        });

        if (isCorrect) {
            quizState.score++;
            const scoreEl = document.getElementById('score');
            scoreEl.textContent = quizState.score;
            scoreEl.style.animation = 'none';
            void scoreEl.offsetWidth;
            scoreEl.style.animation = 'scorePop 0.4s var(--ease-bounce)';
        }

        const explBox = document.getElementById('explanation-box');
        explBox.classList.add(isCorrect ? 'show-correct' : 'show-incorrect');
        explBox.style.display = 'block';
        explBox.innerHTML = `<strong>${isCorrect ? '✅ Correct!' : '❌ Not quite.'}</strong><br>${selectedOpt.explanation}`;

        const nextBtn = document.getElementById('next-btn');
        const isLast = quizState.currentIndex === quizState.questions.length - 1;
        nextBtn.textContent = isLast ? 'View Results' : 'Continue';
        nextBtn.style.display = 'inline-block';
        nextBtn.style.animation = 'fadeInUp 0.4s var(--ease-smooth)';
    }

    function nextQuestion() {
        quizState.currentIndex++;
        if (quizState.currentIndex >= quizState.questions.length) {
            showResults();
        } else {
            renderQuestion();
        }
    }

    function showResults() {
        document.getElementById('progress-bar').style.width = '100%';

        const quizContainer = document.getElementById('quiz-container');
        quizContainer.style.opacity = 0;

        setTimeout(() => {
            quizContainer.style.display = 'none';

            const resultScreen = document.getElementById('result-screen');
            resultScreen.style.display = 'block';
            resultScreen.style.opacity = 0;
            resultScreen.style.transform = 'scale(0.96)';

            const total = quizState.questions.length;
            const score = quizState.score;
            const pct = score / total;

            document.getElementById('final-score').textContent = `${score}/${total}`;

            let stars, feedback;
            if (pct === 1) {
                stars = '⭐⭐⭐⭐⭐';
                feedback = "Outstanding! You have a strong, honest understanding of this skill.";
            } else if (pct >= 0.8) {
                stars = '⭐⭐⭐⭐';
                feedback = "Great job! You clearly grasp most of the key ideas — just a few spots to revisit.";
            } else if (pct >= 0.6) {
                stars = '⭐⭐⭐';
                feedback = "Solid effort! Review the Essential Knowledge tab to sharpen a few concepts.";
            } else if (pct >= 0.4) {
                stars = '⭐⭐';
                feedback = "You're getting there — go back through the theory before trying again.";
            } else {
                stars = '⭐';
                feedback = "Don't worry — mastering this is a process. Revisit the knowledge tab and try again.";
            }

            document.getElementById('star-rating').textContent = stars;
            document.getElementById('feedback-text').textContent = feedback;

            requestAnimationFrame(() => {
                resultScreen.style.opacity = 1;
                resultScreen.style.transform = 'scale(1)';
            });
        }, 400);
    }

    function resetQuiz() {
        const resultScreen = document.getElementById('result-screen');
        resultScreen.style.opacity = 0;
        setTimeout(() => {
            quizState.questions = [];
            startQuiz();
        }, 300);
    }

    /* ---------- wire up events (event delegation, no inline onclick) ---------- */
    function bindEvents() {
        document.getElementById('skill-title').addEventListener('click', resetToHome);
        document.getElementById('footer-home').addEventListener('click', resetToHome);
        document.getElementById('restart-btn').addEventListener('click', resetQuiz);
        document.getElementById('next-btn').addEventListener('click', nextQuestion);

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => switchTab(btn.dataset.tab));
        });
    }

    /* ---------- init ---------- */
    document.addEventListener('DOMContentLoaded', () => {
        renderSkeleton();
        bindEvents();
    });
})();
