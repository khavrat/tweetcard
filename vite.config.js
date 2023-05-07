import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tweetcard",
  build: {
    outDir: "./dist",
    minify: true,
    sourcemap: true,
  },
  server: {
    fallback: "index.html",
  },
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "./src/images"),
    },
  },
});
