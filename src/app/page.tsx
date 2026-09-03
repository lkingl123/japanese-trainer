'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import { getProgress, getTodayString } from '@/lib/storage';
import { getWeekVerbs } from '@/data/verbs/dictionary';
import { UserProgress } from '@/lib/types';

/**
 * Home answers one question: what am I doing today?
 *
 * Progress totals live on Stats and navigation lives in the bottom bar, so
 * neither is repeated here.
 */
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
  const { dayOfWeek, currentStreak } = progress;
  const isWeekTest = dayOfWeek > weekVerbs.length;

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-bold mb-5">Verb Trainer</h1>

      <Link href="/today" className="block mb-4">
        <Card className={!doneToday ? 'border-2 border-primary' : ''}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-3xl shrink-0">
                {doneToday ? '✅' : isWeekTest ? '🏁' : '⭐'}
              </span>
              <div className="min-w-0">
                <p className="font-semibold">
                  {doneToday
                    ? 'Done for today'
                    : isWeekTest
                      ? `Week ${progress.weekIndex + 1} test`
                      : 'Start today’s verb'}
                </p>
                <p className="text-xs text-text-secondary">
                  {doneToday
                    ? 'Next verb tomorrow'
                    : isWeekTest
                      ? `All ${weekVerbs.length} verbs from this week`
                      : `Day ${dayOfWeek} of ${weekVerbs.length}`}
                  {currentStreak > 0 && ` · 🔥 ${currentStreak}`}
                </p>
              </div>
            </div>
            <span className="text-text-secondary shrink-0">→</span>
          </div>
        </Card>
      </Link>

      <Card>
        <h2 className="font-semibold mb-3">Week {progress.weekIndex + 1}</h2>
        <ol className="space-y-1.5">
          {weekVerbs.map((verb, i) => {
            const isToday = i === dayOfWeek - 1 && !isWeekTest;
            // Position in the week decides what has been taught — a record
            // only appears once a verb has been *tested*, which for the newest
            // verb does not happen until the next day. Today's verb counts as
            // taught only once today's session is finished.
            const seen = i < dayOfWeek - 1 || isWeekTest || (isToday && doneToday);

            return (
              <li key={verb.id} className="flex items-center gap-2.5 text-sm">
                <span
                  className={`w-4 shrink-0 text-center ${
                    seen ? 'text-success' : 'text-text-secondary'
                  }`}
                >
                  {seen ? '✓' : isToday ? '→' : '·'}
                </span>

                {seen ? (
                  <>
                    {verb.code && (
                      <span className="w-6 shrink-0 text-xs font-bold text-primary">
                        {verb.code}
                      </span>
                    )}
                    <span>{verb.masu}</span>
                    <span className="text-text-secondary text-xs truncate">
                      {verb.english}
                    </span>
                  </>
                ) : (
                  // Verbs not yet taught stay hidden, today's included — the
                  // reveal belongs to the session, not this list.
                  <span className={isToday ? 'font-semibold' : 'text-text-secondary'}>
                    Day {i + 1}
                    {isToday && ' · today'}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Card>
    </div>
  );
}
