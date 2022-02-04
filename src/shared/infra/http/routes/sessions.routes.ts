import { Router } from 'express';

import { CreateSessionController } from '@modules/accounts/useCases/sessionUser/CreateSessionController';

const sessionRoutes = Router();

const createSessionController = new CreateSessionController();

sessionRoutes.post('/', createSessionController.handle);

export { sessionRoutes };
