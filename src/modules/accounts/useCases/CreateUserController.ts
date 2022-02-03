import { Request, Response } from 'express';

import { UsersRepositoryInMemory } from '../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, password, birth_date } = request.body;

    const createUserUseCase = new CreateUserUseCase(
      new UsersRepositoryInMemory()
    );

    const user = await createUserUseCase.execute({
      name,
      username,
      password,
      birth_date
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
