/* ==========================================================================
   tools.js — محرّكات الأقسام التفاعلية الأربعة:
   1) الاختبارات الذاتية  2) تحدّي 21 يوم  3) مكتبة لغة الجسد
   4) زاوية سؤال وجواب مجهولة + نموذج استشارة سرّي
   كل المخرجات تُعاد قراءتها من I18N/البيانات عند كل langchange.
   ========================================================================== */

/* ============================== أدوات مشتركة ============================== */
const TOOLS = {
  get lang() { return typeof currentLang !== "undefined" ? currentLang : "ar"; }
};

function toolText(obj) {
  return obj && obj[TOOLS.lang] !== undefined ? obj[TOOLS.lang] : (obj && obj.ar) || "";
}

function storeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (e) { return fallback; }
}
function storeSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
}

/* ============================ 1) الاختبارات ============================ */
const QUIZ_STATE = { active: null, index: 0, answers: [] };

function renderQuizzesPage() {
  const root = document.getElementById("quizzesRoot");
  if (!root) return;
  setTheme("psychology");

  if (QUIZ_STATE.active) { renderQuizRunner(root); return; }

  root.innerHTML = `
    <div class="tools-grid">
      ${QUIZZES.map((qz, i) => `
        <button type="button" class="tool-card quiz-card" data-quiz="${qz.id}" data-reveal style="--reveal-i:${i % 3}">
          <span class="tool-card-icon badge-${qz.color}">${qz.icon}</span>
          <span class="tool-card-body">
            <span class="tool-card-title">${toolText(qz.title)}</span>
            <span class="tool-card-desc">${toolText(qz.desc)}</span>
            <span class="tool-card-meta">
              <span>${qz.questions.length} ${t("quiz.questions")}</span>
              <span class="dot">•</span>
              <span>${t("quiz.time")}</span>
            </span>
            <span class="tool-card-cta">${t("quiz.start")}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path class="arrow-ltr" d="M5 12h14M13 6l6 6-6 6"/><path class="arrow-rtl" d="M19 12H5M11 18l-6-6 6-6"/>
              </svg>
            </span>
          </span>
        </button>`).join("")}
    </div>`;

  root.querySelectorAll("[data-quiz]").forEach((btn) => {
    btn.addEventListener("click", () => {
      QUIZ_STATE.active = btn.dataset.quiz;
      QUIZ_STATE.index = 0;
      QUIZ_STATE.answers = [];
      renderQuizzesPage();
    });
  });
  observeReveals();
}

function renderQuizRunner(root) {
  const qz = QUIZZES.find((q) => q.id === QUIZ_STATE.active);
  if (!qz) { QUIZ_STATE.active = null; return renderQuizzesPage(); }
  setTheme(qz.category);

  const total = qz.questions.length;
  const idx = QUIZ_STATE.index;

  if (idx >= total) { renderQuizResult(root, qz); return; }

  const q = qz.questions[idx];
  const chosen = QUIZ_STATE.answers[idx];
  const pct = Math.round((idx / total) * 100);

  root.innerHTML = `
    <div class="quiz-runner" data-reveal>
      <div class="quiz-runner-top">
        <button type="button" class="btn-quiet" data-quiz-exit>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path class="arrow-ltr" d="M19 12H5M11 18l-6-6 6-6"/><path class="arrow-rtl" d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
          <span>${t("quiz.exit")}</span>
        </button>
        <span class="quiz-counter" dir="ltr">${idx + 1} / ${total}</span>
      </div>

      <div class="quiz-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}">
        <span style="width:${pct}%"></span>
      </div>

      <div class="quiz-head">
        <span class="tool-card-icon badge-${qz.color}">${qz.icon}</span>
        <h2>${toolText(qz.title)}</h2>
      </div>

      <p class="quiz-question">${toolText(q.q)}</p>

      <div class="quiz-options">
        ${q.options.map((op, oi) => `
          <button type="button" class="quiz-option ${chosen === oi ? "is-selected" : ""}" data-option="${oi}" data-score="${op.score}">
            <span class="opt-marker">${String.fromCharCode(65 + oi)}</span>
            <span class="opt-text">${toolText(op.text)}</span>
          </button>`).join("")}
      </div>

      <div class="quiz-nav">
        <button type="button" class="btn btn-ghost" data-quiz-prev ${idx === 0 ? "disabled" : ""}>${t("quiz.prev")}</button>
        <button type="button" class="btn btn-primary" data-quiz-next ${chosen === undefined ? "disabled" : ""}>
          ${idx === total - 1 ? t("quiz.finish") : t("quiz.next")}
        </button>
      </div>
    </div>`;

  root.querySelector("[data-quiz-exit]").addEventListener("click", () => {
    QUIZ_STATE.active = null; renderQuizzesPage();
  });
  root.querySelectorAll("[data-option]").forEach((opt) => {
    opt.addEventListener("click", () => {
      QUIZ_STATE.answers[idx] = parseInt(opt.dataset.option, 10);
      root.querySelectorAll(".quiz-option").forEach((o) => o.classList.remove("is-selected"));
      opt.classList.add("is-selected");
      const next = root.querySelector("[data-quiz-next]");
      if (next) next.disabled = false;
    });
  });
  const prev = root.querySelector("[data-quiz-prev]");
  if (prev) prev.addEventListener("click", () => { QUIZ_STATE.index = Math.max(0, idx - 1); renderQuizRunner(root); });
  const next = root.querySelector("[data-quiz-next]");
  if (next) next.addEventListener("click", () => { QUIZ_STATE.index = idx + 1; renderQuizRunner(root); });
  observeReveals();
}

