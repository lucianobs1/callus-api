import { inject, injectable } from 'tsyringe';

import { Call } from '@modules/calls/infra/typeorm/entities/Call';
import { CallsRepositoryInMemory } from '@modules/calls/repositories/in-memory/CallsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

@injectable()
class ShowOneCallUseCase {
  constructor(
    @inject('CallsRepository')
    private callsRepositoryInMemory: CallsRepositoryInMemory
  ) {}
  async execute(id: string): Promise<Call> {
    const call = await this.callsRepositoryInMemory.findById(id);

    if (!call) {
      throw new AppError('Call does not exists');
    }

    return call;
  }
}

export { ShowOneCallUseCase };
