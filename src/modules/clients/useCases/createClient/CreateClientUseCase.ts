import { inject, injectable } from 'tsyringe';

import { IClientsRepository } from '@modules/clients/repositories/IClientRepository';
import { AppError } from '@shared/errors/AppError';
import { transformToLowerCase } from '@shared/utils/transformToLowerCase';

interface IRequest {
  name: string;
}

@injectable()
class CreateClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}
  async execute({ name }: IRequest): Promise<void> {
    const clientName = transformToLowerCase(name);

    const hasClient = await this.clientsRepository.findByName(clientName);

    if (hasClient) {
      throw new AppError('Client name already exists');
    }

    await this.clientsRepository.create(clientName);
  }
}

export { CreateClientUseCase };
