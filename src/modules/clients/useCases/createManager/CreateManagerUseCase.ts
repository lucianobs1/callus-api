import { inject, injectable } from 'tsyringe';

import { IManagersRepository } from '@modules/clients/repositories/IManagersRepository';

interface IRequest {
  name: string;
  cellphone: string;
  telephone: string;
  is_janitor: boolean;
  lives_here: boolean;
}

@injectable()
class CreateManagerUseCase {
  constructor(
    @inject('ManagersRepository')
    private managersRepository: IManagersRepository
  ) {}
  async execute({
    name,
    cellphone,
    telephone,
    is_janitor,
    lives_here
  }: IRequest): Promise<void> {
    await this.managersRepository.create({
      name,
      cellphone,
      telephone,
      is_janitor,
      lives_here
    });
  }
}

export { CreateManagerUseCase };
