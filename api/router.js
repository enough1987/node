import usersRoute from './routes/users';
import groupsRoute from './routes/groups';
import authRoute from './routes/auth';

import { auth } from '../config/passport';
import config from '../config/config';

const router = (app) => {
  app.use(`/${config.version}/users`, auth, usersRoute);
  app.use(`/${config.version}/groups`, auth, groupsRoute);
  app.use(`/${config.version}/auth`, authRoute);
};

export default router;
