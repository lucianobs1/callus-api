import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CallsRepository } from '@modules/calls/infra/typeorm/repositories/CallsRepository';
import { ICallsRepository } from '@modules/calls/repositories/ICallsRepository';
import { ClientsRepository } from '@modules/clients/infra/typeorm/repositories/ClientsRepository';
import { ManagersRepository } from '@modules/clients/infra/typeorm/repositories/ManagersRepository';
import { IClientsRepository } from '@modules/clients/repositories/IClientsRepository';
import { IManagersRepository } from '@modules/clients/repositories/IManagersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ICallsRepository>(
  'CallsRepository',
  CallsRepository
);

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository
);

container.registerSingleton<IManagersRepository>(
  'ManagersRepository',
  ManagersRepository
);
