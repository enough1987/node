
import usersService from '../services/users';

class UsersController {
  static async getAutoSuggested(req, res) {
    try {
      const { loginSubstring, limit } = req.query;

      const suggestions = await usersService.getAutoSuggested(loginSubstring, limit);

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

  static async getAll(req, res) {
    try {
      const users = await usersService.getAll();

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

  static async getById(req, res) {
    try {
      const id = req.params.id;

      const user = await usersService.getById(id);

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

  static async create(req, res) {
    try {
      const user = req.user;

      const users = await usersService.create(user);

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

  static async update(req, res) {
    try {
      const user = req.user;
      const userId = req.body.userId;

      const users = await usersService.update(
        user,
        userId
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

  static async delete(req, res) {
    try {
      const userId = req.params.userId;

      const users = await usersService.delete(userId);

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
