export const XP_VALUES = {
  vocabCorrect: 10,
  grammarCorrect: 15,
  dailyChallenge: 50,
  perfectQuiz: 25,
} as const;

export function calculateLevel(xp: number): { level: number; xpInLevel: number; xpForNext: number; jlptLevel: string } {
  let remaining = xp;
  let level = 1;

  while (true) {
    const threshold = getXpThreshold(level);
    if (remaining < threshold) {
      return {
        level,
        xpInLevel: remaining,
        xpForNext: threshold,
        jlptLevel: getJlptForLevel(level),
      };
    }
    remaining -= threshold;
    level++;
  }
}

function getXpThreshold(level: number): number {
  if (level <= 10) return 100;
  if (level <= 25) return 150;
  return 200;
}

function getJlptForLevel(level: number): string {
  if (level <= 10) return 'N5';
  if (level <= 25) return 'N4';
  return 'N3';
}

export function getLevelTitle(level: number): string {
  if (level <= 3) return 'Beginner';
  if (level <= 6) return 'Elementary';
  if (level <= 10) return 'N5 Complete';
  if (level <= 15) return 'Pre-Intermediate';
  if (level <= 20) return 'Lower Intermediate';
  if (level <= 25) return 'N4 Complete';
  if (level <= 30) return 'Intermediate';
  if (level <= 35) return 'Upper Intermediate';
  return 'N3 Complete';
}
