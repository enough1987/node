import logger from '../config/winston';

// eslint-disable-next-line no-unused-vars
const consoleErrorLogger = (err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send(err.stack);
};

export default consoleErrorLogger;
