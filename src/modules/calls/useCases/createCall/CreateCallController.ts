import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCallUseCase } from './CreateCallUseCase';

class CreateCallController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { client_name, description, client_id } = request.body;
    const user_id = request.user.id;

    const createCallUseCase = container.resolve(CreateCallUseCase);

    const call = await createCallUseCase.execute({
      user_id,
      client_id,
      client_name,
      description
    });

    return response.status(201).json(call);
  }
}

export { CreateCallController };
