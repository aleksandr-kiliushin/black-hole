import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'node:path';
import { defineConfig } from 'vite';

dotenv.config();

module.exports = defineConfig({
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src', 'api'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
});
