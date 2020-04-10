import config from '../../config/config';
import jwt from 'jsonwebtoken';

const users = [
  {
    name: 'test',
    password: 'test'
  }
];

export default class AuthService {
  static async login(name, password) {
    try {
      console.log('------- ', users, name, password);
      const user = users.find(u => {
        return u.name === name && u.password === password;
      });

      if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ name: user.name,  role: user.role }, config.accessTokenSecret);

        return accessToken;
      }
      throw Error('Incorrect username or password');
    } catch (error) {
      throw error;
    }
  }
}
