
const uuidv1 = require('uuid/v1');

class User {
  constructor(login, password, age, userId = uuidv1(), isDeleted = false) {
    this.userId = userId;
    this.login = login;
    this.password = password;
    this.age = Number(age);
    this.isDeleted = isDeleted;
  }
}

export default User;
