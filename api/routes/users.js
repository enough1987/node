import express from 'express';
const router = express.Router();

import validator from '../validators/users';
import UsersController from '../controllers/users';


router.get('/getAutoSuggestUsers', UsersController.getAutoSuggested);

router.get('/', UsersController.getAll);

router.get('/:id', UsersController.getById);

router.post('/',
  validator.validateUser,
  UsersController.create
);

router.put('/',
  validator.validateUser,
  UsersController.update
);

router.delete('/:id', UsersController.delete);

module.exports = router;
