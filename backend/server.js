import express from "express";

const app=express();

app.get('/',(req,res)=>{
    res.send('Hello test')
})

app.listen(5500,()=>{
    console.log("App running in port 5500")
})