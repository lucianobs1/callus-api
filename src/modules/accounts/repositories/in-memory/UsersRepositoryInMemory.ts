import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    username,
    password,
    birth_date
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      username,
      password,
      birth_date
    });

    this.users.push(user);

    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = this.users.find(user => user.username === username);
    return user;
  }
}

export { UsersRepositoryInMemory };
