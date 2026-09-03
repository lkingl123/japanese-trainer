'use client';

import { useState, useCallback, useEffect } from 'react';
import { VocabWord, QuizQuestion, QuizResult } from '@/lib/types';
import { generateQuizQuestions } from '@/lib/quiz';
import { speakJapanese } from '@/lib/speech';
import { updateVocabCard, addXp, updateStreak } from '@/lib/storage';
import { XP_VALUES } from '@/lib/xp';
import AudioButton from '@/components/ui/AudioButton';
import ResultScreen from './ResultScreen';

interface VocabQuizProps {
  words: VocabWord[];
  onComplete?: (result: QuizResult) => void;
}

export default function VocabQuiz({ words, onComplete }: VocabQuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    generateQuizQuestions(words, 10)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongWords, setWrongWords] = useState<VocabWord[]>([]);
  const [finished, setFinished] = useState(false);

  const current = questions[currentIndex];

  // Auto-play the audio for listening questions when a new one appears. Keyed
  // on currentIndex so it fires once per question, not on every re-render.
  useEffect(() => {
    if (current?.type === 'hear-pick-meaning') {
      const t = setTimeout(() => speakJapanese(current.word.japanese), 200);
      return () => clearTimeout(t);
    }
  }, [currentIndex, current]);

  const handleSelect = useCallback(
    (option: string) => {
      if (selected !== null) return;
      const correct = option === current.correctAnswer;
      setSelected(option);
      setIsCorrect(correct);

      // Persist progress in the background. These are network round-trips and
      // must NOT gate the question advance — awaiting them here meant the
      // setTimeout below only started after Supabase responded, and under a
      // slow/variable connection the advance + state-reset could interleave
      // with the next render, leaving the next question stuck disabled and
      // pre-marked wrong (the "answer carries over" bug).
      void (async () => {
        try {
          await updateVocabCard(current.word.id, correct);
          if (correct) await addXp(XP_VALUES.vocabCorrect);
          await updateStreak();
        } catch (e) {
          console.error('Failed to persist quiz progress:', e);
        }
      })();

      if (correct) {
        setCorrectCount((c) => c + 1);
      } else {
        setWrongWords((w) => [...w, current.word]);
      }

      setTimeout(() => {
        if (currentIndex + 1 < questions.length) {
          // Reset answer state and advance together so React batches them into
          // a single commit — the next question always mounts clean.
          setCurrentIndex((i) => i + 1);
          setSelected(null);
          setIsCorrect(null);
        } else {
          const totalCorrect = correctCount + (correct ? 1 : 0);
          const isPerfect = totalCorrect === questions.length;
          if (isPerfect) void addXp(XP_VALUES.perfectQuiz).catch(() => {});
          const result: QuizResult = {
            totalQuestions: questions.length,
            correctAnswers: totalCorrect,
            xpEarned: totalCorrect * XP_VALUES.vocabCorrect + (isPerfect ? XP_VALUES.perfectQuiz : 0),
            isPerfect,
            wrongWords: correct ? wrongWords : [...wrongWords, current.word],
          };
          setFinished(true);
          onComplete?.(result);
        }
      }, 1200);
    },
    [selected, current, currentIndex, questions, correctCount, wrongWords, onComplete]
  );

  const restart = () => {
    setQuestions(generateQuizQuestions(words, 10));
    setCurrentIndex(0);
    setSelected(null);
    setIsCorrect(null);
    setCorrectCount(0);
    setWrongWords([]);
    setFinished(false);
  };

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">Need at least 4 words to start a quiz.</p>
      </div>
    );
  }

  if (finished) {
    const result: QuizResult = {
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      xpEarned: correctCount * XP_VALUES.vocabCorrect + (correctCount === questions.length ? XP_VALUES.perfectQuiz : 0),
      isPerfect: correctCount === questions.length,
      wrongWords,
    };
    return <ResultScreen result={result} onRestart={restart} />;
  }

  return (
    <div className="slide-up">
      <div className="flex items-center gap-2 mb-6">
        <div className="flex-1 h-2 rounded-full bg-black/5 overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
        </div>
        <span className="text-sm text-text-secondary font-medium">{currentIndex + 1}/{questions.length}</span>
      </div>

      <div className="bg-bg-card rounded-2xl p-6 shadow-sm mb-6 text-center">
        {current.type === 'hear-pick-meaning' ? (
          <>
            <p className="text-sm text-text-secondary mb-3">Listen and pick the meaning</p>
            <div className="flex justify-center mb-2">
              <AudioButton japanese={current.word.japanese} size="lg" />
            </div>
            <p className="text-xl font-semibold mt-2">{current.word.romaji}</p>
          </>
        ) : (
          <>
            <p className="text-sm text-text-secondary mb-3">Pick the correct romaji</p>
            <p className="text-2xl font-semibold">{current.word.english}</p>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3">
        {current.options.map((option) => {
          let cls = 'bg-bg-card border-2 border-transparent hover:border-primary/30';
          if (selected !== null) {
            if (option === current.correctAnswer) cls = 'bg-success/10 border-2 border-success text-success';
            else if (option === selected && !isCorrect) cls = 'bg-error/10 border-2 border-error text-error';
            else cls = 'bg-bg-card border-2 border-transparent opacity-50';
          }
          return (
            <button key={option} onClick={() => handleSelect(option)} disabled={selected !== null}
              className={`w-full p-4 rounded-xl text-left font-medium transition-all ${cls}`}>
              {option}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className={`mt-4 text-center text-sm font-medium slide-up ${isCorrect ? 'text-success' : 'text-error'}`}>
          {isCorrect ? 'Correct! ✨' : `Wrong — the answer is "${current.correctAnswer}"`}
        </div>
      )}
    </div>
  );
}
