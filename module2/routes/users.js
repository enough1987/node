const express = require('express');
const router = express.Router();
const User = require('../models/Users.js');
const userSchema = require('../schemas/users');

const users = [
    new User('test', 'test', 30),
    new User('test2', 'test', 40),
    new User('test3', 'test', 20)
];

const validateUser = (res, user) => {
    const { error } = userSchema.validate(user);
    if (error) {
        res.status(400).json({
            error
        });
    }
};

router.get('/getAutoSuggestUsers', (req, res) => {
    const suggestions = users
        .filter((value, index, self) => {
            return self.indexOf(value) === index
                && value.login.includes(req.query.loginSubstring);
        })
        .slice(0, req.query.limit)
        .map((obj) => {
            return obj.login;
        });

    res.json({
        error: false,
        data: suggestions
    });
});

router.get('/', (req, res) => {
    res.json({
        error: false,
        data: users
    });
});

router.get('/:userId', (req, res) => {
    const user = users.find((_user) => _user.id === +req.params.userId) || {};

    res.json({
        error: false,
        data: user
    });
});

router.post('/', (req, res) => {
    const user = new User(
        req.body.login,
        req.body.password,
        req.body.age
    );
    validateUser(res, user);

    users.push(user);

    res.json({
        error: false,
        data: users
    });
});

router.put('/', (req, res) => {
    const user = new User(
        req.body.login,
        req.body.password,
        req.body.age,
        false,
        req.body.id
    );
    validateUser(res, user);

    const index = users.map(x => {
        return x.id;
    }).indexOf(req.body.id);
    if (index !== -1) {
        users[index] = user;
    }

    res.json({
        error: false,
        data: users
    });
});

router.delete('/:userId', (req, res) => {
    users.forEach(user => {
        if (user.id === +req.params.userId) {
            user.isDeleted = true;
        }
    });

    res.json({
        error: false,
        data: users
    });
});

module.exports = router;
