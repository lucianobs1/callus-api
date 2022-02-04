import { ICreateCallsDTO } from '../dtos/ICreateCallDTO';
import { Call } from '../infra/typeorm/entities/Call';

interface ICallsRepository {
  create(data: ICreateCallsDTO): Promise<Call>;
  findAll(): Promise<Call[]>;
}

export { ICallsRepository };
