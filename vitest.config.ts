import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // Resolves the `@/…` alias from tsconfig so tests import the same paths the
  // app does.
  plugins: [tsconfigPaths()],
  test: {
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    // jsdom gives the storage tests a real localStorage to work against.
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    // Clear call history between tests, but keep vi.mock factories installed —
    // restoreMocks would unhook them and break module mocks.
    clearMocks: true,
    coverage: {
      provider: 'v8',
      include: ['src/lib/**', 'src/data/**'],
    },
  },
});
