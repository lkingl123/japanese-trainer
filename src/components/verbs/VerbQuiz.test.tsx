import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VerbQuiz from './VerbQuiz';
import { ReviewQuestion, Verb } from '@/lib/types';

const speak = vi.hoisted(() => vi.fn());
vi.mock('@/lib/speech', () => ({ speakJapanese: speak }));
vi.mock('@/lib/storage', () => ({ recordAnswer: vi.fn() }));

const verb: Verb = {
  id: 'v-mamorimasu',
  code: 'MP',
  masu: 'mamorimasu',
  japanese: 'まもります',
  english: 'protect',
  connection: 'Mars Protects',
};

const other: Verb = {
  id: 'v-nigemasu',
  code: 'NE',
  masu: 'nigemasu',
  japanese: 'にげます',
  english: 'escape',
  connection: 'Nature’s prophet Escapes',
};

function question(over: Partial<ReviewQuestion> = {}): ReviewQuestion {
  return {
    verb,
    direction: 'en-to-jp',
    source: 'this-week',
    options: ['mamorimasu', 'nigemasu', 'tsukaimasu', 'wakarimasu'],
    correctAnswer: 'mamorimasu',
    ...over,
  };
}

function setup(questions: ReviewQuestion[], onComplete = vi.fn()) {
  const user = userEvent.setup();
  render(
    <VerbQuiz questions={questions} weekIndex={0} newVerb={null} onComplete={onComplete} />
  );
  return { user, onComplete };
}

/** The answer button whose option text is exactly `text`. */
function option(text: string): HTMLElement {
  const match = screen
    .getAllByRole('button')
    .find((b) => b.querySelector('span > span.truncate')?.textContent === text);
  if (!match) throw new Error(`No option button for "${text}"`);
  return match;
}

afterEach(() => {
  vi.useRealTimers();
});

describe('answering', () => {
  it('shows the prompt and its options', () => {
    setup([question()]);
    expect(screen.getByText('protect')).toBeTruthy();
    expect(option('mamorimasu')).toBeTruthy();
  });

  it('marks a wrong answer with words, not just colour', async () => {
    const { user } = setup([question()]);
    await user.click(option('nigemasu'));

    // WCAG 1.4.1 — the state has to survive without colour.
    expect(screen.getByText(/Your answer/)).toBeTruthy();
    expect(screen.getByText(/Correct/)).toBeTruthy();
  });

  it('announces the result to screen readers', async () => {
    const { user } = setup([question()]);
    await user.click(option('nigemasu'));

    const alert = screen.getByRole('alert');
    expect(alert.textContent).toContain('Incorrect');
    expect(alert.textContent).toContain('mamorimasu');
    expect(alert.textContent).toContain('protect');
  });

  it('ignores a second tap once answered', async () => {
    const { user, onComplete } = setup([question()]);
    await user.click(option('nigemasu'));
    await user.click(option('tsukaimasu'));

    // The correction is still showing, and the stray tap did not register as
    // a second answer.
    expect(onComplete).not.toHaveBeenCalled();
    expect(screen.getAllByText(/Your answer/)).toHaveLength(1);
  });
});

describe('audio', () => {
  it('speaks the verb when the answer is right', async () => {
    const { user } = setup([question()]);
    await user.click(option('mamorimasu'));
    expect(speak).toHaveBeenCalledWith('まもります');
  });

  it('also speaks it when the answer is wrong', async () => {
    // The miss is exactly when hearing the word matters; gating audio behind a
    // correct answer means you never hear the ones you are getting wrong.
    const { user } = setup([question()]);
    await user.click(option('nigemasu'));
    expect(speak).toHaveBeenCalledWith('まもります');
  });
});

describe('advancing', () => {
  it('waits for the user after a wrong answer', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const { user, onComplete } = setup([question()]);

    await user.click(option('nigemasu'));
    await vi.advanceTimersByTimeAsync(10_000);

    // No timer may carry the user past a correction they have not dismissed.
    expect(onComplete).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: /Finish|Continue/ })).toBeTruthy();
  });

  it('advances on its own after a correct answer', async () => {
    const { user, onComplete } = setup([question()]);
    await user.click(option('mamorimasu'));

    await waitFor(() => expect(onComplete).toHaveBeenCalled(), { timeout: 3000 });
    expect(onComplete.mock.calls[0][0]).toMatchObject({
      totalQuestions: 1,
      correctAnswers: 1,
      missed: [],
    });
  });

  it('moves on when Continue is pressed after a miss', async () => {
    const { user, onComplete } = setup([question()]);
    await user.click(option('nigemasu'));
    await user.click(screen.getByRole('button', { name: /Finish/ }));

    expect(onComplete).toHaveBeenCalled();
    expect(onComplete.mock.calls[0][0].missed).toEqual([verb]);
  });

  it('reports every missed verb at the end', async () => {
    const { user, onComplete } = setup([
      question(),
      question({ verb: other, correctAnswer: 'nigemasu', options: ['nigemasu', 'mamorimasu', 'tsukaimasu', 'wakarimasu'] }),
    ]);

    // Miss the first question, dismiss the correction, then miss the second.
    await user.click(option('nigemasu'));
    await user.click(screen.getByRole('button', { name: /Continue/ }));
    await user.click(option('mamorimasu'));
    await user.click(screen.getByRole('button', { name: /Finish/ }));

    expect(onComplete.mock.calls[0][0].missed.map((v: Verb) => v.id)).toEqual([
      'v-mamorimasu',
      'v-nigemasu',
    ]);
  });
});

describe('keyboard', () => {
  it('picks an option with a number key', async () => {
    const { user, onComplete } = setup([question()]);
    await user.keyboard('1');

    await waitFor(() => expect(onComplete).toHaveBeenCalled(), { timeout: 3000 });
    expect(onComplete.mock.calls[0][0].correctAnswers).toBe(1);
  });

  it('continues past a correction with Enter', async () => {
    const { user, onComplete } = setup([question()]);
    await user.keyboard('2'); // wrong
    expect(onComplete).not.toHaveBeenCalled();

    await user.keyboard('{Enter}');
    expect(onComplete).toHaveBeenCalled();
  });

  it('ignores number keys outside the option range', async () => {
    const { user, onComplete } = setup([question()]);
    await user.keyboard('9');
    expect(onComplete).not.toHaveBeenCalled();
    expect(screen.queryByText(/Your answer/)).toBeNull();
  });
});

describe('progress', () => {
  it('counts questions from one', () => {
    setup([question(), question()]);
    expect(screen.getByText('Question 1 of 2')).toBeTruthy();
  });

  it('labels where each question came from', () => {
    setup([question({ source: 'new' })]);
    expect(screen.getByText('New today')).toBeTruthy();
  });
});
