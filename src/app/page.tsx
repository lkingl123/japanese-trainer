'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';
import Badge from '@/components/ui/Badge';
import { getProgress, isDailyChallengeComplete, updateStreak } from '@/lib/storage';
import { calculateLevel, getLevelTitle } from '@/lib/xp';
import { UserProgress } from '@/lib/types';

export default function Home() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [dailyDone, setDailyDone] = useState(false);

  useEffect(() => {
    async function load() {
      await updateStreak();
      const [p, done] = await Promise.all([getProgress(), isDailyChallengeComplete()]);
      setProgress(p);
      setDailyDone(done);
    }
    load();
  }, []);

  if (!progress) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">🌸</div>
      </div>
    );
  }

  const levelInfo = calculateLevel(progress.xp);

  return (
    <div className="px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Nihongo Trainer</h1>
        <p className="text-text-secondary text-sm">Your path to Japanese fluency 🌸</p>
      </div>

      <Card className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-sm text-text-secondary">Level {levelInfo.level}</p>
            <p className="text-lg font-bold">{getLevelTitle(levelInfo.level)}</p>
          </div>
          <Badge variant="primary">{levelInfo.jlptLevel}</Badge>
        </div>
        <ProgressBar value={(levelInfo.xpInLevel / levelInfo.xpForNext) * 100} showLabel />
        <p className="text-xs text-text-secondary mt-1">
          {levelInfo.xpInLevel}/{levelInfo.xpForNext} XP to next level
        </p>
      </Card>

      <Card className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`text-3xl ${progress.currentStreak > 0 ? 'gentle-pulse' : ''}`}>🔥</span>
            <div>
              <p className="text-2xl font-bold">{progress.currentStreak}</p>
              <p className="text-xs text-text-secondary">day streak</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-text-secondary">{progress.longestStreak}</p>
            <p className="text-xs text-text-secondary">best</p>
          </div>
        </div>
      </Card>

      <Link href="/challenge">
        <Card className={`mb-4 ${!dailyDone ? 'border-2 border-primary' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{dailyDone ? '✅' : '⭐'}</span>
              <div>
                <p className="font-semibold">Daily Challenge</p>
                <p className="text-xs text-text-secondary">
                  {dailyDone ? 'Completed for today!' : '5 vocab + 2 grammar — earn 50 XP'}
                </p>
              </div>
            </div>
            <span className="text-text-secondary">→</span>
          </div>
        </Card>
      </Link>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <Link href="/vocab">
          <Card>
            <div className="text-center py-2">
              <span className="text-3xl block mb-2">📚</span>
              <p className="font-semibold text-sm">Vocabulary</p>
              <p className="text-xs text-text-secondary">
                {Object.keys(progress.vocabMastery).length} words studied
              </p>
            </div>
          </Card>
        </Link>
        <Link href="/grammar">
          <Card>
            <div className="text-center py-2">
              <span className="text-3xl block mb-2">✏️</span>
              <p className="font-semibold text-sm">Grammar</p>
              <p className="text-xs text-text-secondary">
                {Object.keys(progress.grammarMastery).length} patterns learned
              </p>
            </div>
          </Card>
        </Link>
      </div>

      <Card>
        <h3 className="font-semibold mb-3">JLPT Progress</h3>
        <div className="space-y-2">
          {(['N5', 'N4', 'N3'] as const).map((level) => {
            const unlocked = progress.unlockedLevels.includes(level);
            return (
              <div key={level} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <span>{unlocked ? '🔓' : '🔒'}</span>
                  <span className={unlocked ? 'font-medium' : 'text-text-secondary'}>{level}</span>
                </div>
                <Badge variant={unlocked ? 'success' : 'default'}>
                  {unlocked ? 'Unlocked' : 'Locked'}
                </Badge>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
