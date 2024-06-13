import express from "express";
import { addJob, addMultipleJobs, getAllJobs, getJobById } from "../Controllers/jobController.js";
const jobrouter=express.Router()

jobrouter.get("/getAllJobs",getAllJobs);
jobrouter.get('/getJobById/:id', getJobById);

jobrouter.post('/addJob', addJob);
jobrouter.post('/addMultipleJobs', addMultipleJobs);

export default jobrouter