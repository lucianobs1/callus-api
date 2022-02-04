import { AppError } from '@shared/errors/AppError';

import { UsersRepositoryInMemory } from '../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    const user = {
      name: 'name_test',
      username: 'username_test',
      password: 'test123',
      birth_date: new Date()
    };

    await createUserUseCase.execute(user);

    const userCreated = await usersRepositoryInMemory.findByUsername(
      user.username
    );

    expect(userCreated).toHaveProperty('id');
  });

  it('should not be able to create user with username exists', async () => {
    const user = {
      name: 'name_test',
      username: 'username_test',
      password: 'test123',
      birth_date: new Date()
    };

    await createUserUseCase.execute(user);

    await expect(createUserUseCase.execute(user)).rejects.toEqual(
      new AppError('username already exists')
    );
  });
});
