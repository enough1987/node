import usersRoute from './routes/users';
import groupsRoute from './routes/groups';
import authRoute from './routes/auth';

import config from '../config/config';

const router = (app) => {
  app.use(`/${config.version}/users`, usersRoute);
  app.use(`/${config.version}/groups`, groupsRoute);
  app.use(`/${config.version}/auth`, authRoute);
};

export default router;
