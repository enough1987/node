
const usersService = require('../services/users');

class UsersController {
    static getAutoSuggestUsers(req, res) {
        const { loginSubstring, limit } = req.query;
        const suggestions = usersService.getAutoSuggestUsers(loginSubstring, limit);

        res.json({
            error: false,
            data: suggestions
        });
    }

    static getUsers(req, res) {
        const users = usersService.getUsers();

        res.json({
            error: false,
            data: users
        });
    }

    static getUserById(req, res) {
        const userId = req.params.userId;
        const user = usersService.getUserById(userId);

        res.json({
            error: false,
            data: user
        });
    }

    static createUser(req, res) {
        const user = req.user;
        const users = usersService.createUser(user);

        res.json({
            error: false,
            data: users
        });
    }

    static updateUser(req, res) {
        const user = req.user;
        const id  =  req.body.id;
        const users = usersService.updateUser(
            user,
            id
        );

        res.json({
            error: false,
            data: users
        });
    }

    static deleteUser(req, res) {
        const userId = req.params.userId;
        const users = usersService.deleteUser(userId);

        res.json({
            error: false,
            data: users
        });
    }
}

module.exports = UsersController;
