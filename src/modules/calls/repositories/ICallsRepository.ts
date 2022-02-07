import { ICreateCallsDTO } from '../dtos/ICreateCallDTO';
import { Call } from '../infra/typeorm/entities/Call';

interface ICallsRepository {
  create(data: ICreateCallsDTO): Promise<Call>;
  findAll(): Promise<Call[]>;
  findById(id: string): Promise<Call>;
  findByClosedCalls(): Promise<Call[]>;
}

export { ICallsRepository };
