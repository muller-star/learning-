const prod = require('../models/product');


exports.getProduct = (req,res,next) =>{
    prod.find().exec().then(result =>{
        res.status(200).json(result);
        console.log(result);
    }).catch(err=>{
        res.status(500).json(err);
        console.log(err);
    });
}
exports.getProductByCatId = (req,res,next)=>{
    prod.find({categoryId : req.params.categoryId}).exec().then(doc=>{
        res.status(200).json(doc);
        console.log(doc);
    }).catch(err=>console.log(err));
}

exports.getProductByProductId = (req,res,next)=>{
    prod.findOne({productId : req.params.productId}).exec().then(doc=>{
        res.status(200).json(doc);
        console.log(doc);
    }).catch(err=>console.log(err));
}

exports.createProduct = (req,res,next)=>{
    console.log(req.body);
    const product = new prod({
        productId  : req.body.productId,
        productName : req.body.productName,
        productDesc : req.body.productDesc,
        productImage1 : req.file.path,
        productImage2  :req.file.path,
        categoryId : req.body.categoryId,
        instock  :req.body.instock,
        unitValue  :req.body.unitValue,
        unit : req.body.unit,
        price : req.body.price        
    });
    product.save().then(doc =>{
        res.status(200).json(doc);
        console.log(doc);
    }).catch(err=>{
        res.status(500).json(err);
        console.log(err.message);
    });
}

exports.updateProduct = (req,res,next)=>{
    const proId = req.params.productId;

    const productops = {};
    for(const ops of req.body)
    {
        productops[ops.propName] = ops.propValue;
    }
    prod.updateOne({productId : proId},{$set : productops},(err,result)=>{
        if(err)
        res.json(err);
        else
        {
            res.status(200).json(result);
        }
    });
}

exports.deleteProduct = (req,res,next)=>{
    prod.findOneAndRemove({productId : req.params.productId}).exec().then(doc=>{
        res.status(200).json(doc);
        console.log(doc);
    }).catch(err=>{
        res.json(err);
        console.log(err);
    });
}