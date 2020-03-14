const mongoose = require('mongoose');

const product = mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique  :true
    },
    productName : {
        type : String,
        required : true
    },
    productDesc  :{
        type  : String
    },
    productImage1 : {
        type : String
    },
    productImage2 : {
        type : String
    },
    categoryId : {
        type  : Number,
        required : true
    },
    inStock : Boolean,
    unitValue : Number,
    unit : String ,
    price : {type : Number,required : true}
    
});

module.exports = mongoose.model('Product',product);