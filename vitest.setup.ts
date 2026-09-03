// Unmounts anything rendered by a test once it finishes. Without this the
// previous test's DOM stays mounted, so queries match elements from a screen
// that is no longer under test.
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
