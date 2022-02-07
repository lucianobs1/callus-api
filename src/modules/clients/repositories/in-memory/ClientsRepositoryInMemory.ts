import { Client } from '@modules/clients/infra/typeorm/entities/Client';

import { IClientsRepository } from '../IClientsRepository';

class ClientsRepositoryInMemory implements IClientsRepository {
  clients: Client[] = [];

  async create(name: string): Promise<void> {
    const client = new Client();

    Object.assign(client, {
      name
    });

    this.clients.push(client);
  }

  async findByName(name: string): Promise<Client> {
    const client = this.clients.find(client => client.name === name);
    return client;
  }
}

export { ClientsRepositoryInMemory };
