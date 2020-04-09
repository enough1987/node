import usersRoute from './routes/users';
import groupsRoute from './routes/groups';

const router = (app) => {
  app.use('/users', usersRoute);
  app.use('/groups', groupsRoute);
};

export default router;
