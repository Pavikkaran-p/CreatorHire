import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { updateProfile } from '../Controllers/hrController.js';
import { addJob, addMultipleJobs } from '../Controllers/jobController.js';

const hrrouter = express.Router();
hrrouter.put('/updateprofile', protect, updateProfile);
hrrouter.post('/addjob', addJob);
hrrouter.post('/addmultiplejobs', addMultipleJobs);
export default hrrouter;
