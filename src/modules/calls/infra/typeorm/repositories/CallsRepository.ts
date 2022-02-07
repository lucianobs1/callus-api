import { getRepository, Repository } from 'typeorm';

import { ICreateCallsDTO } from '@modules/calls/dtos/ICreateCallDTO';
import { ICallsRepository } from '@modules/calls/repositories/ICallsRepository';

import { Call } from '../entities/Call';

class CallsRepository implements ICallsRepository {
  private repository: Repository<Call>;

  constructor() {
    this.repository = getRepository(Call);
  }

  async create({
    user_id,
    client_id,
    client_name,
    description
  }: ICreateCallsDTO): Promise<Call> {
    const call = this.repository.create({
      user_id,
      client_id,
      client_name,
      description
    });

    await this.repository.save(call);

    return call;
  }

  async findById(id: string): Promise<Call> {
    const call = await this.repository.findOne(id);
    return call;
  }

  async findByClosedCalls(): Promise<Call[]> {
    const closedCalls = await this.repository.find({
      where: {
        is_open: false
      }
    });

    return closedCalls;
  }

  async findByOpenCalls(): Promise<Call[]> {
    const openCalls = await this.repository.find({
      where: {
        is_open: true
      }
    });
    return openCalls;
  }
}

export { CallsRepository };
