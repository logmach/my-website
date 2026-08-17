import { beginnerQuizQuestions, beginnerSessions } from "./content-beginner.js";
import { intermediateQuizQuestions, intermediateSessions } from "./content-intermediate.js";
import { advancedQuizQuestions, advancedSessions } from "./content-advanced.js";

export const LEVELS = ["beginner", "intermediate", "advanced"];

export const LEVEL_META = {
  beginner: {
    label: "Beginner Prep",
    short: "Bangun fondasi dari awal",
    description: "Untuk kebutuhan belajar sekitar 70-100%. Kuasai bahasa aljabar, persamaan, formula, fungsi, dan pertidaksamaan dasar.",
    accent: "#3157e3",
  },
  intermediate: {
    label: "Intermediate Prep",
    short: "Hubungkan konsep dan strategi",
    description: "Untuk kebutuhan belajar sekitar 40-70%. Kerjakan sistem, kuadrat, pola, fungsi majemuk, dan VIC secara terstruktur.",
    accent: "#d94a70",
  },
  advanced: {
    label: "Advanced Prep",
    short: "Tajamkan penalaran bertempo",
    description: "Untuk kebutuhan belajar di bawah 40%. Fokus pada kasus tanda, strategi VIC, Data Sufficiency, dan keputusan cepat.",
    accent: "#087f78",
  },
};

export const ALL_SESSIONS = [
  ...beginnerSessions,
  ...intermediateSessions,
  ...advancedSessions,
];

export const ALL_QUIZ_QUESTIONS = [
  ...beginnerQuizQuestions,
  ...intermediateQuizQuestions,
  ...advancedQuizQuestions,
];

export function sessionsFor(level) {
  return ALL_SESSIONS.filter((session) => session.level === level);
}

export function questionsForSession(sessionId) {
  return ALL_QUIZ_QUESTIONS.filter((question) => question.sessionId === sessionId);
}

export function getSession(sessionId) {
  return ALL_SESSIONS.find((session) => session.id === sessionId) ?? null;
}

export function isSessionAvailable(state, session) {
  if (!state.unlocked[session.level]) return false;
  const sessions = sessionsFor(session.level);
  const index = sessions.findIndex((candidate) => candidate.id === session.id);
  if (index <= 0) return true;
  return Boolean(state.sessions[sessions[index - 1].id]?.mastered);
}

export function isTrackComplete(state, level) {
  const sessions = sessionsFor(level);
  return sessions.length > 0 && sessions.every((session) => state.sessions[session.id]?.mastered);
}

export function trackProgress(state, level) {
  const sessions = sessionsFor(level);
  const mastered = sessions.filter((session) => state.sessions[session.id]?.mastered).length;
  return { mastered, total: sessions.length, percentage: sessions.length ? Math.round((mastered / sessions.length) * 100) : 0 };
}
