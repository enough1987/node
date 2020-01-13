require('dotenv').config();

const dbUrl = 'postgres://tvdysmfp:9ryHgeVVOCq9TDnMQdiPidY35gTqLE1U@balarama.db.elephantsql.com:5432/tvdysmfp';

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL || dbUrl,
    dialect: 'postgres'
  },
  test: {
    url: process.env.TEST_DATABASE_URL || dbUrl,
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL || dbUrl,
    dialect: 'postgres'
  }
};
