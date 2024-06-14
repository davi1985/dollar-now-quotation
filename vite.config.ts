// File: vitest.config.ts
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    ...configDefaults,
    environment: 'jsdom',
    globals: true,
    setupFiles: './setup.ts',
    css: false,
  },
});
