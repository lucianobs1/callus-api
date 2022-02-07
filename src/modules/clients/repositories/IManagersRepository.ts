import { ICreateManagerDTO } from '../dtos/ICreateManagerDTO';

interface IManagersRepository {
  create(data: ICreateManagerDTO): Promise<void>;
}

export { IManagersRepository };
