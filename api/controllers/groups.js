
import groupsService from '../services/groups';

class GroupsController {
  static async getAll(req, res) {
    try {
      const groups = await groupsService.getAll();

      res.json({
        error: false,
        data: groups
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

      const group = await groupsService.getById(id);

      res.json({
        error: false,
        data: group
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

  static async create(req, res) {
    try {
      const group = req.group;

      const groups = await groupsService.create(group);

      res.json({
        error: false,
        data: groups
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

  static async update(req, res) {
    try {
      const group = req.group;
      const id = req.body.id;

      const groups = await groupsService.update(
        group,
        id
      );

      res.json({
        error: false,
        data: groups
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;

      const groups = await groupsService.delete(id);

      res.json({
        error: false,
        data: groups
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

  static async addUsersToGroup(req, res) {
    try {
      const groupId = req.query.groupId;
      const userId = req.query.userId;

      const groups = await groupsService.addUsersToGroup(groupId, userId);

      res.json({
        error: false,
        data: groups
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }
}

export default GroupsController;
