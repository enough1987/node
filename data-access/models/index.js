

const fs = require('fs');
const path  = require('path');
const Sequelize  = require('sequelize');
const config  = require('../config/config');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const _config = config[env];
const db = {};

let sequelize;
if (_config.use_env_variable) {
  sequelize = new Sequelize(process.env[_config.use_env_variable], _config);
} else if (_config.url) {
  sequelize = new Sequelize(_config.url, _config);
} else {
  sequelize = new Sequelize(_config.database, _config.username, _config.password, _config);
}

// eslint-disable-next-line no-sync
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
