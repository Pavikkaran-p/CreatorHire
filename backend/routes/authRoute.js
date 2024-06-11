import express from 'express';
import { loginUser, registerUser } from '../Controllers/authController.js';
import { getAllJobs } from '../Controllers/jobController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
