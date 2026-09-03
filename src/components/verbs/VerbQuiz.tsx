'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { ReviewQuestion, Verb, SessionResult } from '@/lib/types';
import { recordAnswer } from '@/lib/storage';
import { speakJapanese } from '@/lib/speech';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
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

/** How long a correct answer stays on screen before moving on. */
const CORRECT_ADVANCE_MS = 900;

export default function VerbQuiz({ questions, weekIndex, onComplete, newVerb }: VerbQuizProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [missed, setMissed] = useState<Verb[]>([]);
  const continueRef = useRef<HTMLButtonElement>(null);

  const current = questions[index];
  const answered = selected !== null;
  const isCorrect = answered && selected === current?.correctAnswer;

  const goToNext = useCallback(
    (wasCorrect: boolean, missedSoFar: Verb[]) => {
      if (index + 1 < questions.length) {
        setIndex((i) => i + 1);
        setSelected(null);
      } else {
        onComplete({
          totalQuestions: questions.length,
          correctAnswers: correctCount + (wasCorrect ? 1 : 0),
          missed: missedSoFar,
          newVerb,
        });
      }
    },
    [index, questions.length, correctCount, onComplete, newVerb]
  );

  const handleSelect = useCallback(
    (option: string) => {
      // Guard against double-taps while the reveal is showing.
      if (answered) return;

      const correct = option === current.correctAnswer;
      setSelected(option);

      // Cache-first write — never blocks the advance.
      recordAnswer(current.verb.id, correct, weekIndex);

      // Always speak the correct form, right or wrong. Hearing the word you
      // just missed is the whole point of the correction; gating audio behind
      // a correct answer means you never hear the ones you're getting wrong.
      speakJapanese(current.verb.japanese);

      const nextMissed = correct ? missed : [...missed, current.verb];
      if (correct) {
        setCorrectCount((c) => c + 1);
        // A correct answer needs only a moment to register before moving on.
        setTimeout(() => goToNext(true, nextMissed), CORRECT_ADVANCE_MS);
      } else {
        // A miss waits for the user. Auto-advancing here rips the correction
        // away before it can be read — the one thing SRS apps treat as a bug.
        setMissed(nextMissed);
      }
    },
    [answered, current, missed, weekIndex, goToNext]
  );

  // Move focus to Continue after a miss so the keyboard path is unbroken and
  // a screen reader lands on the way forward.
  useEffect(() => {
    if (answered && !isCorrect) continueRef.current?.focus();
  }, [answered, isCorrect]);

  // Number keys pick an option; Enter/Space continues after a miss. The
  // listener is scoped to the quiz being on screen and ignores typing in
  // inputs, per WCAG 2.1.4 on single-character shortcuts.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (!current) return;

      if (!answered) {
        const n = Number(e.key);
        if (n >= 1 && n <= current.options.length) {
          e.preventDefault();
          handleSelect(current.options[n - 1]);
        }
        return;
      }

      // After a miss, Enter/Space advances. Correct answers advance on their
      // own, so there is nothing to confirm.
      if (!isCorrect && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        goToNext(false, missed);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [current, answered, isCorrect, missed, handleSelect, goToNext]);

  // A session with no questions has nothing to show; ending it immediately is
  // better than a blank screen the user cannot leave.
  useEffect(() => {
    if (questions.length === 0) {
      onComplete({ totalQuestions: 0, correctAnswers: 0, missed: [], newVerb });
    }
  }, [questions.length, onComplete, newVerb]);

  if (!current) return null;

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
          Question {index + 1} of {questions.length}
        </span>
      </div>
      {/* Fill reflects questions finished, so it reads 0% before the first
          answer and 100% at the end. */}
      <ProgressBar
        value={((index + (answered ? 1 : 0)) / questions.length) * 100}
        className="mb-6"
      />

      <Card className="mb-5">
        <div className="text-center py-6">
          <p className="text-xs text-text-secondary mb-3">{instruction}</p>
          <h2 className="text-3xl font-bold break-words" lang={current.direction === 'jp-to-en' ? 'ja-Latn' : 'en'}>
            {prompt}
          </h2>
        </div>
      </Card>

      <div className="space-y-2.5">
        {current.options.map((option, i) => {
          const isAnswer = option === current.correctAnswer;
          const isPicked = option === selected;

          let style = 'bg-bg-card border-2 border-transparent hover:border-primary/30';
          if (answered) {
            if (isAnswer) style = 'bg-success/10 border-2 border-success';
            else if (isPicked) style = 'bg-error/10 border-2 border-error';
            else style = 'bg-bg-card border-2 border-transparent opacity-50';
          }

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={answered}
              className={`w-full text-left px-4 py-3.5 rounded-xl font-medium transition-all active:scale-[0.98] disabled:cursor-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${style}`}
            >
              <span className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 min-w-0">
                  <span
                    aria-hidden="true"
                    className="hidden sm:flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-black/5 text-xs text-text-secondary"
                  >
                    {i + 1}
                  </span>
                  <span className="truncate">{option}</span>
                </span>
                {/* An icon and a word, not colour alone — WCAG 1.4.1. */}
                {answered && isAnswer && (
                  <span className="flex items-center gap-1 shrink-0 text-success text-sm font-semibold">
                    ✓ Correct
                  </span>
                )}
                {answered && isPicked && !isAnswer && (
                  <span className="flex items-center gap-1 shrink-0 text-error text-sm font-semibold">
                    ✕ Your answer
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Announced to screen readers the moment feedback appears. */}
      <div role="alert" aria-live="assertive" className="sr-only">
        {answered
          ? isCorrect
            ? `Correct. ${current.verb.masu} means ${current.verb.english}.`
            : `Incorrect. ${current.verb.masu} means ${current.verb.english}.`
          : ''}
      </div>

      {answered && (
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

          {/* The user decides when to leave a correction behind. */}
          {!isCorrect && (
            <Button
              ref={continueRef}
              onClick={() => goToNext(false, missed)}
              size="lg"
              className="w-full mt-4"
            >
              {index + 1 < questions.length ? 'Continue →' : 'Finish'}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
