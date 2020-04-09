import express from 'express';
const router = express.Router();

import validator from '../validators/groups';
import GroupsController from '../controllers/groups';

router.get('/', GroupsController.getAll);

router.get('/addUser', GroupsController.addUsersToGroup);

router.get('/:groupId', GroupsController.getById);

router.post('/',
  validator.validateGroup,
  GroupsController.create
);

router.put('/',
  validator.validateGroup,
  GroupsController.update
);

router.delete('/:groupId', GroupsController.delete);

module.exports = router;
