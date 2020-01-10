const users = require('../../db/users');

export default class UserService {
    static getAutoSuggestUsers(loginSubstring, limit) {
        const suggestions = users
            .filter((value, index, self) => {
                return self.indexOf(value) === index
                && value.login.includes(loginSubstring);
            })
            .slice(0, limit)
            .map((obj) => {
                return obj.login;
            });

        return suggestions;
    }

    static getUsers() {
        return users;
    }

    static getUserById(userId) {
        const user = users.find((_user) => _user.id === userId) || {};

        return user;
    }

    static createUser(user) {
        users.push(user);

        return users;
    }

    static updateUser(user, id) {
        const index = users.map(x => {
            return x.id;
        }).indexOf(id);
        if (index !== -1) {
            users[index] = user;
        }

        return users;
    }

    static deleteUser(userId) {
        users.forEach(user => {
            if (user.id === userId) {
                user.isDeleted = true;
            }
        });

        return users;
    }
}

module.exports = UserService;
