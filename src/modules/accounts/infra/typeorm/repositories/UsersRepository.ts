import { Repository, getRepository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    username,
    password,
    birth_date
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      username,
      password,
      birth_date
    });

    await this.repository.save(user);

    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });
    return user;
  }
}

export { UsersRepository };
