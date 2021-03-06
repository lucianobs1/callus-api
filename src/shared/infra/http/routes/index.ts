import { Router } from 'express';

import { callRoutes } from './calls.routes';
import { clientRoutes } from './clients.routes';
import { managerRoutes } from './managers.routes';
import { sessionRoutes } from './sessions.routes';
import { userRoutes } from './users.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/calls', callRoutes);
routes.use('/clients', clientRoutes);
routes.use('/managers', managerRoutes);

export { routes };
