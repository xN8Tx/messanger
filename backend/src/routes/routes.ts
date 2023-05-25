import { Express } from 'express';

import authRouter from './auth/auth.routes.ts';

const routes = (app: Express) => {
  app.use('/api/auth', authRouter);
};

export default routes;
