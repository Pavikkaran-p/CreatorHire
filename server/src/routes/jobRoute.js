import express from "express";
import { addJob, addMultipleJobs, getAllJobs, getJobById } from "../Controllers/jobController.js";
const jobrouter=express.Router()

jobrouter.get("/getalljobs",getAllJobs);
jobrouter.get('/getjob/:id', getJobById);


export default jobrouter