import {
  LEVEL_META,
  LEVELS,
  getSession,
  isSessionAvailable,
  isTrackComplete,
  questionsForSession,
  sessionsFor,
  trackProgress,
} from "./curriculum.js";
import {
  finalResult,
  generateFinal,
  generatePlacement,
  generateQuantMock,
  mockResult,
  placementResult,
} from "./question-factory.js";
import { createAttemptSeed } from "./random.js";
import {
  applyPlacement,
  clearActiveAttempt,
  exportProgress,
  importProgress,
  loadState,
  recordFinal,
  recordMock,
  recordSession,
  resetState,
  saveState,
  setActiveAttempt,
} from "./state.js";

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
const headerLevel = document.querySelector("#header-level");
const headerXp = document.querySelector("#header-xp");

let state = loadState();
let timerHandle = null;
let sessionFeedback = null;

const TOPIC_LABELS = {
  "linear-equations": "Persamaan linear",
  systems: "Sistem persamaan",
  "absolute-value": "Nilai absolut",
  exponents: "Eksponen dan akar",
  quadratics: "Persamaan kuadrat",
  formulas: "Formula",
  functions: "Fungsi",
  sequences: "Barisan dan pola",
  inequalities: "Pertidaksamaan",
  vic: "VIC",
  "data-sufficiency": "Data Sufficiency",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function levelLabel(level) {
  return LEVEL_META[level]?.label ?? "Belum ditempatkan";
}

function computeXp() {
  const mastered = Object.values(state.sessions).filter((session) => session.mastered).length;
  const passedFinals = Object.values(state.finals).filter((result) => result.passed).length;
  const placementXp = state.placement ? 100 : 0;
  const mockXp = state.mockAttempts.length ? 800 : 0;
  return placementXp + mastered * 100 + passedFinals * 500 + mockXp;
}

function updateHeader() {
  headerLevel.textContent = state.recommendedLevel ? levelLabel(state.recommendedLevel) : "Mulai";
  headerXp.textContent = `${computeXp()} XP`;
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.hidden = true;
  }, 3400);
}

function navigate(path) {
  const target = `#${path}`;
  if (window.location.hash === target) renderRoute();
  else window.location.hash = target;
}

function parseRoute() {
  const cleaned = window.location.hash.replace(/^#\/?/, "") || "home";
  return cleaned.split("/").filter(Boolean);
}

function stopTimer() {
  if (timerHandle) window.clearInterval(timerHandle);
  timerHandle = null;
}

function focusMain() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelector("#main-content")?.focus({ preventScroll: true });
}

function backButton(path = "home", label = "Kembali") {
  return `<button class="back-link" type="button" data-nav="${escapeHtml(path)}"><span aria-hidden="true">←</span> ${escapeHtml(label)}</button>`;
}

function statusTag(text, className = "") {
  return `<span class="tag ${className}">${escapeHtml(text)}</span>`;
}

function progressBar(percentage, accent = "var(--blue)") {
  const safe = Math.max(0, Math.min(100, percentage));
  return `<div class="progress-track" style="--accent:${accent}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${safe}"><div class="progress-fill" style="width:${safe}%"></div></div>`;
}

