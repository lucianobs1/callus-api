import { hash } from 'bcrypt';

import { User } from '../entities/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  username: string;
  password: string;
  birth_date: Date;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    name,
    username,
    password,
    birth_date
  }: IRequest): Promise<User> {
    const hasUsername = await this.usersRepository.findByUsername(username);

    if (hasUsername) {
      throw new Error('username already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      username,
      password: passwordHash,
      birth_date
    });

    return user;
  }
}

export { CreateUserUseCase };
