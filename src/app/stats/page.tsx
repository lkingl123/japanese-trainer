'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';
import Badge from '@/components/ui/Badge';
import { getProgress } from '@/lib/storage';
import { calculateLevel, getLevelTitle } from '@/lib/xp';
import { UserProgress } from '@/lib/types';

export default function StatsPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => { getProgress().then(setProgress); }, []);

  if (!progress) return <div className="flex items-center justify-center min-h-screen text-text-secondary">Loading...</div>;

  const levelInfo = calculateLevel(progress.xp);
  const vocabCards = Object.values(progress.vocabMastery);
  const grammarEntries = Object.values(progress.grammarMastery);
  const vocabByLevel = {
    new: vocabCards.filter((c) => c.level === 0).length,
    learning: vocabCards.filter((c) => c.level >= 1 && c.level <= 2).length,
    known: vocabCards.filter((c) => c.level >= 3 && c.level <= 4).length,
    mastered: vocabCards.filter((c) => c.level === 5).length,
  };
  const totalStudied = vocabCards.length;
  const totalCorrect = vocabCards.reduce((sum, c) => sum + c.correctCount, 0);
  const totalIncorrect = vocabCards.reduce((sum, c) => sum + c.incorrectCount, 0);
  const accuracy = totalCorrect + totalIncorrect > 0 ? Math.round((totalCorrect / (totalCorrect + totalIncorrect)) * 100) : 0;
  const grammarCompleted = grammarEntries.filter((g) => g.completed).length;
  const grammarAvgScore = grammarEntries.length > 0 ? Math.round(grammarEntries.reduce((sum, g) => sum + g.score, 0) / grammarEntries.length) : 0;
  const today = new Date().toISOString().split('T')[0];
  const dueForReview = vocabCards.filter((c) => c.nextReview <= today).length;

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-bold mb-1">Statistics</h1>
      <p className="text-text-secondary text-sm mb-6">Track your learning progress</p>

      <Card className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-text-secondary">Level {levelInfo.level}</p>
            <p className="text-xl font-bold">{getLevelTitle(levelInfo.level)}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">{progress.xp}</p>
            <p className="text-xs text-text-secondary">Total XP</p>
          </div>
        </div>
        <ProgressBar value={(levelInfo.xpInLevel / levelInfo.xpForNext) * 100} />
        <p className="text-xs text-text-secondary mt-1">{levelInfo.xpInLevel}/{levelInfo.xpForNext} XP to level {levelInfo.level + 1}</p>
      </Card>

      <Card className="mb-4">
        <div className="flex items-center justify-around text-center">
          <div>
            <span className="text-3xl block">🔥</span>
            <p className="text-2xl font-bold mt-1">{progress.currentStreak}</p>
            <p className="text-xs text-text-secondary">Current Streak</p>
          </div>
          <div className="w-px h-12 bg-black/10" />
          <div>
            <span className="text-3xl block">🏆</span>
            <p className="text-2xl font-bold mt-1">{progress.longestStreak}</p>
            <p className="text-xs text-text-secondary">Best Streak</p>
          </div>
        </div>
      </Card>

      <Card className="mb-4">
        <h3 className="font-semibold mb-3">📚 Vocabulary</h3>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-primary/5 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-primary">{totalStudied}</p>
            <p className="text-xs text-text-secondary">Words Studied</p>
          </div>
          <div className="bg-success/5 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-success">{accuracy}%</p>
            <p className="text-xs text-text-secondary">Accuracy</p>
          </div>
        </div>
        {dueForReview > 0 && (
          <div className="bg-warning/5 rounded-xl p-3 mb-3 flex items-center justify-between">
            <span className="text-sm font-medium">Words due for review</span>
            <Badge variant="warning">{dueForReview}</Badge>
          </div>
        )}
        <div className="space-y-2">
          {[['New', vocabByLevel.new], ['Learning', vocabByLevel.learning], ['Known', vocabByLevel.known], ['Mastered', vocabByLevel.mastered]].map(([label, count]) => (
            <div key={label as string} className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">{label}</span>
              <span className={`font-medium ${label === 'Mastered' ? 'text-success' : ''}`}>{count as number}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-4">
        <h3 className="font-semibold mb-3">✏️ Grammar</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-primary/5 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-primary">{grammarCompleted}</p>
            <p className="text-xs text-text-secondary">Patterns Practiced</p>
          </div>
          <div className="bg-success/5 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-success">{grammarAvgScore}%</p>
            <p className="text-xs text-text-secondary">Avg Score</p>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold mb-3">🎌 JLPT Progress</h3>
        {(['N5', 'N4', 'N3'] as const).map((level) => {
          const unlocked = progress.unlockedLevels.includes(level);
          return (
            <div key={level} className="flex items-center justify-between py-2 border-b border-black/5 last:border-0">
              <div className="flex items-center gap-2">
                <span>{unlocked ? '🔓' : '🔒'}</span>
                <span className={unlocked ? 'font-medium' : 'text-text-secondary'}>{level}</span>
              </div>
              <Badge variant={unlocked ? 'success' : 'default'}>{unlocked ? 'Unlocked' : 'Locked'}</Badge>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
