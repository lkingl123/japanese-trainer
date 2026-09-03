import { describe, it, expect } from 'vitest';
import { verbs, getVerbById, getWeekVerbs, getTotalWeeks, WEEK_LENGTH } from './dictionary';

/**
 * These tests encode the rules from docs/method.md. They are the guard against
 * a bad entry sneaking into the library as it grows toward its target size —
 * the dictionary is edited by hand, so the invariants need enforcing.
 */

describe('verb library invariants', () => {
  it('is non-empty', () => {
    expect(verbs.length).toBeGreaterThan(0);
  });

  it('has every verb in -masu form, romaji and kana', () => {
    // The whole course teaches polite speech. A dictionary/casual entry would
    // teach the wrong register, so this is a hard requirement, not a style.
    const offenders = verbs.filter(
      (v) => !v.masu.endsWith('masu') || !v.japanese.endsWith('ます')
    );
    expect(offenders.map((v) => `${v.id}: ${v.masu} / ${v.japanese}`)).toEqual([]);
  });

  it('has unique ids', () => {
    const ids = verbs.map((v) => v.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has unique -masu forms', () => {
    // Two entries sharing a verb would let a quiz show the same answer twice.
    const forms = verbs.map((v) => v.masu);
    const seen = new Set<string>();
    const dupes = forms.filter((f) => (seen.has(f) ? true : (seen.add(f), false)));
    expect(dupes).toEqual([]);
  });

  it('has unique English meanings', () => {
    // Distractors are drawn by meaning, so a duplicate would make a question
    // have two correct answers.
    const meanings = verbs.map((v) => v.english);
    const seen = new Set<string>();
    const dupes = meanings.filter((m) => (seen.has(m) ? true : (seen.add(m), false)));
    expect(dupes).toEqual([]);
  });

  it('has one verb per mnemonic code (method rule 3)', () => {
    const codes = verbs.map((v) => v.code).filter((c): c is string => c !== null);
    const seen = new Set<string>();
    const dupes = codes.filter((c) => (seen.has(c) ? true : (seen.add(c), false)));
    expect(dupes).toEqual([]);
  });

  it('starts each code with the verb initial', () => {
    // Letter 1 is always the first letter of the Japanese verb. "He"
    // (hairimasu -> enter) still satisfies this; it is a word rather than an
    // abbreviation, which is why the second letter is lowercase.
    const offenders = verbs.filter(
      (v) => v.code && v.code[0].toLowerCase() !== v.masu[0].toLowerCase()
    );
    expect(offenders.map((v) => `${v.id}: ${v.code} vs ${v.masu}`)).toEqual([]);
  });

  it('grounds every code in its own connection', () => {
    // The method's requirement is that a code be an abbreviation the user
    // already knows AND that the connection explain it — not letter-by-letter
    // arithmetic. Codes ground themselves in one of three ways:
    //   - the code appears verbatim in the connection ("TP scroll", "your KD")
    //   - its letters start words in the connection ("Mars Protects")
    //   - a single connection word starts with the whole code ("SPectre")
    // A code that does none of these has a connection that doesn't explain it.
    //
    // Two entries are known, deliberate exceptions where the abbreviation is
    // one the user knows from outside the sentence:
    //   DC — "DisConnect", the two letters come from inside a single word
    //   KB — lives inside "BKB", the item you buy
    const grandfathered = new Set(['v-demasu', 'v-kaimasu']);

    const offenders = verbs.filter((v) => {
      if (!v.code || !v.connection || grandfathered.has(v.id)) return false;
      const code = v.code.toLowerCase();
      const text = v.connection.toLowerCase();
      const words = text.split(/[^a-z]+/).filter(Boolean);

      const appearsVerbatim = new RegExp(`\\b${code}\\b`).test(text);
      const spelledByInitials = [...code].every((letter) =>
        words.some((w) => w.startsWith(letter))
      );
      const insideOneWord = words.some((w) => w.startsWith(code));

      return !appearsVerbatim && !spelledByInitials && !insideOneWord;
    });
    expect(
      offenders.map((v) => `${v.id}: ${v.code} vs "${v.connection}"`)
    ).toEqual([]);
  });

  it('pairs a code with a connection, and a blank with neither (method rule 4)', () => {
    // A hook is a code AND the line explaining it. Half a hook is worse than
    // none, so the two fields move together.
    const offenders = verbs.filter(
      (v) => (v.code === null) !== (v.connection === null)
    );
    expect(offenders.map((v) => v.id)).toEqual([]);
  });

  it('has no blank strings where a null is meant', () => {
    const offenders = verbs.filter(
      (v) => v.code?.trim() === '' || v.connection?.trim() === ''
    );
    expect(offenders.map((v) => v.id)).toEqual([]);
  });

  it('has two-letter codes', () => {
    const offenders = verbs.filter((v) => v.code !== null && v.code.length !== 2);
    expect(offenders.map((v) => `${v.id}: ${v.code}`)).toEqual([]);
  });

  it('has a non-empty meaning for every verb', () => {
    const offenders = verbs.filter((v) => v.english.trim() === '');
    expect(offenders.map((v) => v.id)).toEqual([]);
  });
});

describe('lookup helpers', () => {
  it('finds a verb by id', () => {
    expect(getVerbById('v-akiramemasu')?.english).toBe('forfeit');
  });

  it('returns undefined for an unknown id', () => {
    expect(getVerbById('v-nope')).toBeUndefined();
  });
});

describe('week slicing', () => {
  it('puts WEEK_LENGTH verbs in a full week', () => {
    expect(getWeekVerbs(0)).toHaveLength(WEEK_LENGTH);
  });

  it('slices consecutive, non-overlapping weeks in course order', () => {
    expect(getWeekVerbs(1)[0]).toBe(verbs[WEEK_LENGTH]);
    expect(getWeekVerbs(0)).not.toContain(getWeekVerbs(1)[0]);
  });

  it('covers every verb exactly once across all weeks', () => {
    const collected = Array.from({ length: getTotalWeeks() }, (_, i) => getWeekVerbs(i)).flat();
    expect(collected).toHaveLength(verbs.length);
    expect(new Set(collected.map((v) => v.id)).size).toBe(verbs.length);
  });

  it('returns a short final week rather than padding it', () => {
    const last = getWeekVerbs(getTotalWeeks() - 1);
    const remainder = verbs.length % WEEK_LENGTH;
    expect(last).toHaveLength(remainder === 0 ? WEEK_LENGTH : remainder);
  });

  it('returns empty for a week past the end', () => {
    expect(getWeekVerbs(getTotalWeeks() + 5)).toEqual([]);
  });
});
