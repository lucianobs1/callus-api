import { CallsRepositoryInMemory } from '@modules/calls/repositories/in-memory/CallsRepositoryInMemory';

import { CreateCallUseCase } from './CreateCallUseCase';

let createCallUseCase: CreateCallUseCase;
let callRepositoryInMemory: CallsRepositoryInMemory;

describe('Create a call', () => {
  beforeEach(() => {
    callRepositoryInMemory = new CallsRepositoryInMemory();
    createCallUseCase = new CreateCallUseCase(callRepositoryInMemory);
  });

  it('should be able create a call', async () => {
    const call = {
      user_id: 'user_id_test',
      client_id: 'client_test',
      client_name: 'client_name_test',
      technician_id: 'tehcnician_name_test',
      description: 'description_test'
    };

    const createdCall = await createCallUseCase.execute(call);

    expect(createdCall).toHaveProperty('id');
  });
});
