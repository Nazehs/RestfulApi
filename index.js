const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const url = "mongodb://localhost:27017/RestfulApi";

mongoose.connect(url);

const app = express();

const productRouter = require('./routes/api');

app.get('api/', productRouter);

app.use(bodyParser.json());

app.use((err,req,res,next)=>{
    console.log(err);
    return next(err);
});

// setting an environment  || port number 
const PORT = process.env.PORT || 8000

// telling our application which port to listen from.

app.listen(PORT,(req,res,next)=>{
    console.log(`server is running at port ${PORT}`);

});



module.exports=app;