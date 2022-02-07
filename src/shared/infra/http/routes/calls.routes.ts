import { Router } from 'express';

import { CreateCallController } from '@modules/calls/useCases/createCall/CreateCallController';
import { ListCallsController } from '@modules/calls/useCases/listCalls/ListCallsController';
import { ShowOneCallController } from '@modules/calls/useCases/showOneCall/ShowOneCallController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const callsRoutes = Router();

const createCallsController = new CreateCallController();
const listCallsController = new ListCallsController();
const showOneCallController = new ShowOneCallController();

callsRoutes.post('/', ensureAuthenticated, createCallsController.handle);
callsRoutes.get('/', ensureAuthenticated, listCallsController.handle);
callsRoutes.get('/:id', ensureAuthenticated, showOneCallController.handle);

export { callsRoutes };
