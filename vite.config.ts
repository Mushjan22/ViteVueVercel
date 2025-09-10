/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base:process.env.VITE_BASE_PATH || '/ViteVueVercel',
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      all: true,
      include: ["src/**/*.{js,ts,vue}"],
      exclude: ["node_modules/", "tests/"],
    },
  },
});
