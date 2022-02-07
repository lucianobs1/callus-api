import { inject, injectable } from 'tsyringe';

import { Call } from '@modules/calls/infra/typeorm/entities/Call';
import { ICallsRepository } from '@modules/calls/repositories/ICallsRepository';

@injectable()
class ListClosedCallsUseCase {
  constructor(
    @inject('CallsRepository')
    private callsRepository: ICallsRepository
  ) {}
  async execute(): Promise<Call[]> {
    const closed_calls = await this.callsRepository.findByClosedCalls();

    return closed_calls;
  }
}

export { ListClosedCallsUseCase };
