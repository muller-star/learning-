const mongoose = require('mongoose');

const category = mongoose.Schema({
    catId : {
        type : Number,
        required  :true
    },
    title : {
        type : String,
        required : true        
    },
    slug  :{
        type : String,
        required : true
    },
    parent : Number,
    desc  : String,
    image  : String,
    status  : Boolean
});

module.exports = mongoose.model('Category',category);