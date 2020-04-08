import express from 'express';
const router = express.Router();

import validateUser from '../validators/users';
import UsersController from '../controllers/users';


router.get('/getAutoSuggestUsers', UsersController.getAutoSuggestUsers);

router.get('/', UsersController.getUsers);

router.get('/:userId', UsersController.getUserById);

router.post('/',
  validateUser.validateUser,
  UsersController.createUser
);

router.put('/',
  validateUser.validateUser,
  UsersController.updateUser
);

router.delete('/:userId', UsersController.deleteUser);

module.exports = router;
