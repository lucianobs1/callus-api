import { Router } from 'express';

import { CreateCallController } from '@modules/calls/useCases/createCall/CreateCallController';
import { ListClosedCallsController } from '@modules/calls/useCases/listClosedCalls/ListClosedCallsController';
import { ListCallsController } from '@modules/calls/useCases/listIOpenCalls/ListOpenCallsController';
import { ShowOneCallController } from '@modules/calls/useCases/showOneCall/ShowOneCallController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const callsRoutes = Router();

const createCallsController = new CreateCallController();
const listOpenCallsController = new ListCallsController();
const showOneCallController = new ShowOneCallController();
const listClosedCallsController = new ListClosedCallsController();

callsRoutes.post('/', ensureAuthenticated, createCallsController.handle);
callsRoutes.get('/', ensureAuthenticated, listOpenCallsController.handle);
callsRoutes.get(
  '/closed',
  ensureAuthenticated,
  listClosedCallsController.handle
);
callsRoutes.get('/:id', ensureAuthenticated, showOneCallController.handle);

export { callsRoutes };
