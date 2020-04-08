
import usersService from '../services/users';

class UsersController {
  static async getAutoSuggestUsers(req, res) {
    try {
      const { loginSubstring, limit } = req.query;

      const suggestions = await usersService.getAutoSuggestUsers(loginSubstring, limit);

      res.json({
        error: false,
        data: suggestions
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await usersService.getUsers();

      res.json({
        error: false,
        data: users
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = req.params.userId;

      const user = await usersService.getUserById(userId);

      res.json({
        error: false,
        data: user
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

  static async createUser(req, res) {
    try {
      const user = req.user;

      const users = await usersService.createUser(user);

      res.json({
        error: false,
        data: users
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

  static async updateUser(req, res) {
    try {
      const user = req.user;
      const id = req.body.id;

      const users = await usersService.updateUser(
        user,
        id
      );

      res.json({
        error: false,
        data: users
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

  static async deleteUser(req, res) {
    try {
      const userId = req.params.userId;

      const users = await usersService.deleteUser(userId);

      res.json({
        error: false,
        data: users
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }
}

export default UsersController;
