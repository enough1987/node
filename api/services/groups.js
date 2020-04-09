import db from '../../data-access/models';

export default class GroupService {
  static async getAll() {
    try {
      const groups = await db.Group.findAll({
        attributes: ['groupId', 'name', 'permition'],
        raw: true
      });

      return groups || [];
    } catch (error) {
      throw error;
    }
  }

  static async getById(groupId) {
    try {
      const groups = await db.Group.findAll({
        where: {
          groupId
        },
        attributes: ['groupId', 'name', 'permition'],
        raw: true
      });

      return groups[0] || {};
    } catch (error) {
      throw error;
    }
  }

  static async create(group) {
    try {
      const res = await db.Group.create(group, {
        returning: true
      });

      return res;
    } catch (error) {
      throw error;
    }
  }

  static async update(group, groupId) {
    try {
      const previosGroup = await GroupService.getById(groupId);
      const newGroup = Object.assign(previosGroup, group);

      const res = await db.Group.update(
        newGroup,
        {
          returning: true,
          where: {
            groupId
          }
        }
      );

      return res;
    } catch (error) {
      throw error;
    }
  }

  static async delete(groupId) {
    try {
      const group = await GroupService.getById(groupId);

      const res = await group.destroy();

      return res;
    } catch (error) {
      throw error;
    }
  }

  static async addUsersToGroup(groupId, userIds) {
    try {
      const group = await GroupService.getById(groupId);

      if (!group.users) group.users = [];
      group.users.push(userIds);

      const t = await db.sequelize.transaction();

      const res = await db.Group.update(
        group,
        {
          returning: true,
          where: {
            groupId
          },
          transaction: t
        }
      );

      await t.commit();

      return res;
    } catch (error) {
      throw error;
    }
  }
}
