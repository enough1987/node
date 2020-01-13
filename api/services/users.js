import db from '../../data-access/models';

export default class UserService {
  static async getAutoSuggestUsers(loginSubstring, limit) {
    const users = await UserService.getUsers();

    const suggestions = users
      .filter((value, index, self) => {
        return self.indexOf(value) === index
                    && value.login.includes(loginSubstring);
      })
      .slice(0, limit)
      .map((obj) => {
        console.log(obj);
        return obj.login;
      });

    return suggestions;
  }

  static async getUsers() {
    try {
      const users = await db.User.findAll({
        attributes: ['userId', 'login', 'age', 'isDeleted'],
        raw: true
      });

      return users;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(userId) {
    try {
      const user = await db.User.findAll({
        where: {
          userId
        },
        attributes: ['userId', 'login', 'age', 'isDeleted'],
        raw: true
      });

      return user[0];
    } catch (error) {
      throw error;
    }
  }

  static async createUser(user) {
    try {
      const res = await db.User.create(user, {
        returning: true
      });

      return res;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(user, userId) {
    try {
      const previosUser = await UserService.getUserById(userId);
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

  static async deleteUser(userId) {
    try {
      const previosUser = await UserService.getUserById(userId);
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

module.exports = UserService;
