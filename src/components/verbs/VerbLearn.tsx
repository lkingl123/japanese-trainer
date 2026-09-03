'use client';

import { Verb } from '@/lib/types';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AudioButton from '@/components/ui/AudioButton';

interface VerbLearnProps {
  verb: Verb;
  onContinue: () => void;
}

/**
 * Today's new verb, taught before any testing. This is the only screen where
 * the mnemonic code is shown up front — everywhere else it stays hidden until
 * after an answer, because the hook is scaffolding, not the answer.
 */
export default function VerbLearn({ verb, onContinue }: VerbLearnProps) {
  return (
    <div className="slide-up">
      <p className="text-sm text-text-secondary mb-3">Today&rsquo;s verb</p>

      <Card className="mb-4">
        <div className="text-center py-4">
          {verb.code ? (
            <div className="inline-block px-5 py-2 rounded-xl bg-primary text-white text-4xl font-bold tracking-wider mb-4">
              {verb.code}
            </div>
          ) : (
            <div className="inline-block px-5 py-2 rounded-xl bg-black/5 text-text-secondary text-sm mb-4">
              no hook yet
            </div>
          )}

          <div className="flex items-center justify-center gap-3 mb-1">
            <h2 className="text-3xl font-bold">{verb.masu}</h2>
            <AudioButton japanese={verb.japanese} />
          </div>

          <p className="text-lg text-text-secondary mb-4">{verb.english}</p>

          {verb.connection && (
            <div className="bg-primary/5 rounded-xl px-4 py-3 text-sm">
              <span className="font-semibold text-primary">{verb.code}</span>
              <span className="text-text-secondary"> — {verb.connection}</span>
            </div>
          )}
        </div>
      </Card>

      <Card className="mb-6">
        <p className="text-xs text-text-secondary leading-relaxed">
          Say it out loud a few times, then start the review. You&rsquo;ll be
          tested on this verb tomorrow and again at the end of the week — the
          code is only there until it sticks.
        </p>
      </Card>

      <Button onClick={onContinue} size="lg" className="w-full">
        Start review →
      </Button>
    </div>
  );
}
