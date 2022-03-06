import { Router } from 'express';

import { usersRoutes } from './users';

export const getRoutes = (): Router => {
  const router = Router();

  router.use('/users', usersRoutes());

  return router;
};
