
const uuidv1 = require('uuid/v1');

class Users {
    constructor(login, password, age, isDeleted = false) {
        this.id = uuidv1(); // string
        this.login = login; // string
        this.password = password; // string
        this.age = age; // number
        this.isDeleted = isDeleted; // boolean
    }
}

module.exports = Users;
