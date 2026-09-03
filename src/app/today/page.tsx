'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserProgress, DailySession, SessionResult as Result } from '@/lib/types';
import { getProgress, completeSession, getTodayString } from '@/lib/storage';
import { buildDailySession, advanceProgress } from '@/lib/session';
import VerbLearn from '@/components/verbs/VerbLearn';
import VerbQuiz from '@/components/verbs/VerbQuiz';
import SessionResult from '@/components/verbs/SessionResult';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

type Stage = 'loading' | 'learn' | 'quiz' | 'done' | 'already-done';

export default function TodayPage() {
  const [stage, setStage] = useState<Stage>('loading');
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [session, setSession] = useState<DailySession | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    getProgress().then((p) => {
      setProgress(p);
      setStreak(p.currentStreak);

      if (p.lastSessionDate === getTodayString()) {
        setStage('already-done');
        return;
      }

      const s = buildDailySession(p, getTodayString());
      setSession(s);
      // The week-test day has no new verb, so it goes straight to the quiz.
      setStage(s.newVerb ? 'learn' : 'quiz');
    });
  }, []);

  async function handleQuizComplete(r: Result) {
    setResult(r);
    setStage('done');
    if (!progress) return;
    const updated = await completeSession(advanceProgress(progress));
    setStreak(updated.currentStreak);
  }

  if (stage === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-3xl gentle-pulse">🌸</div>
      </div>
    );
  }

  if (stage === 'already-done') {
    return (
      <div className="px-4 pt-6">
        <div className="text-center py-10">
          <span className="text-5xl block mb-4">✅</span>
          <h1 className="text-2xl font-bold mb-2">Today&rsquo;s done</h1>
          <p className="text-text-secondary text-sm mb-6">
            Come back tomorrow for the next verb — and a check on this one.
          </p>
        </div>
        <Card className="mb-4">
          <div className="text-center">
            <p className="text-3xl font-bold">🔥 {streak}</p>
            <p className="text-xs text-text-secondary mt-1">day streak</p>
          </div>
        </Card>
        <Link href="/">
          <Button size="lg" className="w-full">Back home</Button>
        </Link>
      </div>
    );
  }

  if (!session || !progress) return null;

  return (
    <div className="px-4 pt-6">
      {stage === 'learn' && session.newVerb && (
        <>
          <div className="mb-4">
            <p className="text-xs text-text-secondary">
              Day {session.dayOfWeek} of 7 · Week {progress.weekIndex + 1}
            </p>
          </div>
          <VerbLearn verb={session.newVerb} onContinue={() => setStage('quiz')} />
        </>
      )}

      {stage === 'quiz' && (
        <>
          {session.isWeekTest && (
            <div className="mb-4 text-center">
              <h1 className="text-xl font-bold">Week {progress.weekIndex + 1} test</h1>
              <p className="text-xs text-text-secondary">All 7 verbs, both directions</p>
            </div>
          )}
          <VerbQuiz
            questions={session.questions}
            weekIndex={progress.weekIndex}
            newVerb={session.newVerb}
            onComplete={handleQuizComplete}
          />
        </>
      )}

      {stage === 'done' && result && (
        <SessionResult result={result} streak={streak} isWeekTest={session.isWeekTest} />
      )}
    </div>
  );
}