function renderHome() {
  const placement = state.placement;
  const levelCards = LEVELS.map((level) => {
    const meta = LEVEL_META[level];
    const unlocked = state.unlocked[level];
    const progress = trackProgress(state, level);
    const recommended = state.recommendedLevel === level;
    const passed = state.finals[level]?.passed;
    return `
      <article class="menu-card ${unlocked ? "" : "locked"}" style="--accent:${meta.accent}">
        <div class="menu-icon" aria-hidden="true">${level === "beginner" ? "△" : level === "intermediate" ? "◇" : "✦"}</div>
        <div>
          ${recommended ? statusTag("Direkomendasikan", "recommended") : ""}
          ${passed ? statusTag("Lulus", "success") : ""}
          ${!unlocked ? statusTag("Terkunci", "locked") : ""}
        </div>
        <h3>${meta.label}</h3>
        <p>${meta.description}</p>
        ${unlocked ? progressBar(progress.percentage, meta.accent) : ""}
        <p class="small">${unlocked ? `${progress.mastered}/${progress.total} sesi dikuasai` : "Selesaikan tahap sebelumnya untuk membuka."}</p>
        <div class="card-actions">
          <button class="button-secondary" type="button" data-nav="track/${level}" ${unlocked ? "" : "disabled"}>${progress.mastered ? "Lanjutkan" : "Buka materi"}</button>
        </div>
      </article>`;
  }).join("");

  const mockUnlocked = state.unlocked.mock;
  const placementCopy = placement
    ? `Hasil terakhir: ${placement.correct}/${placement.total} benar - ${levelLabel(placement.level)}.`
    : "Jawab 12 soal berjenjang untuk menemukan titik mulai yang paling tepat.";

  app.innerHTML = `
    <section class="view">
      <div class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Kursus GMAT Quant interaktif</p>
          <h1 class="display-title">Mulai dari nol. Naik dengan bukti.</h1>
          <p class="lead">Kuasai equations, inequalities, functions, dan VIC melalui sesi ringkas, latihan bertahap, serta ujian yang benar-benar mengukur progres.</p>
          <div class="button-row spacer-top">
            <button class="button" type="button" data-nav="placement">${placement ? "Ulangi tes kemampuan" : "Mulai tes kemampuan"}</button>
            ${state.recommendedLevel ? `<button class="button-secondary" type="button" data-nav="track/${state.recommendedLevel}">Buka ${levelLabel(state.recommendedLevel)}</button>` : ""}
          </div>
        </div>
        <aside class="hero-guide" aria-labelledby="how-title">
          <h2 id="how-title">Cara menggunakan situs ini</h2>
          <ol class="guide-list">
            <li>Kerjakan placement test tanpa kalkulator dan tanpa melihat catatan.</li>
            <li>Mulai dari level rekomendasi; level sebelumnya tetap boleh dipakai untuk review.</li>
            <li>Kuasai seluruh sesi dan capai minimal 80% pada kuis sesi.</li>
            <li>Lulus final level untuk membuka level selanjutnya, lalu ambil Quant Mock.</li>
          </ol>
        </aside>
      </div>

      <div class="section-head">
        <div>
          <p class="eyebrow">Peta perjalanan</p>
          <h2 class="section-title">Pilih menu belajar</h2>
          <p>Semua menu terlihat sejak awal. Status pada setiap kartu menunjukkan apa yang sudah terbuka.</p>
        </div>
      </div>

      <div class="menu-grid">
        <article class="menu-card featured" style="--accent:var(--yellow)">
          <div>
            <div class="menu-icon" aria-hidden="true">◎</div>
            <h3>Tes Kemampuan</h3>
            <p>${placementCopy}</p>
          </div>
          <button class="button" type="button" data-nav="placement">${placement ? "Tes ulang" : "Mulai 12 soal"}</button>
        </article>
        ${levelCards}
        <article class="menu-card ${mockUnlocked ? "" : "locked"}" style="--accent:var(--yellow)">
          <div class="menu-icon" aria-hidden="true">⏱</div>
          <div>${mockUnlocked ? statusTag("Terbuka", "success") : statusTag("Terkunci", "locked")}</div>
          <h3>Quant Mock Exam</h3>
          <p>21 soal dalam 45 menit dengan tingkat kesulitan campuran, bookmark, autosave, dan estimasi skor latihan.</p>
          <div class="card-actions"><button class="button-secondary" type="button" data-nav="mock" ${mockUnlocked ? "" : "disabled"}>Buka mock exam</button></div>
        </article>
      </div>
    </section>`;
}

function renderPlacementIntro() {
  const active = state.activeAttempt?.type === "placement";
  app.innerHTML = `
    <section class="view">
      ${backButton("home", "Halaman awal")}
      <div class="panel">
        <p class="eyebrow">Tes kemampuan</p>
        <h1 class="page-title">12 soal untuk menemukan titik mulai.</h1>
        <p class="lead">Empat soal dasar, empat menengah, dan empat lanjutan akan dipilih secara acak tanpa duplikasi. Hasil mengukur persentase kebutuhan belajar Anda.</p>
        <div class="result-grid spacer-top">
          <div class="result-card"><h3>Beginner</h3><span class="result-number">0-3</span><span class="muted">jawaban benar</span></div>
          <div class="result-card"><h3>Intermediate</h3><span class="result-number">4-7</span><span class="muted">jawaban benar</span></div>
          <div class="result-card"><h3>Advanced</h3><span class="result-number">8-12</span><span class="muted">jawaban benar</span></div>
        </div>
        <div class="info-box spacer-top"><strong>Kerjakan jujur.</strong> Placement tidak menghukum kesalahan. Ia hanya memilih jalur belajar yang paling efisien.</div>
        <div class="button-row spacer-top">
          <button class="button" type="button" data-action="${active ? "resume-attempt" : "start-placement"}">${active ? "Lanjutkan tes yang tersimpan" : "Mulai tes"}</button>
          ${active ? `<button class="button-danger" type="button" data-action="discard-attempt">Buang percobaan</button>` : ""}
        </div>
      </div>
    </section>`;
}

