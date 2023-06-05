/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    globals: true,
    coverage: {
      provider: "c8",
      thresholdAutoUpdate: true,
      statements: 82.75,
      branches: 96.77,
      functions: 87.5,
      lines: 82.75,
    },
  }
})
