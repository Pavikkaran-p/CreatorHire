import express from "express";
import { getAllJobs } from "../Controllers/jobController.js";
const jobrouter=express.Router()

jobrouter.get("/getAllJobs",getAllJobs);

export default jobrouter