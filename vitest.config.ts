import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // Resolves the `@/…` alias from tsconfig so tests import the same paths the
  // app does.
  plugins: [tsconfigPaths()],
  test: {
    include: ['src/**/*.test.ts'],
    // jsdom gives the storage tests a real localStorage to work against.
    environment: 'jsdom',
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      include: ['src/lib/**', 'src/data/**'],
    },
  },
});
