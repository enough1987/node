
const uuidv1 = require('uuid/v1');

class Users {
    constructor(login, password, age, id, isDeleted = false) {
        this.id = id || uuidv1();
        this.login = login;
        this.password = password;
        this.age = age;
        this.isDeleted = isDeleted;
    }
}

module.exports = Users;
