import { inject, injectable } from 'tsyringe';

import { Call } from '@modules/calls/infra/typeorm/entities/Call';
import { ICallsRepository } from '@modules/calls/repositories/ICallsRepository';

@injectable()
class ListOpenCallsUseCase {
  constructor(
    @inject('CallsRepository')
    private callsRepository: ICallsRepository
  ) {}
  async execute(): Promise<Call[]> {
    const openCalls = await this.callsRepository.findByOpenCalls();
    return openCalls;
  }
}

export { ListOpenCallsUseCase };
