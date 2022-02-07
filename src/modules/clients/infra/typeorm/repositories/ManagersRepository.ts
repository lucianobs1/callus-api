import { getRepository, Repository } from 'typeorm';

import { ICreateManagerDTO } from '@modules/clients/dtos/ICreateManagerDTO';
import { IManagersRepository } from '@modules/clients/repositories/IManagersRepository';

import { Manager } from '../entities/Manager';

class ManagersRepository implements IManagersRepository {
  private repository: Repository<Manager>;

  constructor() {
    this.repository = getRepository(Manager);
  }

  async create({
    name,
    cellphone,
    telephone,
    is_janitor,
    lives_here
  }: ICreateManagerDTO): Promise<void> {
    const manager = this.repository.create({
      name,
      cellphone,
      telephone,
      is_janitor,
      lives_here
    });

    await this.repository.save(manager);
  }
}

export { ManagersRepository };
