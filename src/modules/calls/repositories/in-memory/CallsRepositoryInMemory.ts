import { ICreateCallsDTO } from '@modules/calls/dtos/ICreateCallDTO';
import { Call } from '@modules/calls/infra/typeorm/entities/Call';

import { ICallsRepository } from '../ICallsRepository';

class CallsRepositoryInMemory implements ICallsRepository {
  calls: Call[] = [];

  async create({
    id,
    user_id,
    client_id,
    technician_id,
    client_name,
    description
  }: ICreateCallsDTO): Promise<Call> {
    const call = new Call();

    Object.assign(call, {
      id,
      user_id,
      client_id,
      technician_id,
      client_name,
      description
    });

    this.calls.push(call);

    return call;
  }

  async findById(id: string): Promise<Call> {
    const call = this.calls.find(call => call.id === id);
    return call;
  }

  async findByClosedCalls(): Promise<Call[]> {
    const closedCalls = this.calls.filter(call => !call.is_open);
    return closedCalls;
  }

  async findAll(): Promise<Call[]> {
    const calls = this.calls.map(call => call);
    return calls;
  }
}

export { CallsRepositoryInMemory };