function renderTrack(level) {
  const meta = LEVEL_META[level];
  if (!meta) return renderNotFound();
  if (!state.unlocked[level]) {
    app.innerHTML = `<section class="view">${backButton()}<div class="panel center"><p class="eyebrow">Masih terkunci</p><h1 class="page-title">Selesaikan tahap sebelumnya.</h1><p class="lead">Level ini akan terbuka setelah hasil placement atau kelulusan level sebelumnya memenuhi syarat.</p></div></section>`;
    return;
  }
  const sessions = sessionsFor(level);
  const progress = trackProgress(state, level);
  const trackComplete = isTrackComplete(state, level);
  const finalData = state.finals[level];
  const sessionRows = sessions.map((session, index) => {
    const available = isSessionAvailable(state, session);
    const sessionState = state.sessions[session.id];
    return `
      <article class="session-card ${available ? "" : "unavailable"}" style="--accent:${meta.accent}">
        <div class="session-index">${index + 1}</div>
        <div>
          <h3>${escapeHtml(session.title)}</h3>
          <p>${escapeHtml(session.subtitle)} · ${session.minutes} menit</p>
        </div>
        ${sessionState ? `<span class="score-badge ${sessionState.mastered ? "mastered" : ""}">${sessionState.mastered ? "✓ " : ""}${sessionState.bestScore}%</span>` : `<button class="button-secondary" type="button" data-nav="session/${session.id}" ${available ? "" : "disabled"}>${available ? "Mulai" : "Terkunci"}</button>`}
        ${sessionState ? `<button class="button-secondary" type="button" data-nav="session/${session.id}" ${available ? "" : "disabled"}>${sessionState.mastered ? "Review" : "Coba lagi"}</button>` : ""}
      </article>`;
  }).join("");

  app.innerHTML = `
    <section class="view">
      ${backButton("home", "Semua menu")}
      <div class="panel track-summary" style="--accent:${meta.accent}">
        <div>
          <p class="eyebrow">Jalur belajar</p>
          <h1 class="page-title">${meta.label}</h1>
          <p class="lead">${meta.description}</p>
        </div>
        <div class="track-metric">
          <strong>${progress.percentage}%</strong>
          <span>${progress.mastered} dari ${progress.total} sesi dikuasai</span>
          <div class="spacer-top">${progressBar(progress.percentage, meta.accent)}</div>
        </div>
      </div>
      <div class="section-head"><div><p class="eyebrow">Sesi</p><h2 class="section-title">Belajar berurutan, ulangi seperlunya</h2></div></div>
      <div class="session-list">${sessionRows}</div>
      <div class="panel spacer-top">
        <p class="eyebrow">Ujian kelulusan</p>
        <h2 class="section-title">Final ${meta.label}</h2>
        <p>15 soal acak, 30 menit, dan minimal 12 jawaban benar untuk lulus.</p>
        ${finalData?.passed ? `<div class="success-box"><strong>Sudah lulus.</strong> Skor terbaik ${finalData.bestScore}%.</div>` : trackComplete ? `<div class="info-box">Semua sesi sudah dikuasai. Final siap dikerjakan.</div>` : `<div class="warning-box">Kuasai seluruh sesi terlebih dahulu untuk membuka final.</div>`}
        <div class="button-row spacer-top">
          <button class="button" type="button" data-nav="final/${level}" ${trackComplete ? "" : "disabled"}>${finalData ? "Ambil final lagi" : "Mulai final"}</button>
          ${finalData?.latest ? `<button class="button-secondary" type="button" data-nav="report/final/${level}">Lihat hasil terakhir</button>` : ""}
        </div>
      </div>
    </section>`;
}

