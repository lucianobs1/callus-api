import { inject, injectable } from 'tsyringe';

import { IClientsRepository } from '@modules/clients/repositories/IClientsRepository';
import { AppError } from '@shared/errors/AppError';
import { transformToLowerCase } from '@shared/utils/transformToLowerCase';

interface IRequest {
  name: string;
  manager_id: string;
}

@injectable()
class CreateClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}
  async execute({ name, manager_id }: IRequest): Promise<void> {
    const clientName = transformToLowerCase(name);

    const hasClient = await this.clientsRepository.findByName(clientName);

    if (hasClient) {
      throw new AppError('Client name already exists');
    }

    await this.clientsRepository.create(clientName, manager_id);
  }
}

export { CreateClientUseCase };
