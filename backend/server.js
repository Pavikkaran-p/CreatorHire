import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import authRoute from "./routes/authRoute.js";
import connectDB from "./Database/db.js";
import jobrouter from "./routes/jobRoute.js";
import hrrouter from "./routes/hrRoutes.js";
dotenv.config()

const app=express();
app.use(express.json());
app.use(cors());

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