module.exports = (sequelize, type) => {
  const User = sequelize.define('User', {
    userId: {
      type: type.STRING,
      allowNull: false,
      unique: true
    },
    login: {
      type: type.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: type.STRING,
      allowNull: false
    },
    age: {
      type: type.INTEGER,
      allowNull: false
    },
    isDeleted: {
      type: type.BOOLEAN,
      allowNull: false
    }
  }, {});
    // eslint-disable-next-line no-unused-vars
  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};
