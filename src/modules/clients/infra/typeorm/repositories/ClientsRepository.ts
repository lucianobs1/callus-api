import { getRepository, Repository } from 'typeorm';

import { IClientsRepository } from '@modules/clients/repositories/IClientsRepository';

import { Client } from '../entities/Client';

class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async create(name: string, manager_id: string): Promise<void> {
    const client = this.repository.create({
      name,
      manager_id
    });

    await this.repository.save(client);
  }

  async findByName(name: string): Promise<Client> {
    const client = this.repository.findOne({ name });
    return client;
  }

  async findAll(): Promise<Client[]> {
    const clients = await this.repository.find({
      relations: ['manager']
    });
    return clients;
  }
}

export { ClientsRepository };
