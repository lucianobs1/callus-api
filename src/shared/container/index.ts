import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CallsRepository } from '@modules/calls/infra/typeorm/repositories/CallsRepository';
import { ICallsRepository } from '@modules/calls/repositories/ICallsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ICallsRepository>(
  'CallsRepository',
  CallsRepository
);
