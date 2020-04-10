import logger from '../config/winston';

const consoleLogger = (req, res, next) => {
  const msg = `Request: ${req.method} ${req.originalUrl}`;
  logger.info(msg);
  next();
};

export default consoleLogger;
