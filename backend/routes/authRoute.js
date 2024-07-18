import express from 'express';
import { loginHR, loginUser, registerHR, registerUser } from '../Controllers/authController.js';

const router = express.Router();

router.post('/user/register', registerUser);
router.post('/hr/register', registerHR);
router.post('/user/login', loginUser);
router.post('/hr/login', loginHR);

export default router;
