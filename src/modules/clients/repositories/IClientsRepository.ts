import { Client } from '../infra/typeorm/entities/Client';

interface IClientsRepository {
  create(name: string, manager_id: string): Promise<void>;
  findByName(name: string): Promise<Client>;
  findAll(): Promise<Client[]>;
}

export { IClientsRepository };
