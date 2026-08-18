const STORAGE_KEY = "nol-ke-805-progress-v2";

export function initialState() {
  return {
    schemaVersion: 2,
    placement: null,
    recommendedLevel: null,
    unlocked: {
      beginner: true,
      intermediate: false,
      advanced: false,
      mock: false,
    },
    sessions: {},
    finals: {},
    activeAttempt: null,
    mockAttempts: [],
    achievements: [],
    updatedAt: new Date().toISOString(),
  };
}

function storage() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

function normalize(candidate) {
  const base = initialState();
  if (!candidate || typeof candidate !== "object") return base;
  return {
    ...base,
    ...candidate,
    schemaVersion: 2,
    unlocked: { ...base.unlocked, ...(candidate.unlocked ?? {}) },
    sessions: candidate.sessions && typeof candidate.sessions === "object" ? candidate.sessions : {},
    finals: candidate.finals && typeof candidate.finals === "object" ? candidate.finals : {},
    mockAttempts: Array.isArray(candidate.mockAttempts) ? candidate.mockAttempts : [],
    achievements: Array.isArray(candidate.achievements) ? candidate.achievements : [],
  };
}

export function loadState() {
  const target = storage();
  if (!target) return initialState();
  try {
    return normalize(JSON.parse(target.getItem(STORAGE_KEY)));
  } catch {
    return initialState();
  }
}

export function saveState(state) {
  const next = normalize({ ...state, updatedAt: new Date().toISOString() });
  const target = storage();
  if (target) {
    try {
      target.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // The app remains usable if browser storage is disabled or full.
    }
  }
  return next;
}

export function resetState() {
  const target = storage();
  if (target) {
    try {
      target.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage access failures.
    }
  }
  return initialState();
}

export function applyPlacement(state, result) {
  const next = normalize(state);
  next.placement = result;
  next.recommendedLevel = result.level;
  next.activeAttempt = null;
  next.unlocked.beginner = true;
  if (result.level === "intermediate" || result.level === "advanced") {
    next.unlocked.intermediate = true;
  }
  if (result.level === "advanced") {
    next.unlocked.advanced = true;
  }
  return saveState(next);
}

export function recordSession(state, sessionId, score, total) {
  const next = normalize(state);
  const prior = next.sessions[sessionId] ?? { attempts: 0, bestScore: 0, mastered: false };
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  next.sessions[sessionId] = {
    attempts: prior.attempts + 1,
    bestScore: Math.max(prior.bestScore, percentage),
    lastScore: percentage,
    mastered: prior.mastered || percentage >= 80,
    completedAt: new Date().toISOString(),
  };
  return saveState(next);
}

export function recordFinal(state, level, result) {
  const next = normalize(state);
  const prior = next.finals[level] ?? { attempts: 0, passed: false, bestScore: 0 };
  next.finals[level] = {
    attempts: prior.attempts + 1,
    passed: prior.passed || result.passed,
    bestScore: Math.max(prior.bestScore, result.percentage),
    latest: result,
    completedAt: new Date().toISOString(),
  };
  if (result.passed && level === "beginner") next.unlocked.intermediate = true;
  if (result.passed && level === "intermediate") next.unlocked.advanced = true;
  if (result.passed && level === "advanced") next.unlocked.mock = true;
  next.activeAttempt = null;
  return saveState(next);
}

export function recordMock(state, result) {
  const next = normalize(state);
  next.mockAttempts = [result, ...next.mockAttempts].slice(0, 10);
  next.activeAttempt = null;
  return saveState(next);
}

export function setActiveAttempt(state, attempt) {
  const next = normalize(state);
  next.activeAttempt = attempt;
  return saveState(next);
}

export function clearActiveAttempt(state) {
  const next = normalize(state);
  next.activeAttempt = null;
  return saveState(next);
}

export function exportProgress(state) {
  const json = JSON.stringify(normalize(state));
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

export function importProgress(encoded) {
  const binary = atob(encoded.trim());
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  const parsed = JSON.parse(new TextDecoder().decode(bytes));
  return saveState(normalize(parsed));
}

export { STORAGE_KEY };
