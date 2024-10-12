import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        worker: 'src/worker.ts',
      },
      output: {
        entryFileNames: (assetInfo) => {
          return assetInfo.name === 'worker'
            ? 'worker.js'
            : 'assets/[name]-[hash].js';
        },
      },
    },
  },
});