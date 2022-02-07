import { Router } from 'express';

import { CreateManagerController } from '@modules/clients/useCases/createManager/CreateManagerController';

const managerRoutes = Router();

const createManagerController = new CreateManagerController();

managerRoutes.post('/', createManagerController.handle);

export { managerRoutes };
