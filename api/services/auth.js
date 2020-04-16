import jwt from 'jsonwebtoken';
import usersService from '../services/users';

const CONF_ACCESS_TOKEN = process.env.CONF_ACCESS_TOKEN;

export default class AuthService {
  static async login(login, password) {
    try {
      const user = await usersService.getByLoginAndPassword(login, password);

      if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ login: user.login,  password: user.password }, CONF_ACCESS_TOKEN);

        return accessToken;
      }
      throw Error('Incorrect login or password');
    } catch (error) {
      throw error;
    }
  }

  static async register(user) {
    try {
      await usersService.create(user);
      // Generate an access token
      const accessToken = jwt.sign({ login: user.login,  password: user.password }, CONF_ACCESS_TOKEN);

      return accessToken;
    } catch (error) {
      throw error;
    }
  }
}
