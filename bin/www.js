#!/usr/bin/env node

/**
 * Module dependencies.
 */
require('dotenv').config();

const app = require('../app');
const debug = require('debug')('module2:server');
const http = require('http');

import logger from '../config/winston.js';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


process
  .on('unhandledRejection', (reason) => {
    logger.error(`${(new Date()).toUTCString()  } Unhandled Rejection, reason: ${reason}`);
  })
  .on('uncaughtException', err => {
    logger.error(`${(new Date()).toUTCString()  } uncaughtException:`, err.message);
    logger.error(err.stack);
    process.exit(1);
  });

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const _port = parseInt(val, 10);

  if (isNaN(_port)) {
    // named pipe
    return val;
  }

  if (_port >= 0) {
    // port number
    return _port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
