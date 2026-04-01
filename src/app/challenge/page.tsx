'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GrammarExercise as GrammarExerciseType, QuizQuestion } from '@/lib/types';
import { generateDailyVocabQuestions, getDateSeed, seededRandom } from '@/lib/quiz';
import { isDailyChallengeComplete, markDailyChallengeComplete, addXp, updateStreak, updateVocabCard } from '@/lib/storage';
import { XP_VALUES } from '@/lib/xp';
import { speakJapanese } from '@/lib/speech';
import AudioButton from '@/components/ui/AudioButton';
import FillBlank from '@/components/grammar/FillBlank';
import MultipleChoice from '@/components/grammar/MultipleChoice';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ChallengePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [vocabQuestions, setVocabQuestions] = useState<QuizQuestion[]>([]);
  const [grammarExercises, setGrammarExercises] = useState<GrammarExerciseType[]>([]);
  const [phase, setPhase] = useState<'vocab' | 'grammar' | 'done'>('vocab');
  const [vocabIndex, setVocabIndex] = useState(0);
  const [grammarIndex, setGrammarIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    async function init() {
      const done = await isDailyChallengeComplete();
      if (done) { setAlreadyDone(true); setLoading(false); return; }
      const mod = await import('@/data/vocab/n5');
      const questions = generateDailyVocabQuestions(mod.allN5Vocab);
      setVocabQuestions(questions);
      const gmod = await import('@/data/grammar/n5');
      const seed = getDateSeed();
      const rng = seededRandom(seed + 999);
      const allExercises = gmod.n5Grammar.flatMap((p) => p.exercises);
      const filtered = [...allExercises].sort(() => rng() - 0.5).filter((e) => e.type !== 'sentence-build');
      setGrammarExercises(filtered.slice(0, 2));
      setTotalQuestions(questions.length + 2);
      setLoading(false);
    }
    init();
  }, []);

  if (loading) return <div className="flex items-center justify-center min-h-screen text-text-secondary">Loading...</div>;

  if (alreadyDone) {
    return (
      <div className="px-4 pt-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => router.push('/')} className="text-xl">←</button>
          <h1 className="text-xl font-bold">Daily Challenge</h1>
        </div>
        <Card className="text-center py-8">
          <span className="text-5xl block mb-4">✅</span>
          <h2 className="text-xl font-bold mb-2">All done for today!</h2>
          <p className="text-text-secondary">Come back tomorrow for a new challenge.</p>
        </Card>
      </div>
    );
  }

  if (phase === 'vocab' && vocabIndex < vocabQuestions.length) {
    const current = vocabQuestions[vocabIndex];
    if (current.type === 'hear-pick-meaning' && selected === null) {
      setTimeout(() => speakJapanese(current.word.japanese), 200);
    }
    const handleVocabSelect = async (option: string) => {
      if (selected !== null) return;
      setSelected(option);
      const correct = option === current.correctAnswer;
      setIsCorrect(correct);
      await updateVocabCard(current.word.id, correct);
      if (correct) { await addXp(XP_VALUES.vocabCorrect); setTotalCorrect((c) => c + 1); }
      await updateStreak();
      setTimeout(() => {
        if (vocabIndex + 1 < vocabQuestions.length) setVocabIndex((i) => i + 1);
        else setPhase('grammar');
        setSelected(null); setIsCorrect(null);
      }, 1200);
    };
    const progress = ((vocabIndex + 1) / totalQuestions) * 100;
    return (
      <div className="px-4 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => router.push('/')} className="text-xl">←</button>
          <h1 className="text-xl font-bold">Daily Challenge</h1>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-2 rounded-full bg-black/5 overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-sm text-text-secondary">{vocabIndex + 1}/{totalQuestions}</span>
        </div>
        <p className="text-sm text-text-secondary mb-2 text-center">Vocab Round</p>
        <div className="bg-bg-card rounded-2xl p-6 shadow-sm mb-6 text-center">
          {current.type === 'hear-pick-meaning' ? (
            <>
              <p className="text-sm text-text-secondary mb-3">Listen and pick the meaning</p>
              <div className="flex justify-center mb-2"><AudioButton japanese={current.word.japanese} size="lg" /></div>
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
              if (option === current.correctAnswer) cls = 'bg-success/10 border-2 border-success';
              else if (option === selected && !isCorrect) cls = 'bg-error/10 border-2 border-error';
              else cls = 'bg-bg-card border-2 border-transparent opacity-50';
            }
            return (
              <button key={option} onClick={() => handleVocabSelect(option)} disabled={selected !== null}
                className={`w-full p-4 rounded-xl text-left font-medium transition-all ${cls}`}>{option}</button>
            );
          })}
        </div>
        {selected !== null && (
          <div className={`mt-4 text-center text-sm font-medium slide-up ${isCorrect ? 'text-success' : 'text-error'}`}>
            {isCorrect ? 'Correct! ✨' : `Wrong — "${current.correctAnswer}"`}
          </div>
        )}
      </div>
    );
  }

  if (phase === 'grammar' && grammarIndex < grammarExercises.length) {
    const current = grammarExercises[grammarIndex];
    const questionNum = vocabQuestions.length + grammarIndex + 1;
    const progress = (questionNum / totalQuestions) * 100;
    const handleGrammarAnswer = async (correct: boolean) => {
      if (correct) { await addXp(XP_VALUES.grammarCorrect); setTotalCorrect((c) => c + 1); }
      await updateStreak();
      setTimeout(async () => {
        if (grammarIndex + 1 < grammarExercises.length) setGrammarIndex((i) => i + 1);
        else { await markDailyChallengeComplete(); await addXp(XP_VALUES.dailyChallenge); setPhase('done'); }
      }, 1500);
    };
    return (
      <div className="px-4 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => router.push('/')} className="text-xl">←</button>
          <h1 className="text-xl font-bold">Daily Challenge</h1>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-2 rounded-full bg-black/5 overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-sm text-text-secondary">{questionNum}/{totalQuestions}</span>
        </div>
        <p className="text-sm text-text-secondary mb-2 text-center">Grammar Round</p>
        {current.type === 'fill-blank' && <FillBlank key={grammarIndex} exercise={current} onAnswer={handleGrammarAnswer} />}
        {current.type === 'multiple-choice' && <MultipleChoice key={grammarIndex} exercise={current} onAnswer={handleGrammarAnswer} />}
      </div>
    );
  }

  return (
    <div className="px-4 pt-6">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => router.push('/')} className="text-xl">←</button>
        <h1 className="text-xl font-bold">Daily Challenge</h1>
      </div>
      <Card className="text-center py-8 slide-up">
        <span className="text-5xl block mb-4">🎉</span>
        <h2 className="text-2xl font-bold mb-2">Challenge Complete!</h2>
        <p className="text-3xl font-bold text-primary mb-1">{Math.round((totalCorrect / totalQuestions) * 100)}%</p>
        <p className="text-text-secondary mb-4">{totalCorrect}/{totalQuestions} correct</p>
        <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-6">+{XP_VALUES.dailyChallenge} XP</div>
        <br />
        <Button onClick={() => router.push('/')} size="lg">Back to Home</Button>
      </Card>
    </div>
  );
}
