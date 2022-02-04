import { inject, injectable } from 'tsyringe';

import { Call } from '@modules/calls/infra/typeorm/entities/Call';
import { ICallsRepository } from '@modules/calls/repositories/ICallsRepository';

@injectable()
class ListCallsUseCase {
  constructor(
    @inject('CallsRepository')
    private callsRepository: ICallsRepository
  ) {}
  async execute(): Promise<Call[]> {
    const calls = await this.callsRepository.findAll();
    return calls;
  }
}

export { ListCallsUseCase };
