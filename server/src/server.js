import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import connectDB from "./Database/db.js";
import jobrouter from "./routes/jobRoute.js";
import hrrouter from "./routes/hrRoutes.js";
import { rateLimit } from 'express-rate-limit'


import dotenv from 'dotenv'
dotenv.config()

const app=express();
app.use(express.json());
app.use(cors());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100, 
	standardHeaders: 'draft-7',
	legacyHeaders: false, 
})
app.use(limiter)

const port=process.env.PORT || 5500


app.use('/api/auth',authRoute)
app.use('/api/jobs',jobrouter)
app.use('/api/hr',hrrouter);


app.get('/',(req,res)=>{
    console.log("Backend Working fine")
    res.send(200)
})
const db=mongoose.connection
db.on('open',()=>{
    console.log("Connected to mongoDB")
})
connectDB();
app.listen(port,()=>{
    console.log(`App running in port ${port}`)
})