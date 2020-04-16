require('dotenv').config();

const CONF_DB_URL = process.env.CONF_DB_URL;

const config = {
  development: {
    url: process.env.CONF_DEV_DB_URL || CONF_DB_URL,
    dialect: process.env.CONF_DB_DIALECT
  },
  test: {
    url: process.env.CONF_TEST_DB_URL || CONF_DB_URL,
    dialect: process.env.CONF_DB_DIALECT
  },
  production: {
    url: process.env.CONF_DB_URL,
    dialect: process.env.CONF_DB_DIALECT
  }
};

module.exports = config;
