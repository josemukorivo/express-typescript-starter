import { Router } from 'express';

import { getUsers } from '../controllers/users';

export const usersRoutes = (): Router => {
  const router = Router();

  router.get('/', getUsers);

  return router;
};
