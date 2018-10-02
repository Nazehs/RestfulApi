const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url =  'mongodb://localhost:27017/RestfulApi';

mongoose.connect(url);

const app = express();
app.use(bodyParser.json());

const productRouter = require('./routes/api');

app.use('/api', productRouter);



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