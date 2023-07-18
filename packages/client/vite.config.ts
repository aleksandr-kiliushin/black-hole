import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'node:path';
import { defineConfig } from 'vite';

dotenv.config();

/**
 * Конфиг для клиентского бандла веб SPA приложения.
 * Результатом сборки будет index.html, bundle.js, bundle.css, serviceworker.js, различные ассеты и тд.
 */
module.exports = defineConfig({
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src', 'api'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@constants': path.resolve(__dirname, 'src', 'constants'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@app-types': path.resolve(__dirname, 'src', 'app-types'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
});
