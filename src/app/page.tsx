'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import ProgressBar from '@/components/ui/ProgressBar';
import { getProgress, getTodayString } from '@/lib/storage';
import { verbs, getWeekVerbs } from '@/data/verbs/dictionary';
import { UserProgress } from '@/lib/types';

export default function Home() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    getProgress().then(setProgress);
  }, []);

  if (!progress) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-3xl gentle-pulse">🌸</div>
      </div>
    );
  }

  const doneToday = progress.lastSessionDate === getTodayString();
  const weekVerbs = getWeekVerbs(progress.weekIndex);
  const dayOfWeek = progress.dayOfWeek;
  // The test day is the session after the week's last verb has been taught.
  const isWeekTest = dayOfWeek > weekVerbs.length;
  const learned = Object.keys(progress.records).length;

  return (
    <div className="px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Verb Trainer</h1>
        <p className="text-text-secondary text-sm">One verb a day 🌸</p>
      </div>

      <Link href="/today">
        <Card className={`mb-4 ${!doneToday ? 'border-2 border-primary' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{doneToday ? '✅' : isWeekTest ? '🏁' : '⭐'}</span>
              <div>
                <p className="font-semibold">
                  {doneToday
                    ? 'Done for today'
                    : isWeekTest
                      ? `Week ${progress.weekIndex + 1} test`
                      : "Today's verb"}
                </p>
                <p className="text-xs text-text-secondary">
                  {doneToday
                    ? 'Back tomorrow for the next one'
                    : isWeekTest
                      ? 'All 7 verbs, both directions'
                      : `Day ${dayOfWeek} of ${weekVerbs.length} · learn 1 + review`}
                </p>
              </div>
            </div>
            <span className="text-text-secondary">→</span>
          </div>
        </Card>
      </Link>

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

      <Card className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Week {progress.weekIndex + 1}</h3>
          <Badge variant="primary">
            {learned} / {verbs.length} verbs
          </Badge>
        </div>
        <ProgressBar value={(learned / verbs.length) * 100} className="mb-4" />
        <div className="space-y-1.5">
          {weekVerbs.map((verb, i) => {
            const seen = !!progress.records[verb.id];
            const isToday = i === dayOfWeek - 1 && !isWeekTest;
            return (
              <div key={verb.id} className="flex items-center gap-2.5 text-sm">
                <span className="w-5 shrink-0 text-center">
                  {seen ? '✓' : isToday ? '→' : '·'}
                </span>
                {seen || isToday ? (
                  <>
                    {verb.code && (
                      <span className="text-xs font-bold text-primary w-6">{verb.code}</span>
                    )}
                    <span className={seen ? '' : 'font-semibold'}>{verb.masu}</span>
                    <span className="text-text-secondary text-xs truncate">{verb.english}</span>
                  </>
                ) : (
                  <span className="text-text-secondary">Day {i + 1}</span>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Link href="/dictionary">
          <Card>
            <div className="text-center py-2">
              <span className="text-3xl block mb-2">📖</span>
              <p className="font-semibold text-sm">Dictionary</p>
              <p className="text-xs text-text-secondary">{verbs.length} verbs</p>
            </div>
          </Card>
        </Link>
        <Link href="/stats">
          <Card>
            <div className="text-center py-2">
              <span className="text-3xl block mb-2">📊</span>
              <p className="font-semibold text-sm">Stats</p>
              <p className="text-xs text-text-secondary">{learned} learned</p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
