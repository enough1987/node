import db from '../../data-access/models';

export default class UserService {
  static async getAutoSuggested(loginSubstring, limit) {
    const users = await UserService.getUsers();

    const suggestions = users
      .filter((value, index, self) => {
        return self.indexOf(value) === index
                    && value.login.includes(loginSubstring);
      })
      .slice(0, limit)
      .map((obj) => {
        return obj.login;
      });

    return suggestions || [];
  }

  static async getAll() {
    try {
      const users = await db.User.findAll({
        attributes: ['userId', 'login', 'age', 'isDeleted'],
        raw: true
      });

      return users || [];
    } catch (error) {
      throw error;
    }
  }

  static async getByLoginAndPassword(login, password) {
    try {
      const user = await db.User.findAll({
        where: {
          login,
          password
        },
        attributes: ['userId', 'login', 'password', 'age', 'isDeleted'],
        raw: true
      });

      return user[0] || {};
    } catch (error) {
      throw error;
    }
  }

  static async getById(userId) {
    try {
      const user = await db.User.findAll({
        where: {
          userId
        },
        attributes: ['userId', 'login', 'age', 'isDeleted'],
        raw: true
      });

      return user[0] || {};
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const res = await db.User.create(user, {
        returning: true
      });

      return res;
    } catch (error) {
      throw error;
    }
  }

  static async update(user, userId) {
    try {
      const previosUser = await UserService.getById(userId);
      const newUser = Object.assign(previosUser, user);

      const res = await db.User.update(
        newUser,
        {
          returning: true,
          where: {
            userId
          }
        }
      );

      return res;
    } catch (error) {
      throw error;
    }
  }

  static async delete(userId) {
    try {
      const previosUser = await UserService.getById(userId);
      const newUser = Object.assign(previosUser, {
        isDeleted: true
      });

      const res = await db.User.update(
        newUser,
        {
          returning: true,
          where: {
            userId
          }
        }
      );

      return res;
    } catch (error) {
      throw error;
    }
  }
}
