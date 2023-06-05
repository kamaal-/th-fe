/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/th-fe/",
  plugins: [react()],
  test: {
    testTimeout: 10000,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    globals: true,
    coverage: {
      provider: "c8",
      thresholdAutoUpdate: false,
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
});
