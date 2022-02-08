import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, manager_id } = request.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);
    await createClientUseCase.execute({
      name,
      manager_id
    });

    return response.status(201).send();
  }
}

export { CreateClientController };
