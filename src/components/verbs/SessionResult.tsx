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

export default function SessionResult({ result, streak, isWeekTest }: SessionResultProps) {
  const { totalQuestions, correctAnswers, missed, newVerb } = result;
  const pct = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  const perfect = missed.length === 0;

  return (
    <div className="slide-up">
      <div className="text-center py-6">
        <span className="text-5xl block mb-3">{perfect ? '🎉' : pct >= 70 ? '👍' : '💪'}</span>
        <h1 className="text-2xl font-bold mb-1">
          {isWeekTest ? 'Week complete' : 'Session complete'}
        </h1>
        <p className="text-text-secondary text-sm">
          {perfect ? 'Perfect — everything stuck.' : `${correctAnswers} of ${totalQuestions} correct`}
        </p>
      </div>

      <Card className="mb-4">
        <div className="flex items-center justify-around text-center">
          <div>
            <p className="text-3xl font-bold text-primary">{pct}%</p>
            <p className="text-xs text-text-secondary">Recall</p>
          </div>
          <div className="w-px h-12 bg-black/10" />
          <div>
            <p className="text-3xl font-bold">🔥 {streak}</p>
            <p className="text-xs text-text-secondary">Day streak</p>
          </div>
        </div>
      </Card>

      {newVerb && (
        <Card className="mb-4">
          <p className="text-xs text-text-secondary mb-2">Learned today</p>
          <div className="flex items-center gap-3">
            {newVerb.code && (
              <span className="px-3 py-1.5 rounded-lg bg-primary text-white font-bold">
                {newVerb.code}
              </span>
            )}
            <div className="flex-1">
              <p className="font-bold">{newVerb.masu}</p>
              <p className="text-sm text-text-secondary">{newVerb.english}</p>
            </div>
            <AudioButton japanese={newVerb.japanese} size="sm" />
          </div>
        </Card>
      )}

      {missed.length > 0 && (
        <Card className="mb-4">
          <p className="text-sm font-semibold mb-3">
            Review these — they&rsquo;ll come back tomorrow
          </p>
          <div className="space-y-2.5">
            {missed.map((verb) => (
              <div key={verb.id} className="flex items-center gap-3">
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
              </div>
            ))}
          </div>
        </Card>
      )}

      <Link href="/">
        <Button size="lg" className="w-full">
          Done for today
        </Button>
      </Link>
    </div>
  );
}
