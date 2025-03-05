import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: "./", // يضمن أن المسارات تعمل بشكل صحيح في Vercel
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // يسهل استدعاء الملفات داخل src
    },
  },
  assetsInclude: ["**/*.svg"], // يضمن تضمين صور SVG في الـ Build
});
