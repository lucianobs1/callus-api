import { Router } from 'express';

import { callRoutes } from './calls.routes';
import { sessionRoutes } from './sessions.routes';
import { userRoutes } from './users.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/calls', callRoutes);

export { routes };
