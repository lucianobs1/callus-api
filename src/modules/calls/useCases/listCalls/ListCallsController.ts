import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCallsUseCase } from './ListCallsUseCase';

class ListCallsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCallsUseCase = container.resolve(ListCallsUseCase);
    const calls = await listCallsUseCase.execute();

    return response.status(200).json(calls);
  }
}

export { ListCallsController };
