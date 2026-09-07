import { describe, it, expect } from 'vitest';
import {
  verbs,
  getVerbById,
  getWeekVerbs,
  getTotalWeeks,
  getLevelCounts,
  getWeekLevel,
  LEVEL_ORDER,
  WEEK_LENGTH,
} from './dictionary';

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

  it('starts each sound with the verb initial', () => {
    // The sound chunks are the verb itself, re-spelled — so the first chunk
    // must begin with the same letter the romaji does.
    const offenders = verbs.filter(
      (v) => v.sound[0].toLowerCase() !== v.masu[0].toLowerCase()
    );
    expect(offenders.map((v) => `${v.id}: ${v.sound} vs ${v.masu}`)).toEqual([]);
  });

  it('builds each sound out of the verb it belongs to', () => {
    // Chunks joined together must be a prefix of the romaji, ignoring the
    // -masu tail and any spaces. This catches a chunking typo (MA-MO-RE for
    // mamorimasu) that would otherwise teach the wrong sounds.
    const offenders = verbs.filter((v) => {
      const joined = v.sound.toLowerCase().replace(/-/g, '');
      const stem = v.masu.toLowerCase().replace(/\s/g, '');
      return !stem.startsWith(joined);
    });
    expect(offenders.map((v) => `${v.id}: ${v.sound} vs ${v.masu}`)).toEqual([]);
  });

  it('drops the -masu tail from every sound', () => {
    // -masu never varies, so encoding it would waste the hook's capacity on
    // the one part of the word that carries no information.
    const offenders = verbs.filter((v) =>
      v.sound.toLowerCase().replace(/-/g, '').endsWith('masu')
    );
    expect(offenders.map((v) => `${v.id}: ${v.sound}`)).toEqual([]);
  });

  it('grounds every hook in its own sound (method rule 1)', () => {
    // A hook has to reproduce the sounds it stands in for, otherwise it is
    // just a sentence about the meaning. The first chunk is load-bearing —
    // recall walks the word from its front — so require the hook to carry it
    // one of three ways:
    //   - a word starts with the whole chunk  ("MArs" for MA)
    //   - the chunk appears verbatim anywhere ("TP scroll" for TSU... TP)
    //   - consecutive words spell it out      ("Nature's ... GEts" for NI-GE)
    // Spelling the chunk with a different letter than the romaji uses (CAr
    // for KA) fails all three, which is the point: reading it back would
    // hand you the wrong first letter.
    const offenders = verbs.filter((v) => {
      if (!v.hook) return false;
      const first = v.sound.split('-')[0].toLowerCase();
      const text = v.hook.toLowerCase();
      const words = text.split(/[^a-z]+/).filter(Boolean);

      if (words.some((w) => w.startsWith(first))) return false;
      if (text.includes(first)) return false;

      // Consecutive initials spelling the chunk, e.g. n + ge for "ni-ge".
      const initials = words.map((w) => w[0]).join('');
      return !initials.includes(first[0]);
    });
    expect(offenders.map((v) => `${v.id}: ${v.sound} vs "${v.hook}"`)).toEqual([]);
  });

  it('pairs a hook with its kind, and a blank with neither (method rule 5)', () => {
    // A hook and the system it came from move together; a hook with no kind
    // could not be shown with its tag.
    const offenders = verbs.filter((v) => (v.hook === null) !== (v.hookKind === null));
    expect(offenders.map((v) => v.id)).toEqual([]);
  });

  it('has no blank strings where a null is meant', () => {
    const offenders = verbs.filter(
      (v) => v.sound.trim() === '' || v.hook?.trim() === ''
    );
    expect(offenders.map((v) => v.id)).toEqual([]);
  });

  it('keeps Dota the dominant hook system', () => {
    // General hooks are the honest fallback, not the default. If they ever
    // outnumber Dota ones the dictionary has drifted off-method and the
    // theme that makes it memorable is gone.
    const dota = verbs.filter((v) => v.hookKind === 'dota').length;
    const general = verbs.filter((v) => v.hookKind === 'general').length;
    expect(dota).toBeGreaterThan(general);
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

describe('curriculum ordering', () => {
  it('groups the library N5 -> N4 -> N3', () => {
    // Week slicing is positional, so this ordering IS the syllabus. A verb
    // filed out of order would teach an N3 word inside week 1.
    const ranks = verbs.map((v) => LEVEL_ORDER.indexOf(v.level));
    const sorted = [...ranks].sort((a, b) => a - b);
    expect(ranks).toEqual(sorted);
  });

  it('gives every verb a known level', () => {
    const offenders = verbs.filter((v) => !LEVEL_ORDER.includes(v.level));
    expect(offenders.map((v) => `${v.id}: ${v.level}`)).toEqual([]);
  });

  it('starts the course at N5', () => {
    // The first thing taught should be the easiest level present, otherwise
    // day 1 opens on vocabulary above the learner's grade.
    expect(verbs[0].level).toBe('N5');
  });

  it('counts every verb into exactly one level bucket', () => {
    const counts = getLevelCounts();
    expect(counts.N5 + counts.N4 + counts.N3).toBe(verbs.length);
  });

  it('reports the level a week teaches', () => {
    expect(getWeekLevel(0)).toBe('N5');
    // Past the end of the library there is no week to report.
    expect(getWeekLevel(getTotalWeeks() + 10)).toBeNull();
  });
});
