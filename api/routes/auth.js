import express from 'express';
const router = express.Router();

import AuthController from '../controllers/auth';
import validator from '../validators/users';


router.post('/login', AuthController.login);
router.post('/register', validator.validateUser, AuthController.register);

module.exports = router;