function renderSession(sessionId) {
  const session = getSession(sessionId);
  if (!session) return renderNotFound();
  if (!isSessionAvailable(state, session)) {
    app.innerHTML = `<section class="view">${backButton(`track/${session.level}`, "Kembali ke jalur")}<div class="panel center"><h1 class="page-title">Sesi belum terbuka.</h1><p>Kuasai sesi sebelumnya terlebih dahulu.</p></div></section>`;
    return;
  }
  const meta = LEVEL_META[session.level];
  const questions = questionsForSession(session.id);
  const sessionState = state.sessions[session.id];
  const feedback = sessionFeedback?.sessionId === session.id ? sessionFeedback : null;
  const conceptCards = session.concepts.map((concept) => `
    <article class="concept-card">
      <h3>${escapeHtml(concept.title)}</h3>
      <p>${escapeHtml(concept.body)}</p>
      ${concept.formula ? `<code class="formula">${escapeHtml(concept.formula)}</code>` : ""}
      ${concept.tip ? `<div class="tip-box spacer-top">${escapeHtml(concept.tip)}</div>` : ""}
    </article>`).join("");
  const examples = session.workedExamples.map((example, index) => `
    <details class="example-card" ${index === 0 ? "open" : ""}>
      <summary><strong>Contoh ${index + 1}:</strong> ${escapeHtml(example.prompt)}</summary>
      <ol class="worked-steps">${example.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      <div class="success-box"><strong>Jawaban:</strong> ${escapeHtml(example.answer)}</div>
    </details>`).join("");
  const quiz = questions.map((question, index) => {
    const response = feedback?.answers[question.id];
    const answered = Number.isInteger(response);
    return `
      <fieldset class="quiz-question">
        <legend>${index + 1}. ${escapeHtml(question.prompt)}</legend>
        <div class="option-list">
          ${question.options.map((option, optionIndex) => {
            const classes = feedback ? optionIndex === question.answer ? "correct" : answered && optionIndex === response ? "incorrect" : "" : "";
            return `<label class="option-label ${classes}"><input type="radio" name="${question.id}" value="${optionIndex}" ${response === optionIndex ? "checked" : ""} ${feedback ? "disabled" : ""}><span>${escapeHtml(option)}</span></label>`;
          }).join("")}
        </div>
        ${feedback ? `<div class="feedback"><strong>${response === question.answer ? "Benar." : "Perlu diperbaiki."}</strong> ${escapeHtml(question.explanation)}</div>` : `<details class="feedback"><summary>Lihat petunjuk</summary>${escapeHtml(question.hint)}</details>`}
      </fieldset>`;
  }).join("");

  app.innerHTML = `
    <article class="view">
      ${backButton(`track/${session.level}`, meta.label)}
      <header class="panel" style="border-top:9px solid ${meta.accent}">
        <p class="eyebrow">${meta.label} · ${escapeHtml(session.pdfPages)}</p>
        <h1 class="page-title">${escapeHtml(session.title)}</h1>
        <p class="lead">${escapeHtml(session.subtitle)}</p>
        <div class="button-row spacer-top">${statusTag(`${session.minutes} menit`)}${sessionState?.mastered ? statusTag(`Dikuasai · ${sessionState.bestScore}%`, "success") : statusTag("Target kuis 80%")}</div>
      </header>
      <section class="panel spacer-top">
        <p class="eyebrow">Tujuan belajar</p>
        <ul class="objective-list">${session.objectives.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <div class="section-head"><div><p class="eyebrow">Konsep</p><h2 class="section-title">Pahami sebelum menghafal</h2></div></div>
      <div class="concept-grid">${conceptCards}</div>
      <div class="section-head"><div><p class="eyebrow">Contoh terpandu</p><h2 class="section-title">Ikuti alur penyelesaiannya</h2></div></div>
      <div class="example-grid">${examples}</div>
      <section class="panel spacer-top">
        <div class="warning-box"><strong>Jebakan umum</strong><ul class="trap-list">${session.traps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
        <h2 class="section-title spacer-top">Ringkasan</h2>
        <ul class="recap-list">${session.recap.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <form class="quiz-shell" data-form="session-quiz" data-session-id="${session.id}">
          <p class="eyebrow">Kuis sesi</p>
          <h2 class="section-title">Buktikan pemahaman Anda</h2>
          <p>Jawab semua 5 soal. Skor 80% atau lebih akan membuka sesi berikutnya.</p>
          ${quiz}
          ${feedback ? `<div class="${feedback.score >= 4 ? "success-box" : "warning-box"}"><strong>${feedback.score}/5 benar.</strong> ${feedback.score >= 4 ? "Sesi dikuasai dan tahap berikutnya terbuka." : "Pelajari pembahasan, lalu coba lagi."}</div><div class="button-row spacer-top"><button class="button" type="button" data-action="retry-session" data-session-id="${session.id}">Coba kuis lagi</button><button class="button-secondary" type="button" data-nav="track/${session.level}">Kembali ke jalur</button></div>` : `<button class="button" type="submit">Nilai kuis</button>`}
        </form>
      </section>
    </article>`;
}

function renderFinalIntro(level) {
  const meta = LEVEL_META[level];
  if (!meta) return renderNotFound();
  if (!isTrackComplete(state, level)) {
    app.innerHTML = `<section class="view">${backButton(`track/${level}`, meta.label)}<div class="panel center"><h1 class="page-title">Final belum terbuka.</h1><p>Kuasai semua sesi ${meta.label} terlebih dahulu.</p></div></section>`;
    return;
  }
  const active = state.activeAttempt?.type === "final" && state.activeAttempt.level === level;
  app.innerHTML = `
    <section class="view">
      ${backButton(`track/${level}`, meta.label)}
      <div class="panel">
        <p class="eyebrow">Ujian kelulusan</p>
        <h1 class="page-title">Final ${meta.label}</h1>
        <p class="lead">15 soal dengan blueprint kesulitan sesuai level. Waktu 30 menit dan batas lulus 12 jawaban benar.</p>
        <div class="result-grid spacer-top">
          <div class="result-card"><h3>Jumlah soal</h3><span class="result-number">15</span></div>
          <div class="result-card"><h3>Durasi</h3><span class="result-number">30</span><span class="muted">menit</span></div>
          <div class="result-card"><h3>Batas lulus</h3><span class="result-number">12</span><span class="muted">jawaban benar</span></div>
        </div>
        <div class="warning-box spacer-top">Jika waktu habis, jawaban kosong akan dinilai salah. Percobaan tersimpan otomatis saat halaman dimuat ulang.</div>
        <div class="button-row spacer-top">
          <button class="button" type="button" data-action="${active ? "resume-attempt" : "start-final"}" data-level="${level}">${active ? "Lanjutkan final" : "Mulai final"}</button>
          ${active ? `<button class="button-danger" type="button" data-action="discard-attempt">Buang percobaan</button>` : ""}
        </div>
      </div>
    </section>`;
}

