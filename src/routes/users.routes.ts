import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/CreateUserController';

const userRoutes = Router();

userRoutes.post('/', new CreateUserController().handle);

export { userRoutes };
