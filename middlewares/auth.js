import { accessTokenSecret } from '../config/config';
import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    // eslint-disable-next-line callback-return
    next();
    return true;

    // eslint-disable-next-line no-unreachable
    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  }
  res.sendStatus(401);
};

export default authenticateJWT;
