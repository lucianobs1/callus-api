import { ICreateManagerDTO } from '@modules/clients/dtos/ICreateManagerDTO';
import { Manager } from '@modules/clients/infra/typeorm/entities/Manager';

import { IManagersRepository } from '../IManagersRepository';

class ManagerRepositoryInMemory implements IManagersRepository {
  managers: Manager[] = [];

  async create({
    name,
    cellphone,
    telephone,
    is_janitor,
    lives_here
  }: ICreateManagerDTO): Promise<void> {
    const manager = new Manager();

    Object.assign(manager, {
      name,
      cellphone,
      telephone,
      is_janitor,
      lives_here
    });

    this.managers.push(manager);
  }
}

export { ManagerRepositoryInMemory };
