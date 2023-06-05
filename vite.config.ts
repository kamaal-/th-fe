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
      statements: 100,
      branches: 82,
      functions: 100,
      lines: 100,
    },
  },
});
