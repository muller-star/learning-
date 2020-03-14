const mongoose = require('mongoose');

const teacher = mongoose.Schema({
    id : {
        type : String,
        required : true,
        unique  :true
    },
    date : {
        type : Date,
        required : true
    },
    time  :{
        type  : String
    },
    subject : {
        type : String
    }
    
    
});

module.exports = mongoose.model('Teacher',teacher);