function renderQuizResult(root, qz) {
  const max = qz.questions.length * 3;
  const total = QUIZ_STATE.answers.reduce((sum, oi, qi) => {
    const q = qz.questions[qi];
    return sum + (q && oi !== undefined ? q.options[oi].score : 0);
  }, 0);
  const pctVal = Math.round((total / max) * 100);

  let band = qz.results[0];
  for (const r of qz.results) { if (total >= r.min && total <= r.max) { band = r; break; } }

  const dash = 2 * Math.PI * 52;
  const offset = dash - (dash * pctVal) / 100;

  root.innerHTML = `
    <div class="quiz-result" data-reveal>
      <button type="button" class="btn-quiet" data-quiz-exit>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path class="arrow-ltr" d="M19 12H5M11 18l-6-6 6-6"/><path class="arrow-rtl" d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
        <span>${t("quiz.exit")}</span>
      </button>

      <div class="quiz-dial badge-${qz.color}">
        <svg viewBox="0 0 120 120" class="dial-svg" aria-hidden="true">
          <circle class="dial-track" cx="60" cy="60" r="52"/>
          <circle class="dial-fill" cx="60" cy="60" r="52"
            stroke-dasharray="${dash.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}"/>
        </svg>
        <div class="dial-center">
          <strong dir="ltr">${pctVal}%</strong>
          <span dir="ltr">${total} / ${max}</span>
        </div>
      </div>

      <h2 class="quiz-result-title">${toolText(band.title)}</h2>
      <p class="quiz-result-text">${toolText(band.text)}</p>

      <div class="quiz-result-tip">
        <span class="tip-label">${t("quiz.tip")}</span>
        <p>${toolText(band.tip)}</p>
      </div>

      <div class="quiz-nav">
        <button type="button" class="btn btn-ghost" data-quiz-retake>${t("quiz.retake")}</button>
        <button type="button" class="btn btn-primary" data-quiz-all>${t("quiz.others")}</button>
      </div>

      <p class="quiz-disclaimer">${t("quiz.disclaimer")}</p>
    </div>`;

  root.querySelector("[data-quiz-exit]").addEventListener("click", () => { QUIZ_STATE.active = null; renderQuizzesPage(); });
  root.querySelector("[data-quiz-retake]").addEventListener("click", () => {
    QUIZ_STATE.index = 0; QUIZ_STATE.answers = []; renderQuizRunner(root);
  });
  root.querySelector("[data-quiz-all]").addEventListener("click", () => { QUIZ_STATE.active = null; renderQuizzesPage(); });
  observeReveals();
}

/* ========================= 2) تحدّي 21 يوماً ========================= */
const CHALLENGE_KEY = "mindful_challenge_done";

