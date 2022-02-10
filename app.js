const express = require('express')
const app = express();
const mongoose = require('mongoose')
const User = require('./models/users');

mongoose.connect('mongodb://localhost:27017/JWTauth',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.warn("Database connected");
})


app.listen(4000);