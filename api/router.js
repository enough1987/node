const usersRoute = require('./routes/users');

const router = (app) => {
  app.use('/users', usersRoute);
};

module.exports = router;
