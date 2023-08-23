const express = require('express');
const app =express();
const port = 8080;

app.use(express.json())

app.get("/get_api",(req,res)=>{
    try{
        res.send("<h1> welcome to node js learning! </h1>");
    }catch(err){
        return res.status(400).json({message:err.message})
    }
})

app.listen(port,(err)=>{
    if(err){
        console.log("it occurs error" + err);
    }
    else{
        console.log("Listening port is: "+ port);
    }
})