function renderMockIntro() {
  if (!state.unlocked.mock) {
    app.innerHTML = `<section class="view">${backButton()}<div class="panel center"><p class="eyebrow">Masih terkunci</p><h1 class="page-title">Lulus Advanced terlebih dahulu.</h1><p>Quant Mock dibuka setelah final Advanced berhasil diselesaikan.</p></div></section>`;
    return;
  }
  const active = state.activeAttempt?.type === "mock";
  app.innerHTML = `
    <section class="view">
      ${backButton("home", "Halaman awal")}
      <div class="panel">
        <p class="eyebrow">Quant Subject Mock</p>
        <h1 class="page-title">21 soal. 45 menit. Satu fokus.</h1>
        <p class="lead">Simulasi ini mencakup domain Equations, Inequalities, Functions, dan VIC dari buku sumber. Ia bukan mock GMAT penuh 64 soal.</p>
        <div class="result-grid spacer-top">
          <div class="result-card"><h3>Soal</h3><span class="result-number">21</span></div>
          <div class="result-card"><h3>Waktu</h3><span class="result-number">45</span><span class="muted">menit</span></div>
          <div class="result-card"><h3>Skor</h3><span class="result-number">60-90</span><span class="muted">estimasi Quant</span></div>
        </div>
        <div class="info-box spacer-top"><strong>Bukan skor resmi.</strong> Proyeksi total 205-805 hanya mengasumsikan performa Verbal dan Data Insights setara.</div>
        <div class="button-row spacer-top"><button class="button" type="button" data-action="${active ? "resume-attempt" : "start-mock"}">${active ? "Lanjutkan mock" : "Mulai mock"}</button>${active ? `<button class="button-danger" type="button" data-action="discard-attempt">Buang percobaan</button>` : ""}</div>
      </div>
      ${state.mockAttempts.length ? `<div class="panel spacer-top"><h2 class="section-title">Percobaan terakhir</h2><p>Quant ${state.mockAttempts[0].quantScore}/90 · proyeksi ${state.mockAttempts[0].projectedTotal} · ${state.mockAttempts[0].correct}/${state.mockAttempts[0].total} benar.</p><button class="button-secondary" type="button" data-nav="report/mock">Lihat laporan</button></div>` : ""}
    </section>`;
}

function startAttempt(type, level = null) {
  const seed = createAttemptSeed(type);
  const questions = type === "placement" ? generatePlacement(seed) : type === "final" ? generateFinal(level, seed) : generateQuantMock(seed);
  const now = Date.now();
  const durationMs = type === "final" ? 30 * 60 * 1000 : type === "mock" ? 45 * 60 * 1000 : null;
  state = setActiveAttempt(state, {
    type,
    level,
    seed,
    questions,
    answers: {},
    bookmarks: [],
    edits: 0,
    current: 0,
    startedAt: now,
    deadline: durationMs ? now + durationMs : null,
  });
  navigate("attempt");
}

function scheduleTimer(attempt) {
  stopTimer();
  if (!attempt.deadline) return;
  const tick = () => {
    const remaining = Math.max(0, attempt.deadline - Date.now());
    const timer = document.querySelector("#attempt-timer");
    if (timer) {
      timer.textContent = formatClock(Math.ceil(remaining / 1000));
      timer.classList.toggle("warning", remaining <= 5 * 60 * 1000);
    }
    if (remaining <= 0) {
      stopTimer();
      finishAttempt(true);
    }
  };
  tick();
  timerHandle = window.setInterval(tick, 1000);
}

