'use client';

import Link from 'next/link';
import { SessionResult as Result } from '@/lib/types';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AudioButton from '@/components/ui/AudioButton';

interface SessionResultProps {
  result: Result;
  streak: number;
  isWeekTest: boolean;
}

/**
 * End of a session. The verbs that were missed are the only thing worth
 * dwelling on, so they get the space — the score is a single line.
 */
export default function SessionResult({ result, streak, isWeekTest }: SessionResultProps) {
  const { totalQuestions, correctAnswers, missed } = result;
  const perfect = missed.length === 0;
  const pct = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  return (
    <div className="slide-up">
      <div className="text-center py-8">
        <span className="text-5xl block mb-3">{perfect ? '🎉' : pct >= 70 ? '👍' : '💪'}</span>
        <h1 className="text-2xl font-bold mb-1">
          {isWeekTest ? 'Week complete' : 'Session complete'}
        </h1>
        <p className="text-text-secondary text-sm">
          {correctAnswers} of {totalQuestions} correct
          {streak > 0 && ` · 🔥 ${streak}`}
        </p>
      </div>

      {missed.length > 0 && (
        <Card className="mb-4">
          <p className="text-sm font-semibold mb-1">Coming back tomorrow</p>
          <p className="text-xs text-text-secondary mb-3">
            {missed.length === 1 ? 'This one slipped' : `These ${missed.length} slipped`}
          </p>
          <ul className="space-y-2.5">
            {missed.map((verb) => (
              <li key={verb.id} className="flex items-center gap-3">
                {verb.code && (
                  <span className="px-2 py-1 rounded-md bg-error/10 text-error text-xs font-bold shrink-0">
                    {verb.code}
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{verb.masu}</p>
                  <p className="text-xs text-text-secondary truncate">
                    {verb.english}
                    {verb.connection ? ` — ${verb.connection}` : ''}
                  </p>
                </div>
                <AudioButton japanese={verb.japanese} size="sm" />
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Link href="/">
        <Button size="lg" className="w-full">
          Done
        </Button>
      </Link>
    </div>
  );
}
