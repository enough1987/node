import logger from '../config/winston';

const consoleLogger = (req, res, next) => {
  const msg = `Start: ${req.method} ${req.originalUrl}`;
  logger.info(msg);
  next();
};

export default consoleLogger;
