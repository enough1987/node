
import passport from 'passport';
import passportJWT from 'passport-jwt';
import UserService from '../api/services/users';
import config from './config';
import logger from './winston';

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.accessTokenSecret;

const strategy = new JwtStrategy(jwtOptions, async (payload, next) => {
  const user = await UserService.getByLoginAndPassword(
    payload.login,
    payload.password
  );

  logger.info('AUTH payload: ', payload);

  if (user) {
    return next(null, user);
  }
  return next(null, false);
});

passport.use(strategy);

const auth = (req, res, next) => passport.authenticate(
  // name of stratagy
  'jwt',
  // options
  {
    session: false
  },
  // handler
  (error, user, info) => {
    if (error) {
      logger.info(`Authenticate error: ${error}`);
      return res.status(400).json({ error });
    }
    if (info && info.message === 'No auth token') {
      logger.info(`Authenticate error: ${info.message}`);
      return res.status(401).json({ error: info.message });
    }
    if (info && info.message === 'invalid token') {
      logger.info(`Authenticate error: ${info.message}`);
      return res.status(403).json({ error: info.message });
    }
    if (user) {
      return next();
    }
  }
)(req, res, next);

export {
  auth
};
export default passport;
