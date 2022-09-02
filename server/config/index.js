require('dotenv').config();

const path = require('path');

module.exports = {
  development: {
    sitename: 'Roux Meetups [Development]',
    database: {
      dsn: process.env.DEVELOPMENT_DB_DSN,
    },
  },
  production: {
    sitename: 'Roux Meetups',
    database: {
      dsn: process.env.PRODUCTION_DB_DSN,
    },
  },
  test: {
    sitename: 'Roux Meetups [Test]',
    database: {
      dsn: process.env.TEST_DB_DSN,
    },
  },
};
