'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import ProgressBar from '@/components/ui/ProgressBar';
import AudioButton from '@/components/ui/AudioButton';
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
  const answers = totalCorrect + totalWrong;
  const accuracy = answers > 0 ? Math.round((totalCorrect / answers) * 100) : 0;

  // Solid = 3+ correct in a row. Anything with a broken streak and a miss on
  // record is what the method says to replace the hook for.
  const solid = records.filter((r) => r.streak >= 3).length;
  const shaky = records.filter((r) => r.streak > 0 && r.streak < 3).length;
  const needsWork = records
    .filter((r) => r.incorrectCount > 0 && r.streak === 0)
    .sort((a, b) => b.incorrectCount - a.incorrectCount);

  const weeksLeft = Math.ceil((verbs.length - learned) / WEEK_LENGTH);

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-bold mb-5">Stats</h1>

      <Card className="mb-4">
        <div className="flex items-center justify-around text-center">
          <div>
            <p className="text-2xl font-bold">🔥 {progress.currentStreak}</p>
            <p className="text-xs text-text-secondary mt-0.5">Streak</p>
          </div>
          <div className="w-px h-10 bg-black/10" />
          <div>
            <p className="text-2xl font-bold">{progress.longestStreak}</p>
            <p className="text-xs text-text-secondary mt-0.5">Best</p>
          </div>
          <div className="w-px h-10 bg-black/10" />
          <div>
            <p className="text-2xl font-bold">{accuracy}%</p>
            <p className="text-xs text-text-secondary mt-0.5">Accuracy</p>
          </div>
        </div>
      </Card>

      <Card className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold">
            {learned} of {verbs.length} verbs
          </h2>
          <Badge variant="primary">Week {progress.weekIndex + 1}</Badge>
        </div>
        <ProgressBar value={(learned / verbs.length) * 100} className="mb-2" />
        <p className="text-xs text-text-secondary">
          {learned === verbs.length
            ? 'Every verb learned.'
            : `${weeksLeft} ${weeksLeft === 1 ? 'week' : 'weeks'} to go · ${answers} answers so far`}
        </p>
      </Card>

      {learned === 0 ? (
        <Card>
          <p className="text-sm text-text-secondary text-center py-2">
            Recall stats appear once you’ve done a session.
          </p>
        </Card>
      ) : (
        <Card>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <span className="text-success font-medium">{solid} solid</span>
            <span className="text-warning font-medium">{shaky} shaky</span>
            <span className="text-error font-medium">{needsWork.length} need work</span>
          </div>

          {needsWork.length === 0 ? (
            <p className="text-sm text-text-secondary">
              Nothing is slipping right now.
            </p>
          ) : (
            <>
              <p className="text-xs text-text-secondary mb-3">
                Missed most often — replace the hook rather than drilling a bad one.
              </p>
              <ul className="space-y-2">
                {needsWork.slice(0, 8).map((record) => {
                  const verb = getVerbById(record.verbId);
                  if (!verb) return null;
                  return (
                    <li key={record.verbId} className="flex items-center gap-2.5">
                      {verb.code && (
                        <span className="px-2 py-1 rounded-md bg-error/10 text-error text-xs font-bold shrink-0">
                          {verb.code}
                        </span>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{verb.masu}</p>
                        <p className="text-xs text-text-secondary truncate">{verb.english}</p>
                      </div>
                      <span className="text-xs text-error shrink-0">
                        ✕ {record.incorrectCount}
                      </span>
                      <AudioButton japanese={verb.japanese} size="sm" />
                    </li>
                  );
                })}
              </ul>
            </>
          )}
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
