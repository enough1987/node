import express from 'express';
const router = express.Router();

import AuthController from '../controllers/auth';


router.get('/login', AuthController.login);


module.exports = router;
