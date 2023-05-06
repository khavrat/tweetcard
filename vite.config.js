import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tweetcard/",
  server: {
    fs: {
      allow: [".."],
      strict: false,
    },
  },
});
