import express, { Request, Response } from 'express';
import fs from 'fs';
import https from 'https';
import next from 'next';
import path from 'path';

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 80;

const options = {
  key: fs.readFileSync(path.resolve(__dirname, '../ssl/moderrkowo.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '../ssl/moderrkowo.csr')),
};

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(
        `> Ready on http://localhost:${port} - env ${process.env.NODE_ENV}`
      );
    });

    https.createServer(options, server).listen(443, () => {
      console.log(
        `> Ready on https://localhost:443 - env ${process.env.NODE_ENV}`
      );
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
