import { createLogger, format, transports } from 'winston';

const timeFormat = 'MM-YY-DD HH:mm:ss.sss';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.prettyPrint()
  ),
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `info.log`
    //
    new transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: format.combine(
        format.timestamp({ format: timeFormat }),
      ),
      maxfize: '20m',
      maxfiles: '10d'
    }),
    new transports.File({
      filename: 'logs/info.log',
      format: format.combine(
        format.timestamp({ format: timeFormat }),
      ),
      maxsize: '20m',
      maxsiles: '10d'
    }),
    new transports.Console({
      level: 'debug',
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    })
  ]
});

logger.debugController = (controllerName, controllerMethod, url, error) => {
  logger.debug(`
  controller: ${controllerName}
  method: ${controllerMethod}
  url: ${url}
  timestamp: ${new Date().toUTCString()}
  error: ${error}
`);
};

export default logger;
