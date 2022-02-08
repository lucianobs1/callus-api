import { Router } from 'express';

import { CreateManagerController } from '@modules/clients/useCases/createManager/CreateManagerController';
import { ListClientsController } from '@modules/clients/useCases/listClients/ListClientsController';

const managerRoutes = Router();

const createManagerController = new CreateManagerController();
const listClientsController = new ListClientsController();

managerRoutes.post('/', createManagerController.handle);
managerRoutes.get('/', listClientsController.handle);

export { managerRoutes };
