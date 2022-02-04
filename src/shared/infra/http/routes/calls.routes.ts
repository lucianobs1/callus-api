import { Router } from 'express';

import { CreateCallController } from '@modules/calls/useCases/createCall/CreateCallController';
import { ListCallsController } from '@modules/calls/useCases/listCalls/ListCallsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const callsRoutes = Router();

const createCallsController = new CreateCallController();
const listCallsController = new ListCallsController();

callsRoutes.post('/:id', ensureAuthenticated, createCallsController.handle);
callsRoutes.get('/', ensureAuthenticated, listCallsController.handle);

export { callsRoutes };
