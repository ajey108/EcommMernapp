const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors")

app.use(express.json());
app.use(cors());

//Database connection

mongoose.connect("mongodb+srv://ajey3046:H94tqHusPeJ3hobg@cluster0.nxwbegb.mongodb.net/ecommapp");

//Api

app.get('/',(req,res)=>{
    res.send('The Database is connected')
})

app.listen(port,(error)=>{
    if(!error){
        console.log(`server running on port ${400}`)
    }
    else{
        console.log(`Error:${error}`)
    }
})