function renderChallengePage() {
  const root = document.getElementById("challengeRoot");
  if (!root) return;
  setTheme("selfdev");

  const done = new Set(storeGet(CHALLENGE_KEY, []));

  root.innerHTML = `
    <div class="challenge-panel" data-reveal>
      <div class="challenge-progress-head">
        <div>
          <span class="challenge-progress-label">${t("challenge.progress")}</span>
          <strong class="challenge-progress-num" dir="ltr"><span id="chDoneCount">${done.size}</span> / 21</strong>
        </div>
        <button type="button" class="btn-quiet" id="challengeReset">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>
          </svg>
          <span>${t("challenge.reset")}</span>
        </button>
      </div>
      <div class="challenge-bar"><span id="chBar" style="width:${(done.size / 21) * 100}%"></span></div>
    </div>

    ${CHALLENGE_WEEKS.map((wk) => `
      <section class="challenge-week" data-reveal>
        <div class="week-head badge-${wk.color}">
          <span class="week-num">${t("challenge.week")} ${wk.id}</span>
          <div>
            <h2>${toolText(wk.theme)}</h2>
            <p>${toolText(wk.desc)}</p>
          </div>
        </div>
        <div class="days-grid">
          ${CHALLENGE_DAYS.filter((d) => d.week === wk.id).map((d) => `
            <div class="day-card badge-${wk.color}-soft ${done.has(d.day) ? "is-done" : ""}" data-day="${d.day}">
              <label class="day-check">
                <input type="checkbox" ${done.has(d.day) ? "checked" : ""} data-day-toggle="${d.day}" />
                <span class="check-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>
                </span>
                <span class="day-num">${t("challenge.day")} ${d.day}</span>
              </label>
              <span class="day-icon" aria-hidden="true">${d.icon}</span>
              <h3 class="day-title">${toolText(d.title)}</h3>
              <p class="day-task">${toolText(d.task)}</p>
              <p class="day-tip"><span>${t("challenge.tipLabel")}</span> ${toolText(d.tip)}</p>
            </div>`).join("")}
        </div>
      </section>`).join("")}`;

  root.querySelectorAll("[data-day-toggle]").forEach((cb) => {
    cb.addEventListener("change", () => {
      const day = parseInt(cb.dataset.dayToggle, 10);
      const set = new Set(storeGet(CHALLENGE_KEY, []));
      if (cb.checked) set.add(day); else set.delete(day);
      storeSet(CHALLENGE_KEY, [...set]);
      const card = cb.closest(".day-card");
      if (card) card.classList.toggle("is-done", cb.checked);
      const cnt = document.getElementById("chDoneCount");
      const bar = document.getElementById("chBar");
      if (cnt) cnt.textContent = set.size;
      if (bar) bar.style.width = `${(set.size / 21) * 100}%`;
    });
  });

  const resetBtn = root.querySelector("#challengeReset");
  if (resetBtn) resetBtn.addEventListener("click", () => {
    storeSet(CHALLENGE_KEY, []);
    renderChallengePage();
  });

  observeReveals();
}

/* ========================= 3) مكتبة لغة الجسد ========================= */
function renderBodyLangPage() {
  const root = document.getElementById("bodyLangRoot");
  if (!root) return;
  setTheme("bodylanguage");

  root.innerHTML = `
    <div class="bl-grid">
      ${BODY_LANGUAGE.map((b, i) => `
        <article class="bl-card" data-reveal style="--reveal-i:${i % 3}">
          <div class="bl-media badge-${b.color}">
            <img src="${b.image}" alt="${escapeHtml(toolText(b.title))}" loading="lazy" decoding="async" width="1200" height="800" />
            <span class="bl-tag">${toolText(b.tag)}</span>
          </div>
          <div class="bl-body">
            <h3>${toolText(b.title)}</h3>
            <p class="bl-meaning">${toolText(b.meaning)}</p>
            <div class="bl-context">
              ${b.context.map((c) => `<span class="bl-chip">${toolText(c)}</span>`).join("")}
            </div>
            <div class="bl-detail" id="bl-${b.id}" hidden>
              <p>${toolText(b.detail)}</p>
            </div>
            <button type="button" class="bl-toggle" data-bl-toggle="bl-${b.id}" aria-expanded="false" aria-controls="bl-${b.id}">
              <span data-label-more>${t("bl.more")}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        </article>`).join("")}
    </div>`;

  root.querySelectorAll("[data-bl-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.dataset.blToggle);
      const open = !panel.hidden;
      panel.hidden = open;
      btn.setAttribute("aria-expanded", String(!open));
      btn.classList.toggle("is-open", !open);
      const lbl = btn.querySelector("[data-label-more]");
      if (lbl) lbl.textContent = open ? t("bl.more") : t("bl.less");
    });
  });
  observeReveals();
}

/* ==================== 4) سؤال وجواب مجهول + النموذج ==================== */
function renderAskPage() {
  renderQaList();
  bindAskForm();
  setTheme("relationships");
}

function renderQaList() {
  const root = document.getElementById("qaRoot");
  if (!root) return;
  root.innerHTML = QA_SEED.map((item, i) => `
    <div class="qa-item" data-reveal style="--reveal-i:${i % 3}">
      <button type="button" class="qa-question" data-qa-toggle="qa-${item.id}" aria-expanded="false" aria-controls="qa-${item.id}">
        <span class="qa-q-icon" aria-hidden="true">؟</span>
        <span class="qa-q-main">
          <span class="qa-meta">
            <span class="qa-topic">${toolText(item.topic)}</span>
            <span class="qa-age">${toolText(item.ageBand)}</span>
          </span>
          <span class="qa-q-text">${toolText(item.question)}</span>
        </span>
        <svg class="qa-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="qa-answer" id="qa-${item.id}" hidden>
        <span class="qa-a-icon" aria-hidden="true">✓</span>
        <p>${toolText(item.answer)}</p>
      </div>
    </div>`).join("");

  root.querySelectorAll("[data-qa-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.dataset.qaToggle);
      const open = !panel.hidden;
      panel.hidden = open;
      btn.setAttribute("aria-expanded", String(!open));
      btn.classList.toggle("is-open", !open);
    });
  });
  observeReveals();
}

