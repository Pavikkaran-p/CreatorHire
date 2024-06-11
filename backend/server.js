import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
const app=express();
app.use(express.json());
app.use(cors());

import dotenv from 'dotenv'
import connectDB from "./Database/db.js";
import jobrouter from "./routes/jobRoute.js";
dotenv.config()
const port=process.env.PORT || 5500

app.get('/',(req,res)=>{
    console.log("Req received")
    res.send('Hello test')
})

const db=mongoose.connection
db.on('open',()=>{
    console.log("Connected to mongoDB")
})
connectDB();


app.use('/auth',authRoute)
app.use('/api/jobs',jobrouter)

app.listen(port,()=>{
    console.log(`App running in port ${port}`)
})