function formatClock(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function renderAttempt() {
  const attempt = state.activeAttempt;
  if (!attempt) {
    navigate("home");
    return;
  }
  if (attempt.deadline && Date.now() >= attempt.deadline) {
    finishAttempt(true);
    return;
  }
  const question = attempt.questions[attempt.current];
  const response = attempt.answers[question.id];
  const answeredCount = Object.values(attempt.answers).filter(Number.isInteger).length;
  const isBookmarked = attempt.bookmarks.includes(question.id);
  const typeLabel = attempt.type === "placement" ? "Tes Kemampuan" : attempt.type === "final" ? `Final ${levelLabel(attempt.level)}` : "Quant Mock";
  const map = attempt.questions.map((item, index) => {
    const classes = [index === attempt.current ? "current" : "", Number.isInteger(attempt.answers[item.id]) ? "answered" : "", attempt.bookmarks.includes(item.id) ? "bookmarked" : ""].filter(Boolean).join(" ");
    return `<button class="map-button ${classes}" type="button" data-action="goto-question" data-index="${index}" aria-label="Soal ${index + 1}${Number.isInteger(attempt.answers[item.id]) ? ", sudah dijawab" : ""}">${index + 1}</button>`;
  }).join("");
  app.innerHTML = `
    <section class="view">
      <div class="exam-layout">
        <article class="question-card">
          <div class="question-top"><span class="question-number">${escapeHtml(typeLabel)} · ${attempt.current + 1}/${attempt.questions.length}</span>${attempt.deadline ? `<span id="attempt-timer" class="timer">--:--</span>` : ""}</div>
          ${progressBar(((attempt.current + 1) / attempt.questions.length) * 100)}
          <p class="eyebrow spacer-top">${escapeHtml(TOPIC_LABELS[question.topic] ?? question.topic)} · Kesulitan ${question.difficulty}</p>
          <h1 class="question-prompt">${escapeHtml(question.prompt)}</h1>
          <div class="option-list" role="radiogroup" aria-label="Pilihan jawaban">
            ${question.options.map((option, index) => `<label class="option-label"><input type="radio" name="attempt-answer" value="${index}" data-action="answer-attempt" ${response === index ? "checked" : ""}><span>${escapeHtml(option)}</span></label>`).join("")}
          </div>
          <div class="exam-actions">
            <button class="button-secondary" type="button" data-action="previous-question" ${attempt.current === 0 ? "disabled" : ""}>← Sebelumnya</button>
            ${attempt.type !== "placement" ? `<button class="button-secondary" type="button" data-action="toggle-bookmark">${isBookmarked ? "★ Ditandai" : "☆ Tandai"}</button>` : ""}
            ${attempt.current < attempt.questions.length - 1 ? `<button class="button" type="button" data-action="next-question">Berikutnya →</button>` : `<button class="button" type="button" data-action="finish-attempt">Selesaikan</button>`}
          </div>
        </article>
        <aside class="exam-sidebar" aria-label="Navigasi soal">
          <h2>${answeredCount}/${attempt.questions.length} dijawab</h2>
          ${attempt.type === "mock" ? `<p class="small muted">Perubahan jawaban: ${attempt.edits ?? 0}/3</p>` : ""}
          <div class="question-map">${map}</div>
          <button class="button button-block spacer-top" type="button" data-action="finish-attempt">Kumpulkan jawaban</button>
          <button class="text-button button-block spacer-top" type="button" data-action="save-exit">Simpan dan keluar</button>
        </aside>
      </div>
    </section>`;
  scheduleTimer(attempt);
}

function finishAttempt(force = false) {
  const attempt = state.activeAttempt;
  if (!attempt) return;
  const answered = Object.values(attempt.answers).filter(Number.isInteger).length;
  if (!force && answered < attempt.questions.length && !window.confirm(`${attempt.questions.length - answered} soal belum dijawab. Tetap kumpulkan?`)) return;
  stopTimer();
  if (attempt.type === "placement") {
    const result = placementResult(attempt.questions, attempt.answers);
    state = applyPlacement(state, result);
    navigate("report/placement");
  } else if (attempt.type === "final") {
    const result = finalResult(attempt.questions, attempt.answers);
    state = recordFinal(state, attempt.level, { ...result, level: attempt.level, timedOut: force && attempt.deadline <= Date.now() });
    navigate(`report/final/${attempt.level}`);
  } else {
    const elapsedSec = Math.min(45 * 60, Math.round((Date.now() - attempt.startedAt) / 1000));
    const result = mockResult(attempt.questions, attempt.answers, elapsedSec);
    state = recordMock(state, result);
    navigate("report/mock");
  }
  updateHeader();
}

function topicBars(topics) {
  return Object.entries(topics ?? {}).map(([topic, value]) => {
    const percentage = value.total ? Math.round((value.correct / value.total) * 100) : 0;
    return `<div class="topic-row"><strong>${escapeHtml(TOPIC_LABELS[topic] ?? topic)}</strong>${progressBar(percentage)}<strong>${value.correct}/${value.total}</strong></div>`;
  }).join("");
}

function renderReport(kind, level = null) {
  if (kind === "placement") {
    const result = state.placement;
    if (!result) return renderNotFound();
    const meta = LEVEL_META[result.level];
    app.innerHTML = `
      <section class="view">
        ${backButton("home", "Halaman awal")}
        <div class="panel result-hero" style="--accent:${meta.accent}">
          <p class="eyebrow">Hasil tes kemampuan</p>
          <div class="score-ring" style="--score:${result.percentage};--accent:${meta.accent}"><div class="score-ring-inner"><div><strong>${result.correct}/${result.total}</strong><small>benar</small></div></div></div>
          <h1 class="page-title">Rekomendasi: ${meta.label}</h1>
          <p class="lead" style="margin-inline:auto">Kebutuhan belajar Anda diperkirakan ${result.learningNeed}%. ${meta.short}.</p>
          <div class="button-row spacer-top" style="justify-content:center"><button class="button" type="button" data-nav="track/${result.level}">Mulai ${meta.label}</button><button class="button-secondary" type="button" data-nav="placement">Tes ulang</button></div>
        </div>
        <div class="panel spacer-top"><h2 class="section-title">Peta topik</h2><p class="muted">Gunakan topik dengan akurasi terendah sebagai prioritas review.</p><div class="topic-bars spacer-top">${topicBars(result.topics)}</div></div>
      </section>`;
    return;
  }
  if (kind === "final") {
    const result = state.finals[level]?.latest;
    const meta = LEVEL_META[level];
    if (!result || !meta) return renderNotFound();
    const nextLevel = level === "beginner" ? "intermediate" : level === "intermediate" ? "advanced" : "mock";
    app.innerHTML = `
      <section class="view">
        ${backButton(`track/${level}`, meta.label)}
        <div class="panel result-hero" style="--accent:${result.passed ? "var(--green)" : "var(--red)"}">
          <p class="eyebrow">Final ${meta.label}</p>
          <div class="score-ring" style="--score:${result.percentage};--accent:${result.passed ? "var(--green)" : "var(--red)"}"><div class="score-ring-inner"><div><strong>${result.correct}/${result.total}</strong><small>benar</small></div></div></div>
          <h1 class="page-title">${result.passed ? "Selamat, Anda lulus!" : "Belum lulus - dan itu berguna."}</h1>
          <p class="lead" style="margin-inline:auto">${result.passed ? level === "advanced" ? "Advanced selesai. Quant Mock Exam sekarang terbuka." : `${levelLabel(nextLevel)} sekarang terbuka.` : "Ulangi sesi yang belum stabil, lalu ambil final kembali. Skor minimum adalah 12/15."}</p>
          <div class="button-row spacer-top" style="justify-content:center">${result.passed ? `<button class="button" type="button" data-nav="${nextLevel === "mock" ? "mock" : `track/${nextLevel}`}">Lanjutkan</button>` : `<button class="button" type="button" data-nav="track/${level}">Kembali belajar</button>`}<button class="button-secondary" type="button" data-nav="final/${level}">Ambil lagi</button></div>
        </div>
      </section>`;
    return;
  }
  if (kind === "mock") {
    const result = state.mockAttempts[0];
    if (!result) return renderNotFound();
    app.innerHTML = `
      <section class="view">
        ${backButton("mock", "Quant Mock")}
        <div class="panel result-hero" style="--accent:var(--blue)">
          <p class="eyebrow">Laporan Quant Mock</p>
          <div class="score-ring" style="--score:${result.weightedAccuracy};--accent:var(--blue)"><div class="score-ring-inner"><div><strong>${result.quantScore}</strong><small>dari 90</small></div></div></div>
          <h1 class="page-title">Estimasi Quant ${result.quantScore}</h1>
          <p class="lead" style="margin-inline:auto">${result.correct}/${result.total} benar · akurasi berbobot ${result.weightedAccuracy}% · selesai dalam ${formatClock(result.elapsedSec)}.</p>
          <div class="warning-box spacer-top"><strong>${result.label}.</strong> Proyeksi total ${result.projectedTotal} hanya berlaku jika performa Verbal dan Data Insights setara; algoritme resmi GMAT tidak tersedia.</div>
          <div class="button-row spacer-top" style="justify-content:center"><button class="button" type="button" data-nav="mock">Ambil mock lagi</button><button class="button-secondary" type="button" data-nav="home">Halaman awal</button></div>
        </div>
        <div class="panel spacer-top"><h2 class="section-title">Analisis per topik</h2><div class="topic-bars spacer-top">${topicBars(result.topics)}</div></div>
      </section>`;
    return;
  }
  renderNotFound();
}

function renderProgressTools() {
  app.innerHTML = `
    <section class="view">
      ${backButton("home", "Halaman awal")}
      <div class="panel">
        <p class="eyebrow">Kelola progres</p>
        <h1 class="page-title">Progres tersimpan di browser ini.</h1>
        <p class="lead">Ekspor kode cadangan untuk memindahkan progres ke perangkat lain. Jangan bagikan kode jika Anda tidak ingin riwayat belajar diketahui orang lain.</p>
      </div>
      <div class="progress-tools spacer-top">
        <div class="panel"><h2 class="section-title">Ekspor</h2><p class="muted">Salin kode ini dan simpan di tempat aman.</p><textarea id="export-code" readonly>${escapeHtml(exportProgress(state))}</textarea><button class="button spacer-top" type="button" data-action="copy-progress">Salin kode</button></div>
        <div class="panel"><h2 class="section-title">Impor</h2><p class="muted">Menimpa progres saat ini dengan kode cadangan.</p><textarea id="import-code" placeholder="Tempel kode progres di sini"></textarea><button class="button spacer-top" type="button" data-action="import-progress">Impor progres</button></div>
      </div>
      <div class="panel spacer-top"><h2 class="section-title">Mulai ulang</h2><p>Hapus placement, progres sesi, final, dan riwayat mock dari browser ini.</p><button class="button-danger" type="button" data-action="reset-progress">Hapus semua progres</button></div>
    </section>`;
}

function renderNotFound() {
  app.innerHTML = `<section class="view"><div class="panel center"><p class="eyebrow">404</p><h1 class="page-title">Halaman tidak ditemukan.</h1><button class="button spacer-top" type="button" data-nav="home">Kembali ke awal</button></div></section>`;
}

function renderRoute() {
  stopTimer();
  updateHeader();
  const [route, parameter, extra] = parseRoute();
  if (route === "home") renderHome();
  else if (route === "placement") renderPlacementIntro();
  else if (route === "track") renderTrack(parameter);
  else if (route === "session") renderSession(parameter);
  else if (route === "final") renderFinalIntro(parameter);
  else if (route === "mock") renderMockIntro();
  else if (route === "attempt") renderAttempt();
  else if (route === "report") renderReport(parameter, extra);
  else if (route === "progress") renderProgressTools();
  else renderNotFound();
  focusMain();
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  if (nav && !nav.disabled) {
    navigate(nav.dataset.nav);
    return;
  }
  const action = event.target.closest("[data-action]");
  if (!action || action.disabled) return;
  const name = action.dataset.action;
  if (name === "start-placement") startAttempt("placement");
  else if (name === "start-final") startAttempt("final", action.dataset.level);
  else if (name === "start-mock") startAttempt("mock");
  else if (name === "resume-attempt") navigate("attempt");
  else if (name === "discard-attempt") {
    if (window.confirm("Buang percobaan yang sedang berlangsung?")) {
      state = clearActiveAttempt(state);
      renderRoute();
    }
  } else if (name === "previous-question" || name === "next-question" || name === "goto-question") {
    const attempt = state.activeAttempt;
    if (!attempt) return;
    const nextIndex = name === "previous-question" ? attempt.current - 1 : name === "next-question" ? attempt.current + 1 : Number(action.dataset.index);
    attempt.current = Math.max(0, Math.min(attempt.questions.length - 1, nextIndex));
    state = setActiveAttempt(state, attempt);
    renderAttempt();
  } else if (name === "toggle-bookmark") {
    const attempt = state.activeAttempt;
    const questionId = attempt.questions[attempt.current].id;
    attempt.bookmarks = attempt.bookmarks.includes(questionId) ? attempt.bookmarks.filter((id) => id !== questionId) : [...attempt.bookmarks, questionId];
    state = setActiveAttempt(state, attempt);
    renderAttempt();
  } else if (name === "finish-attempt") finishAttempt(false);
  else if (name === "save-exit") {
    showToast("Percobaan tersimpan. Anda dapat melanjutkannya nanti.");
    navigate("home");
  } else if (name === "retry-session") {
    sessionFeedback = null;
    renderSession(action.dataset.sessionId);
  } else if (name === "copy-progress") {
    const code = document.querySelector("#export-code")?.value;
    navigator.clipboard?.writeText(code).then(() => showToast("Kode progres disalin.")).catch(() => showToast("Pilih dan salin kode secara manual."));
  } else if (name === "import-progress") {
    try {
      state = importProgress(document.querySelector("#import-code")?.value ?? "");
      showToast("Progres berhasil diimpor.");
      navigate("home");
    } catch {
      showToast("Kode progres tidak valid.");
    }
  } else if (name === "reset-progress") {
    if (window.confirm("Hapus seluruh progres secara permanen dari browser ini?")) {
      state = resetState();
      sessionFeedback = null;
      showToast("Progres dihapus.");
      navigate("home");
    }
  }
});

