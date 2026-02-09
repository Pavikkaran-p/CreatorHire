import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express()
app.use(express.json())

const PORT = Number(process.env.PORT) || 3000;
app.get('/',(req,res)=>{
    res.status(200).send("OK")
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})