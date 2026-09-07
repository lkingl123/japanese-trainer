'use client';

import { Verb } from '@/lib/types';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AudioButton from '@/components/ui/AudioButton';
import HookNote from './HookNote';

interface VerbLearnProps {
  verb: Verb;
  onContinue: () => void;
}

/**
 * Today's new verb, shown before any testing. This is the only screen where
 * the mnemonic leads — everywhere else it stays hidden until after an answer,
 * because the hook is a reminder, not the answer.
 */
export default function VerbLearn({ verb, onContinue }: VerbLearnProps) {
  return (
    <div className="slide-up">
      <Card className="mb-6">
        <div className="text-center py-4">
          <div className="inline-block px-5 py-2 rounded-xl bg-primary text-white text-3xl font-bold tracking-widest mb-4">
            {verb.sound}
          </div>

          <div className="flex items-center justify-center gap-3 mb-1">
            <h2 className="text-3xl font-bold">{verb.masu}</h2>
            <AudioButton japanese={verb.japanese} />
          </div>

          <p className="text-lg text-text-secondary">{verb.english}</p>

          <HookNote verb={verb} className="mt-4" />
        </div>
      </Card>

      <Button onClick={onContinue} size="lg" className="w-full">
        Start review →
      </Button>
    </div>
  );
}
