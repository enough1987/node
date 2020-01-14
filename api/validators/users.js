const User = require('../../models/user.js');
const userSchema = require('../../schemas/users');

const validateUser = (req, res, next) => {
  const user = new User(
    req.body.login,
    req.body.password,
    req.body.age,
    req.body.id
  );
  const { error } = userSchema.validate(user);

  if (error) {
    return res.status(400).json({
      error
    });
  }

  req.user = user;
  next();
};

module.exports = {
  validateUser
};
