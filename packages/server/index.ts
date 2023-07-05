import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { ViteDevServer, createServer as createViteServer } from 'vite';

dotenv.config();

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV !== 'development';

/**
 * require.resolve берет имя пакета и возвращает полный путь к файлу из пакета `client`.
 * Если сделать просто require.resolve("client"), то вернется путь к файлу,
 * указанного в качестве main в package.json пакета client.
 */
const clientPackageDirPath = path.dirname(require.resolve('client/package.json'));
const spaBundleDistPath = path.resolve(clientPackageDirPath, 'dist');

const startServer = async () => {
  const app = express();
  app.use(cors());
  const port = Number(process.env.SERVER_PORT) || 3001;

  let viteDevServer: ViteDevServer | undefined = undefined;

  if (isDev) {
    viteDevServer = await createViteServer({
      appType: 'custom',
      root: clientPackageDirPath,
      resolve: {
        alias: {
          '@api': path.resolve(clientPackageDirPath, 'src', 'api'),
          '@assets': path.resolve(clientPackageDirPath, 'src', 'assets'),
          '@components': path.resolve(clientPackageDirPath, 'src', 'components'),
          '@constants': path.resolve(clientPackageDirPath, 'src', 'constants'),
          '@pages': path.resolve(clientPackageDirPath, 'src', 'pages'),
          '@store': path.resolve(clientPackageDirPath, 'src', 'store'),
          '@app-types': path.resolve(clientPackageDirPath, 'src', 'app-types'),
          '@utils': path.resolve(clientPackageDirPath, 'src', 'utils'),
          '@src': path.resolve(clientPackageDirPath, 'src'),
        },
      },
      server: { middlewareMode: true },
    });

    app.use(viteDevServer.middlewares);
  }

  app.get('/api', (request, response) => {
    response.json('👋 Howdy from the server :)');
  });

  if (isProd) {
    app.use(express.static(spaBundleDistPath));
  }

  app.get('*', async (request, response, next) => {
    try {
      let template = '';
      if (isDev) {
        template = fs.readFileSync(path.resolve(clientPackageDirPath, 'index.html'), 'utf-8');
        const _viteServer = viteDevServer as ViteDevServer;
        template = await _viteServer.transformIndexHtml(request.originalUrl, template);
      }
      if (isProd) {
        template = fs.readFileSync(path.resolve(spaBundleDistPath, 'index.html'), 'utf-8');
      }

      let render = () => '';
      if (isDev) {
        const _viteServer = viteDevServer as ViteDevServer;
        render = (await _viteServer.ssrLoadModule(path.resolve(clientPackageDirPath, 'ssr.tsx')))
          .render;
      } else {
        render = (await import(path.resolve(clientPackageDirPath, 'dist-ssr/client.js'))).render;
      }

      const appHtml = render();
      const html = template.replace('<!--ssr-outlet-->', appHtml);

      response.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      if (isDev) {
        const _viteServer = viteDevServer as ViteDevServer;
        _viteServer.ssrFixStacktrace(error as Error);
      }
      next(error);
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
};

startServer();
