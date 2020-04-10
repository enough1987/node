
import AuthService from '../services/auth';
import logger from '../../config/winston';

class AuthController {
  static async login(req, res) {
    try {
      const { name, password } = req.body || {};
      const accessToken = await AuthService.login(name, password);

      res.json({
        error: false,
        accessToken
      });
    } catch (error) {
      logger.debugController(
        AuthController.name,
        AuthController.getAll.name,
        req.originalUrl,
        error
      );
      res.status(400).json({
        error
      });
    }
  }
}

export default AuthController;
