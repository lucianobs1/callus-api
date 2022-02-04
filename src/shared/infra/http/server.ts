import 'express-async-errors';
import 'reflect-metadata';
import '@shared/container';
import '@shared/infra/typeorm';

import express, { NextFunction, Request, Response } from 'express';

import { AppError } from '@shared/errors/AppError';
import { routes } from '@shared/infra/http/routes';

const server = express();

server.use(express.json());

server.use(routes);

server.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`
    });
  }
);

server.listen(3333, () => {
  console.log('✨ Server is running ✨');
});
