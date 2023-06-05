/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
      statements: 99.8,
      branches: 100,
      functions: 100,
      lines: 99.8,
    },
  },
});
