'use client';

import { useState } from 'react';
import { GrammarPattern, GrammarExercise as GrammarExerciseType } from '@/lib/types';
import { updateGrammarMastery, addXp, updateStreak } from '@/lib/storage';
import { XP_VALUES } from '@/lib/xp';
import FillBlank from './FillBlank';
import SentenceBuild from './SentenceBuild';
import MultipleChoice from './MultipleChoice';
import Button from '@/components/ui/Button';

interface GrammarExerciseProps {
  pattern: GrammarPattern;
  onComplete?: () => void;
}

export default function GrammarExercise({ pattern, onComplete }: GrammarExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(false);

  const exercises = pattern.exercises;
  const current = exercises[currentIndex];

  const handleAnswer = async (correct: boolean) => {
    setAnswered(true);
    if (correct) {
      setCorrectCount((c) => c + 1);
      await addXp(XP_VALUES.grammarCorrect);
    }
    await updateStreak();
  };

  const handleNext = async () => {
    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex((i) => i + 1);
      setAnswered(false);
    } else {
      const score = Math.round((correctCount / exercises.length) * 100);
      await updateGrammarMastery(pattern.id, score);
      setFinished(true);
      onComplete?.();
    }
  };

  if (finished) {
    const score = Math.round((correctCount / exercises.length) * 100);
    return (
      <div className="text-center slide-up">
        <div className="bg-bg-card rounded-2xl p-8 shadow-sm">
          <div className="text-5xl mb-4">{score >= 80 ? '🎉' : score >= 50 ? '👍' : '💪'}</div>
          <h2 className="text-2xl font-bold mb-2">
            {score >= 80 ? 'Excellent!' : score >= 50 ? 'Good effort!' : 'Keep practicing!'}
          </h2>
          <p className="text-3xl font-bold text-primary mb-1">{score}%</p>
          <p className="text-text-secondary">{correctCount}/{exercises.length} correct</p>
          <div className="mt-4 inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
            +{correctCount * XP_VALUES.grammarCorrect} XP
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="flex-1 h-2 rounded-full bg-black/5 overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }} />
        </div>
        <span className="text-sm text-text-secondary font-medium">{currentIndex + 1}/{exercises.length}</span>
      </div>

      {current.type === 'fill-blank' && <FillBlank exercise={current} onAnswer={handleAnswer} />}
      {current.type === 'sentence-build' && <SentenceBuild exercise={current} onAnswer={handleAnswer} />}
      {current.type === 'multiple-choice' && <MultipleChoice exercise={current} onAnswer={handleAnswer} />}

      {answered && (
        <Button onClick={handleNext} className="w-full mt-4">
          {currentIndex + 1 < exercises.length ? 'Next' : 'Finish'}
        </Button>
      )}
    </div>
  );
}
