import { getRepository, Repository } from 'typeorm';

import { ICreateManagerDTO } from '@modules/clients/dtos/ICreateManagerDTO';
import { IClientsRepository } from '@modules/clients/repositories/IClientsRepository';

import { Client } from '../entities/Client';

class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async create(name: string): Promise<void> {
    const client = this.repository.create({
      name
    });

    await this.repository.save(client);
  }

  async findByName(name: string): Promise<Client> {
    const client = this.repository.findOne({ name });
    return client;
  }
}

export { ClientsRepository };
