import { ICreateCallsDTO } from '@modules/calls/dtos/ICreateCallDTO';
import { Call } from '@modules/calls/infra/typeorm/entities/Call';

import { ICallsRepository } from '../ICallsRepository';

class CallsRepositoryInMemory implements ICallsRepository {
  calls: Call[] = [];

  async create({
    user_id,
    client_id,
    technician_id,
    client_name,
    description
  }: ICreateCallsDTO): Promise<Call> {
    const call = new Call();

    Object.assign(call, {
      user_id,
      client_id,
      technician_id,
      client_name,
      description
    });

    this.calls.push(call);

    return call;
  }
  async findAll(): Promise<Call[]> {
    const calls = this.calls.map(call => call);
    return calls;
  }
}

export { CallsRepositoryInMemory };
