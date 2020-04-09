const permition = require('../../models/group').permition;

const Group = (sequelize, type) => {
  const _Group = sequelize.define('Group', {
    groupId: {
      type: type.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: type.STRING,
      allowNull: false,
      unique: true
    },
    permition: {
      type: type.ENUM,
      values: [
        permition.READ,
        permition.WRITE,
        permition.DELETE,
        permition.SHARE,
        permition.UPLOAD_FILES
      ]
    }
  }, {});
  // eslint-disable-next-line no-unused-vars
  _Group.associate = (models) => {
    // associations can be defined here
    _Group.hasMany(models.User, {
      foreignKey: 'login',
      as: 'users'
    });
  };
  return _Group;
};

module.exports = Group;
