import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListClosedCallsUseCase } from './ListClosedCallsUseCase';

class ListClosedCallsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listClosedCallsUseCase = container.resolve(ListClosedCallsUseCase);

    const closedCalls = await listClosedCallsUseCase.execute();

    return response.status(200).json(closedCalls);
  }
}

export { ListClosedCallsController };
