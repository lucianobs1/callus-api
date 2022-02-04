import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      '5afb2053f08eebec17b983efe9e4f2cc'
    ) as IPayload;

    const userRepository = new UsersRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists!', 404);
    }

    request.user = {
      id: user.id
    };

    next();
  } catch (err) {
    throw new AppError('Invalid Token!', 401);
  }
}

export { ensureAuthenticated };
