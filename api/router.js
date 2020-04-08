import usersRoute from './routes/users';

const router = (app) => {
  app.use('/users', usersRoute);
};

export default router;
