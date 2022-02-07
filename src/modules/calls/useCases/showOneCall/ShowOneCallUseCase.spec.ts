import { CallsRepositoryInMemory } from '@modules/calls/repositories/in-memory/CallsRepositoryInMemory';

import { ShowOneCallUseCase } from './ShowOneCallUseCase';

let showOneCallUseCase: ShowOneCallUseCase;
let callsRepositoryInMemory: CallsRepositoryInMemory;

describe('Show one call', () => {
  beforeEach(() => {
    callsRepositoryInMemory = new CallsRepositoryInMemory();
    showOneCallUseCase = new ShowOneCallUseCase(callsRepositoryInMemory);
  });

  it('should be able show one call using your id', async () => {
    const call = {
      id: 'id_test',
      user_id: 'user_id_test',
      client_id: 'client_id_test',
      technician_id: 'technician_id_test',
      client_name: 'client_name_test',
      description: 'description_test'
    };

    await callsRepositoryInMemory.create(call);

    const found_call = await showOneCallUseCase.execute(call.id);

    expect(found_call).toEqual(call);
  });
});
