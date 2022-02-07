import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowOneCallUseCase } from './ShowOneCallUseCase';

class ShowOneCallController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOneCallUseCase = container.resolve(ShowOneCallUseCase);

    const call = await showOneCallUseCase.execute(id);

    return response.status(201).json(call);
  }
}

export { ShowOneCallController };
