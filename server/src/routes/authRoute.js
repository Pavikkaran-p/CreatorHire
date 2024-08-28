import express from 'express';
import { loginHR, loginUser, registerHR, registerUser, verifyToken } from '../Controllers/authController.js';

const router = express.Router();

router.post('/user/register', registerUser);
router.post('/hr/register', registerHR);
router.post('/user/login', loginUser);
router.post('/hr/login', loginHR);
router.get('/verifytoken',verifyToken)
export default router;