const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const teacherRouter = require('./api/routers/teacher');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(morgan('dev'));

app.use('/teacher',teacherRouter);


mongoose.connect('mongodb://localhost:27017/teacheApi',{useNewUrlParser : true},(err)=>{
    if(err)
    {
        console.log('database not connected ');
    }
    else
    {
        console.log('database is connected with mongodb');
    }
});

app.use((req,res,next) =>{
    res.header('Acces-Control-Allow-Origin-','*');
    res.header('Acces-Control-Allow-Origin','Origin,X-Request-With,Content-Type,Accept,Authorization');
    if(req.method==='OPTIONS')
    {
        res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,PATCH');
        return res.status(200).json({});
     }
     next();
});

app.use((req,res,next)=>{
const error = new Error('Not found');
error.status=404;
next(error);
});

app.use((error,req,res,next)=>{
     res.status(error.status || 500);
     res.json(error.message);
});

module.exports = app;