const User = require('../models/Users.js');

const users = [
    new User('test', 'test', 30),
    new User('test2', 'test', 40),
    new User('test3', 'test', 20)
];

module.exports = users;
