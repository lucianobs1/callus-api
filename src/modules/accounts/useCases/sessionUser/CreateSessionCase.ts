import { compare } from 'bcrypt';
import { Jwt, sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    username: string;
  };
  token: string;
}

@injectable()
class CreateSessionUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ) {}
  async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByUsername(username);

    if (!user) {
      throw new AppError('Incorrect username or password');
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new AppError('Incorrect username or password');
    }

    const expireTime = '3d';
    const token = sign({}, '5afb2053f08eebec17b983efe9e4f2cc', {
      subject: user.id,
      expiresIn: expireTime
    });

    return {
      user: {
        name: user.name,
        username: user.username
      },
      token
    };
  }
}

export { CreateSessionUseCase };
