
const uuidv1 = require('uuid/v1');

class Users {
    constructor(login, password, age, isDeleted = false, id = uuidv1()) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.age = age;
        this.isDeleted = isDeleted;
    }
}

module.exports = Users;
