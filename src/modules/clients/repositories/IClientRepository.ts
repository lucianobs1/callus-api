import { Client } from '../infra/typeorm/entities/Client';

interface IClientsRepository {
  create(name: string): Promise<void>;
  findByName(name: string): Promise<Client>;
}

export { IClientsRepository };
