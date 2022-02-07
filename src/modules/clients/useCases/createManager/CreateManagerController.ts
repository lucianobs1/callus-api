import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateManagerUseCase } from './CreateManagerUseCase';

class CreateManagerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cellphone, telephone, is_janitor, lives_here } = request.body;

    const createManagerUseCase = container.resolve(CreateManagerUseCase);
    await createManagerUseCase.execute({
      name,
      cellphone,
      telephone,
      is_janitor,
      lives_here
    });

    return response.status(201).send();
  }
}

export { CreateManagerController };
