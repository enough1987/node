
import AuthService from '../services/auth';
import logger from '../../config/winston';

class AuthController {
  static async login(req, res) {
    try {
      const { login, password } = req.body || {};
      const accessToken = await AuthService.login(login, password);

      res.json({
        error: false,
        accessToken
      });
    } catch (error) {
      logger.debugController(
        AuthController.name,
        AuthController.login.name,
        req.originalUrl,
        error
      );
      res.status(400).json({
        error: error.message
      });
    }
  }

  static async register(req, res) {
    try {
      const user = req.user;
      const accessToken = await AuthService.register(user);

      res.json({
        error: false,
        accessToken
      });
    } catch (error) {
      logger.debugController(
        AuthController.name,
        AuthController.register.name,
        req.originalUrl,
        error
      );
      res.status(400).json({
        error: error.message
      });
    }
  }
}

export default AuthController;