document.addEventListener("change", (event) => {
  if (!event.target.matches('[data-action="answer-attempt"]')) return;
  const attempt = state.activeAttempt;
  if (!attempt) return;
  const question = attempt.questions[attempt.current];
  const nextAnswer = Number(event.target.value);
  const priorAnswer = attempt.answers[question.id];
  if (attempt.type === "mock" && Number.isInteger(priorAnswer) && priorAnswer !== nextAnswer) {
    if ((attempt.edits ?? 0) >= 3) {
      showToast("Batas tiga perubahan jawaban pada mock sudah tercapai.");
      renderAttempt();
      return;
    }
    attempt.edits = (attempt.edits ?? 0) + 1;
  }
  attempt.answers[question.id] = nextAnswer;
  state = setActiveAttempt(state, attempt);
  renderAttempt();
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest('[data-form="session-quiz"]');
  if (!form) return;
  event.preventDefault();
  const sessionId = form.dataset.sessionId;
  const questions = questionsForSession(sessionId);
  const data = new FormData(form);
  const answers = {};
  for (const question of questions) {
    const value = data.get(question.id);
    if (value === null) {
      showToast("Jawab semua soal sebelum menilai kuis.");
      return;
    }
    answers[question.id] = Number(value);
  }
  const score = questions.reduce((total, question) => total + (answers[question.id] === question.answer ? 1 : 0), 0);
  state = recordSession(state, sessionId, score, questions.length);
  sessionFeedback = { sessionId, answers, score };
  updateHeader();
  renderSession(sessionId);
});

window.addEventListener("hashchange", renderRoute);
window.addEventListener("beforeunload", stopTimer);

if (!window.location.hash) window.location.hash = "#home";
else renderRoute();
