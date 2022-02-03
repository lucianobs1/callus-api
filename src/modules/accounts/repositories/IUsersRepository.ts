import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByUsername(username: string): Promise<User>;
}

export { IUsersRepository };
