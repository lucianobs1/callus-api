import { inject, injectable } from 'tsyringe';

import { Call } from '@modules/calls/infra/typeorm/entities/Call';
import { ICallsRepository } from '@modules/calls/repositories/ICallsRepository';

interface IRequest {
  user_id: string;
  client_id: string;
  technician_id?: string;
  client_name: string;
  description: string;
}

@injectable()
class CreateCallUseCase {
  constructor(
    @inject('CallsRepository')
    private callsRepository: ICallsRepository
  ) {}
  async execute({
    user_id,
    client_id,
    client_name,
    description
  }: IRequest): Promise<Call> {
    const call = await this.callsRepository.create({
      user_id,
      client_id,
      client_name,
      description
    });

    return call;
  }
}

export { CreateCallUseCase };
