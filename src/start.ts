import express from 'express';
import { getRoutes } from './routes';

export const startServer = (): void => {
  const app = express();

  app.use('/api', getRoutes());

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};
