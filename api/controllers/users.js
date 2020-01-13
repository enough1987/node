
const usersService = require('../services/users');

class UsersController {
  static async getAutoSuggestUsers(req, res) {
    const { loginSubstring, limit } = req.query;

    const suggestions = await usersService.getAutoSuggestUsers(loginSubstring, limit);

    res.json({
      error: false,
      data: suggestions
    });
  }

  static async getUsers(req, res) {
    const users = await usersService.getUsers();

    res.json({
      error: false,
      data: users
    });
  }

  static async getUserById(req, res) {
    const userId = req.params.userId;

    const user = await usersService.getUserById(userId);

    res.json({
      error: false,
      data: user
    });
  }

  static async createUser(req, res) {
    const user = req.user;
    const users = await usersService.createUser(user);

    res.json({
      error: false,
      data: users
    });
  }

  static async updateUser(req, res) {
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
  }

  static async deleteUser(req, res) {
    const userId = req.params.userId;

    const users = await usersService.deleteUser(userId);

    res.json({
      error: false,
      data: users
    });
  }
}

module.exports = UsersController;
