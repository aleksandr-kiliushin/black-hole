import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';

dotenv.config();

const startServer = async () => {
  const app = express();
  app.use(cors());
  const port = Number(process.env.SERVER_PORT) || 3001;

  app.get('/api', (request, response) => {
    response.json('👋 Howdy from the server :)');
  });

  const clientPackageDirPath = path.dirname(require.resolve('client/package.json'));

  /**
   * require.resolve берет имя пакета и возвращает полный путь к файлу из пакета `client`.
   * Если сделать просто require.resolve("client"), то вернется путь к файлу,
   * указанного в качестве main в package.json пакета client.
   */
  const spaBundleDistPath = path.resolve(clientPackageDirPath, 'dist');
  const ssrClientDistPath = path.resolve(clientPackageDirPath, 'dist-ssr/client.js');

  app.use(express.static(spaBundleDistPath));

  app.get('*', async (request, response, next) => {
    try {
      const template = fs.readFileSync(path.resolve(spaBundleDistPath, 'index.html'), 'utf-8');
      const { render } = await import(ssrClientDistPath);
      const appHtml = await render();
      const html = template.replace('<!--ssr-outlet-->', appHtml);

      response.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      next(error);
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
};

startServer();
