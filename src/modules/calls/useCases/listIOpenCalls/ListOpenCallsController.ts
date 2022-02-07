import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListOpenCallsUseCase } from './ListOpenCallsUseCase';

class ListCallsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listOpenCallsUseCase = container.resolve(ListOpenCallsUseCase);
    const openCalls = await listOpenCallsUseCase.execute();

    return response.status(200).json(openCalls);
  }
}

export { ListCallsController };
