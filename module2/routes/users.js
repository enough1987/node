const express = require('express');
const router = express.Router();
const User = require('../models/Users.js');

const users = [
    new User('test', 'test', 30),
    new User('test2', 'test', 40),
    new User('test3', 'test', 20)
];

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:userId', (req, res) => {
    // TODO: move to DB
    const user = users.find((_user) => _user.id === +req.params.userId) || {};

    res.json(user);
});

router.post('/', (req, res) => {
    // TODO: move to DB
    // TODO: check body before push
    users.push(req.body);

    res.json(users);
});

router.put('/', (req, res) => {
    // TODO: move to DB
    // TODO: check body before push
    const index = users.map(x => {
        return x.id;
    }).indexOf(req.body.id);
    console.log(index, req.body);
    if (index !== -1) {
        users[index] = req.body;
    }

    res.json(users);
});

router.delete('/:userId', (req, res) => {
    // TODO: move to DB
    users.forEach(user => {
        if (user.id === +req.params.userId) {
            user.isDeleted = true;
        }
    });

    res.json(users);
});

module.exports = router;
