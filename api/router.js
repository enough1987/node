import usersRoute from './routes/users';
import groupsRoute from './routes/groups';
import authRoute from './routes/auth';

import { auth } from '../config/passport';

const CONF_VERSION = process.env.CONF_VERSION;

const router = (app) => {
  app.use(`/${CONF_VERSION}/users`, auth, usersRoute);
  app.use(`/${CONF_VERSION}/groups`, auth, groupsRoute);
  app.use(`/${CONF_VERSION}/auth`, authRoute);
};

export default router;
