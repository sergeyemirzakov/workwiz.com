import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { checker } from 'vite-plugin-checker';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src/'),
      components: resolve(__dirname, './src/components/'),
      pages: resolve(__dirname, './src/pages/'),
      types: resolve(__dirname, './src/types/'),
      assets: resolve(__dirname, './src/assets/'),
      routes: resolve(__dirname, './src/routes/'),
    },
  },
});
