const express = require('express')
const app = express();
const mongoose = require('mongoose')
const User = require('./models/users');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
// var crypto = require('crypto');
// var key = "password";
// var algo = "aes256";

mongoose.connect('mongodb://localhost:27017/JWTauth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.warn("Database connected");
})

app.post('/register', jsonParser, function (req, res) {
    // var cipher = crypto.createCipher(algo,key);
    // var encrypted = cipher.update(req.body.password,'utf8','hex')+cipher.final('hex');
    // console.warn(encrypted);
    const data = new User({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        password:req.body.password,
    })
    data.save().then((result)=>{
        res.json(result)
    }).catch((err) =>{
        console.warn(err);
    })
})


app.listen(4000);