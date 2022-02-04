import 'reflect-metadata';
import express from 'express';
import { routes } from 'routes';

import '@shared/container';
import '@shared/infra/typeorm';

const server = express();

server.use(express.json());

server.use(routes);

server.listen(3333, () => {
  console.log('✨ Server is running ✨');
});
