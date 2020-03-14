const express = require('express');
const router = express.Router();
const product = require('../controller/product');

const multer = require('multer');
const storage = multer.diskStorage({destination : function(req,res,cb){
    cb(null,'uploads/');
},
filename:function(req,file,cb){
    cb(null,new Date().toISOString()+file.originalname);
}
});

const upload = multer({storage : storage})


router.get('/',product.getProduct);

router.get('/cat/:categoryId',product.getProductByCatId);

router.get('/pro/:productId',product.getProductByProductId);

router.post('/',upload.single('ProductImage'),product.createProduct);

router.patch('/:productId',product.updateProduct);

router.delete('/:productId',product.deleteProduct);

module.exports = router;    