function bindAskForm() {
  const form = document.getElementById("askForm");
  if (!form || form.dataset.bound) return;
  form.dataset.bound = "1";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const topic = form.querySelector('[name="topic"]');
    const age = form.querySelector('[name="age"]');
    const msg = form.querySelector('[name="message"]');
    const consent = form.querySelector('[name="consent"]');
    const errBox = document.getElementById("askError");

    const problems = [];
    if (!topic.value) problems.push(t("ask.err.topic"));
    if (!age.value) problems.push(t("ask.err.age"));
    if (msg.value.trim().length < 20) problems.push(t("ask.err.message"));
    if (!consent.checked) problems.push(t("ask.err.consent"));

    if (problems.length) {
      errBox.hidden = false;
      errBox.textContent = problems.join(" · ");
      return;
    }
    errBox.hidden = true;

    const ref = "MB-" + Date.now().toString(36).toUpperCase().slice(-6);
    const topicText = topic.options[topic.selectedIndex].textContent.trim();
    const ageText = age.options[age.selectedIndex].textContent.trim();
    const subject = `${t("ask.mail.subject")} [${ref}]`;
    const bodyLines = [
      `${t("ask.mail.ref")}: ${ref}`,
      `${t("ask.field.topic")}: ${topicText}`,
      `${t("ask.field.age")}: ${ageText}`,
      "",
      msg.value.trim(),
      "",
      `— ${t("ask.mail.anon")}`
    ];
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    openAskModal({ ref, mailto });
    form.reset();
  });
}

let askModalEl = null;
function openAskModal({ ref, mailto }) {
  closeAskModal();
  const el = document.createElement("div");
  el.className = "ask-modal-backdrop";
  el.innerHTML = `
    <div class="ask-modal" role="dialog" aria-modal="true" aria-labelledby="askModalTitle">
      <button type="button" class="ask-modal-close" data-modal-close aria-label="${escapeHtml(t("ask.modal.close"))}">×</button>
      <span class="ask-modal-icon" aria-hidden="true">🔒</span>
      <h2 id="askModalTitle">${t("ask.modal.title")}</h2>
      <p class="ask-modal-text">${t("ask.modal.text")}</p>
      <div class="ask-ref">
        <span class="ask-ref-label">${t("ask.modal.ref")}</span>
        <code id="askRefCode">${ref}</code>
      </div>
      <div class="ask-modal-actions">
        <a class="btn btn-primary" href="${mailto}">${t("ask.modal.openMail")}</a>
        <button type="button" class="btn btn-ghost" data-copy-ref>${t("ask.modal.copy")}</button>
      </div>
      <p class="ask-modal-note">${t("ask.modal.note")}</p>
    </div>`;
  document.body.appendChild(el);
  document.body.classList.add("modal-open");
  askModalEl = el;
  requestAnimationFrame(() => el.classList.add("is-open"));

  el.querySelectorAll("[data-modal-close]").forEach((b) => b.addEventListener("click", closeAskModal));
  el.addEventListener("click", (e) => { if (e.target === el) closeAskModal(); });
  const copyBtn = el.querySelector("[data-copy-ref]");
  if (copyBtn) copyBtn.addEventListener("click", async () => {
    const payload = `${t("ask.mail.subject")} [${ref}]\n${mailto.replace(/^mailto:[^?]+\?subject=/, "").replace(/&body=/, "\n\n")}`;
    try { await navigator.clipboard.writeText(payload); copyBtn.textContent = t("ask.modal.copied"); }
    catch (err) { window.prompt(t("ask.modal.ref"), ref); }
    setTimeout(() => { if (copyBtn) copyBtn.textContent = t("ask.modal.copy"); }, 1800);
  });
}

function closeAskModal() {
  if (!askModalEl) return;
  askModalEl.classList.remove("is-open");
  const el = askModalEl;
  askModalEl = null;
  document.body.classList.remove("modal-open");
  setTimeout(() => el.remove(), 220);
}

document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAskModal(); });

/* ==================== الربط بالإقلاع (يُستدعى من bootPage) ==================== */
function bootTools() {
  const page = document.body.dataset.page;
  if (page === "quizzes") renderQuizzesPage();
  else if (page === "challenge") renderChallengePage();
  else if (page === "bodylang") renderBodyLangPage();
  else if (page === "ask") renderAskPage();
}
