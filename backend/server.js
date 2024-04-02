import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
const app=express();
app.use(express.json());
app.use(cors());

import dotenv from 'dotenv'
dotenv.config()
const port=process.env.PORT || 5500
const MONGO_URL=process.env.MONGO_URL;
mongoose.connect(MONGO_URL)

app.get('/',(req,res)=>{
    console.log("Req received")
    res.send('Hello test')
})

const db=mongoose.connection
db.on('open',()=>{
    console.log("Connected to mongoDB")
})
app.use('/auth',authRoute)

app.listen(port,()=>{
    console.log(`App running in port ${port}`)
})