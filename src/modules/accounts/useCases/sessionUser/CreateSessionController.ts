import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSessionUseCase } from './CreateSessionCase';

class CreateSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createSessionUseCase = container.resolve(CreateSessionUseCase);

    const token = await createSessionUseCase.execute({
      username,
      password
    });

    return response.status(201).json(token);
  }
}

export { CreateSessionController };
