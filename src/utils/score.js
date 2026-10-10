
const STORAGE_KEY = "cyberCompletedLevels";

export function getCompletedLevels() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const saved = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) || "[]"
    );

    if (!Array.isArray(saved)) {
      return [];
    }

    return [
      ...new Set(
        saved.filter(
          (level) =>
            Number.isInteger(level) &&
            level >= 1 &&
            level <= 5
        )
      ),
    ];
  } catch {
    return [];
  }
}

export function getCyberScore() {
  return Math.min(getCompletedLevels().length * 20, 100);
}

export function completeLevel(levelNumber) {
  const completedLevels = getCompletedLevels();

  if (
    !Number.isInteger(levelNumber) ||
    levelNumber < 1 ||
    levelNumber > 5
  ) {
    return completedLevels;
  }

  if (!completedLevels.includes(levelNumber)) {
    completedLevels.push(levelNumber);

    completedLevels.sort((a, b) => a - b);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(completedLevels)
      );
    }
  }

  return completedLevels;
}

export function resetCyberProgress() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}