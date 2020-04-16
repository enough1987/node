
import usersService from '../services/users';
import logger from '../../config/winston';

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
      logger.debugController(
        UsersController.name,
        UsersController.getAutoSuggested.name,
        req.originalUrl,
        error
      );
      res.status(400).json({
        error: error.message
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
      logger.debugController(
        UsersController.name,
        UsersController.getAll.name,
        req.originalUrl,
        error
      );
      res.status(400).json({
        error: error.message
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
      logger.debugController(
        UsersController.name,
        UsersController.getById.name,
        req.originalUrl,
        error
      );
      res.status(400).json({
        error: error.message
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
      logger.debugController(
        UsersController.name,
        UsersController.create.name,
        req.originalUrl,
        error
      );
      res.status(400).json({
        error: error.message
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
      logger.debugController(
        UsersController.name,
        UsersController.update.name,
        req.originalUrl,
        error
      );
      res.status(400).json({
        error: error.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const userId = req.params.id;

      const users = await usersService.delete(userId);

      res.json({
        error: false,
        data: users
      });
    } catch (error) {
      logger.debugController(
        UsersController.name,
        UsersController.delete.name,
        req.originalUrl,
        error
      );
      res.status(400).json({
        error: error.message
      });
    }
  }
}

export default UsersController;
