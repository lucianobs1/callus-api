import { getRepository, Repository } from 'typeorm';

import { IClientsRepository } from '@modules/clients/repositories/IClientRepository';

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
