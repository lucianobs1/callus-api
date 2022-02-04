import { Router } from 'express';

import { CreateCallController } from '@modules/calls/useCases/createCall/CreateCallController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const callsRoutes = Router();

const createCallsController = new CreateCallController();

callsRoutes.post('/:id', ensureAuthenticated, createCallsController.handle);

export { callsRoutes };
