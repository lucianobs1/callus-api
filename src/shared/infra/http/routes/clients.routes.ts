import { Router } from 'express';

import { CreateClientController } from '@modules/clients/useCases/createClient/CreateClientController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const clientRoutes = Router();

const createClientController = new CreateClientController();

clientRoutes.post('/', ensureAuthenticated, createClientController.handle);

export { clientRoutes };
