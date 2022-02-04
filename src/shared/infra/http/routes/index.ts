import { Router } from 'express';

import { callsRoutes } from './calls.routes';
import { sessionRoutes } from './sessions.routes';
import { userRoutes } from './users.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/calls', callsRoutes);

export { routes };
