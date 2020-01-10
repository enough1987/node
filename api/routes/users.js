const express = require('express');
const router = express.Router();

const usersValidate = require('../validators/users');
const UsersController = require('../controllers/users');


router.get('/getAutoSuggestUsers', UsersController.getAutoSuggestUsers);

router.get('/', UsersController.getUsers);

router.get('/:userId', UsersController.getUserById);

router.post('/',
    usersValidate.validateUser,
    UsersController.createUser
);

router.put('/',
    usersValidate.validateUser,
    UsersController.updateUser
);

router.delete('/:userId', UsersController.deleteUser);

module.exports = router;
