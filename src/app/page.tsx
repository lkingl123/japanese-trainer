'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import { getProgress, getTodayString } from '@/lib/storage';
import { getWeekVerbs } from '@/data/verbs/dictionary';
import { isCourseComplete } from '@/lib/session';
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
  // Every verb taught: the course stays in review from here on.
  const finished = isCourseComplete(progress);

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-bold mb-5">Verb Trainer</h1>

      <Link href="/today" className="block mb-4">
        <Card className={!doneToday ? 'border-2 border-primary' : ''}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-3xl shrink-0">
                {doneToday ? '✅' : finished ? '🎓' : isWeekTest ? '🏁' : '⭐'}
              </span>
              <div className="min-w-0">
                <p className="font-semibold">
                  {doneToday
                    ? 'Done for today'
                    : finished
                      ? 'Daily review'
                      : isWeekTest
                        ? `Week ${progress.weekIndex + 1} test`
                        : 'Start today’s verb'}
                </p>
                <p className="text-xs text-text-secondary">
                  {doneToday
                    ? finished
                      ? 'Review again tomorrow'
                      : 'Next verb tomorrow'
                    : finished
                      ? 'Every verb learned — keeping them sharp'
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
        <h2 className="font-semibold mb-3">
          {finished ? 'Final week' : `Week ${progress.weekIndex + 1}`}
        </h2>
        <ol className="space-y-1.5">
          {weekVerbs.map((verb, i) => {
            // dayOfWeek points at the NEXT session to run, so once today's is
            // done it already names tomorrow. Everything before that position
            // has been taught; the verb sitting on it has not been reached yet
            // unless the week has run out of verbs entirely.
            //
            // Records cannot answer this: a verb gets one only when it is first
            // *tested*, which for the newest verb is the following day.
            const taughtCount = isWeekTest ? weekVerbs.length : dayOfWeek - 1;
            const seen = i < taughtCount;
            // Nothing is "today" once today's session is finished.
            const isToday = !doneToday && !isWeekTest && i === taughtCount;

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
