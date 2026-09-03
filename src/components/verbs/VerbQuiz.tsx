'use client';

import { useState, useCallback } from 'react';
import { ReviewQuestion, Verb, SessionResult } from '@/lib/types';
import { recordAnswer } from '@/lib/storage';
import { speakJapanese } from '@/lib/speech';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';
import Badge from '@/components/ui/Badge';

interface VerbQuizProps {
  questions: ReviewQuestion[];
  weekIndex: number;
  onComplete: (result: SessionResult) => void;
  newVerb: Verb | null;
}

const SOURCE_LABEL: Record<ReviewQuestion['source'], string> = {
  new: 'New today',
  'this-week': 'This week',
  'past-week': 'Refresher',
  'week-test': 'Week test',
};

export default function VerbQuiz({ questions, weekIndex, onComplete, newVerb }: VerbQuizProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [missed, setMissed] = useState<Verb[]>([]);

  const current = questions[index];

  const handleSelect = useCallback(
    (option: string) => {
      // Guard against double-taps while the reveal is showing.
      if (selected !== null) return;

      const correct = option === current.correctAnswer;
      setSelected(option);

      // Cache-first write — never blocks the advance. Awaiting a network call
      // here is what used to strand the next question in a disabled state.
      recordAnswer(current.verb.id, correct, weekIndex);

      if (correct) {
        setCorrectCount((c) => c + 1);
        speakJapanese(current.verb.japanese);
      }

      const nextMissed = correct ? missed : [...missed, current.verb];
      if (!correct) setMissed(nextMissed);

      setTimeout(() => {
        if (index + 1 < questions.length) {
          setIndex((i) => i + 1);
          setSelected(null);
        } else {
          onComplete({
            totalQuestions: questions.length,
            correctAnswers: correctCount + (correct ? 1 : 0),
            missed: nextMissed,
            newVerb,
          });
        }
      }, correct ? 900 : 2200);
    },
    [selected, current, index, questions.length, correctCount, missed, weekIndex, onComplete, newVerb]
  );

  if (!current) return null;

  const isCorrect = selected === current.correctAnswer;
  const prompt = current.direction === 'en-to-jp' ? current.verb.english : current.verb.masu;
  const instruction =
    current.direction === 'en-to-jp' ? 'Which verb means this?' : 'What does this mean?';

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <Badge variant={current.source === 'new' ? 'primary' : 'default'}>
          {SOURCE_LABEL[current.source]}
        </Badge>
        <span className="text-xs text-text-secondary">
          {index + 1} / {questions.length}
        </span>
      </div>
      <ProgressBar value={(index / questions.length) * 100} className="mb-6" />

      <Card className="mb-5">
        <div className="text-center py-6">
          <p className="text-xs text-text-secondary mb-3">{instruction}</p>
          <h2 className="text-3xl font-bold break-words">{prompt}</h2>
        </div>
      </Card>

      <div className="space-y-2.5">
        {current.options.map((option) => {
          const isAnswer = option === current.correctAnswer;
          const isPicked = option === selected;

          let style = 'bg-bg-card border-2 border-transparent';
          if (selected !== null) {
            if (isAnswer) style = 'bg-success/10 border-2 border-success';
            else if (isPicked) style = 'bg-error/10 border-2 border-error';
            else style = 'bg-bg-card border-2 border-transparent opacity-50';
          }

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={selected !== null}
              className={`w-full text-left px-4 py-3.5 rounded-xl font-medium transition-all active:scale-[0.98] disabled:cursor-default ${style}`}
            >
              <span className="flex items-center justify-between">
                <span>{option}</span>
                {selected !== null && isAnswer && <span>✓</span>}
                {selected !== null && isPicked && !isAnswer && <span>✕</span>}
              </span>
            </button>
          );
        })}
      </div>

      {/* The mnemonic is revealed only after answering — strongest when it is
          the reminder, not the prompt. Shown on a miss especially. */}
      {selected !== null && (
        <div className="mt-5 slide-up">
          {!isCorrect && (
            <Card className="mb-2">
              <p className="text-sm">
                <span className="font-bold">{current.verb.masu}</span>
                <span className="text-text-secondary"> — {current.verb.english}</span>
              </p>
            </Card>
          )}
          {current.verb.code && current.verb.connection && (
            <div className="bg-primary/5 rounded-xl px-4 py-3 text-sm text-center">
              <span className="font-bold text-primary">{current.verb.code}</span>
              <span className="text-text-secondary"> — {current.verb.connection}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
