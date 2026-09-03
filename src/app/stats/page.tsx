'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import ProgressBar from '@/components/ui/ProgressBar';
import { getProgress } from '@/lib/storage';
import { verbs, getVerbById, WEEK_LENGTH } from '@/data/verbs/dictionary';
import { UserProgress } from '@/lib/types';

export default function StatsPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    getProgress().then(setProgress);
  }, []);

  if (!progress) {
    return (
      <div className="flex items-center justify-center min-h-screen text-text-secondary">
        Loading…
      </div>
    );
  }

  const records = Object.values(progress.records);
  const learned = records.length;
  const totalCorrect = records.reduce((s, r) => s + r.correctCount, 0);
  const totalWrong = records.reduce((s, r) => s + r.incorrectCount, 0);
  const accuracy =
    totalCorrect + totalWrong > 0
      ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100)
      : 0;

  // Solid = 3+ correct in a row. Duds are the ones to replace the hook for.
  const solid = records.filter((r) => r.streak >= 3).length;
  const shaky = records.filter((r) => r.streak > 0 && r.streak < 3).length;
  const duds = records
    .filter((r) => r.incorrectCount > 0 && r.streak === 0)
    .sort((a, b) => b.incorrectCount - a.incorrectCount)
    .slice(0, 8);

  const daysStudied = progress.dayIndex - 1;

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-bold mb-1">Stats</h1>
      <p className="text-text-secondary text-sm mb-6">How the verbs are holding up</p>

      <Card className="mb-4">
        <div className="flex items-center justify-around text-center">
          <div>
            <span className="text-3xl block">🔥</span>
            <p className="text-2xl font-bold mt-1">{progress.currentStreak}</p>
            <p className="text-xs text-text-secondary">Current</p>
          </div>
          <div className="w-px h-12 bg-black/10" />
          <div>
            <span className="text-3xl block">🏆</span>
            <p className="text-2xl font-bold mt-1">{progress.longestStreak}</p>
            <p className="text-xs text-text-secondary">Best</p>
          </div>
          <div className="w-px h-12 bg-black/10" />
          <div>
            <span className="text-3xl block">📅</span>
            <p className="text-2xl font-bold mt-1">{daysStudied}</p>
            <p className="text-xs text-text-secondary">Days</p>
          </div>
        </div>
      </Card>

      <Card className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Progress</h3>
          <Badge variant="primary">Week {progress.weekIndex + 1}</Badge>
        </div>
        <ProgressBar value={(learned / verbs.length) * 100} className="mb-2" />
        <p className="text-xs text-text-secondary">
          {learned} of {verbs.length} verbs learned ·{' '}
          {Math.ceil((verbs.length - learned) / WEEK_LENGTH)} weeks to go
        </p>
      </Card>

      <Card className="mb-4">
        <h3 className="font-semibold mb-3">Recall</h3>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-success/5 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-success">{accuracy}%</p>
            <p className="text-xs text-text-secondary">Accuracy</p>
          </div>
          <div className="bg-primary/5 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-primary">{totalCorrect + totalWrong}</p>
            <p className="text-xs text-text-secondary">Answers</p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">Solid (3+ in a row)</span>
            <span className="font-medium text-success">{solid}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Still shaky</span>
            <span className="font-medium text-warning">{shaky}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Needs work</span>
            <span className="font-medium text-error">{duds.length}</span>
          </div>
        </div>
      </Card>

      {duds.length > 0 && (
        <Card>
          <h3 className="font-semibold mb-1">Duds</h3>
          <p className="text-xs text-text-secondary mb-3">
            Missed most often — per the method, replace these hooks rather than
            drilling a bad one.
          </p>
          <div className="space-y-2">
            {duds.map((record) => {
              const verb = getVerbById(record.verbId);
              if (!verb) return null;
              return (
                <div key={record.verbId} className="flex items-center gap-2.5">
                  <span className="px-2 py-1 rounded-md bg-error/10 text-error text-xs font-bold shrink-0">
                    {verb.code ?? '—'}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{verb.masu}</p>
                    <p className="text-xs text-text-secondary truncate">{verb.english}</p>
                  </div>
                  <span className="text-xs text-error shrink-0">
                    ✕ {record.incorrectCount}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      )}
      <Link href="/settings">
        <p className="text-center text-xs text-text-secondary py-6 underline">
          Backup &amp; settings
        </p>
      </Link>
    </div>
  );
}
