import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { User } from '../infra/typeorm/entities/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  username: string;
  password: string;
  birth_date: Date;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    password,
    birth_date
  }: IRequest): Promise<User> {
    const hasUsername = await this.usersRepository.findByUsername(username);

    if (hasUsername) {
      throw new AppError('username already exists');
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
