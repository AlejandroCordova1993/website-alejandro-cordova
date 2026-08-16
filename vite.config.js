import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        recursos: resolve(import.meta.dirname, 'recursos.html'),
      },
    },
  },
});
