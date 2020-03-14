const cate = require('../models/category');

exports.getCategory = (req,res,next)=>{
    cate.find().exec().then(doc=>{
        res.status(200).json(doc);
        console.log(doc);
    }).catch(err=>{
        res.status(500).json(err);
        console.log(err);
    });
}

exports.getCategoryById = (req,res,next)=>{
    cate.findOne({catId : req.params.catId}).exec().then(doc=>{
        res.status(200).json(doc);
        console.log(doc);
    }).catch(err=>{
        res.status(500).json(err);
        console.log(err);
    });
}


exports.createCategory = (req,res,next)=>{
    const category = new cate({
        catId  :req.body.catId,
        title  : req.body.title,
        slug : req.body.slug,
        parent : req.body.parent,
        desc  :req.body.desc,
        image  : req.body.image,
        status  : req.body.status
    });
    category.save().then(doc=>{
        res.status(200).json(doc);
        console.log(doc);
    }).catch(err=>{
        res.status(500).json(err);
        console.log(err);

    });
}

exports.updateCategory = (req,res,next)=>
{
  cId = req.params.catId;
  const updateCat  = {};
  for(const c of req.body)
  {
      updateCat[c.propName] = c.propValue;      
  } 
  cate.updateOne({catId : cId},{$set : updateCat},(err,result)=>{
      if(err)
      {
          res.status(500).json(err);
      }
      else
      {
          res.status(200).json('1 document update');
          console.log(result);
      }
  })
}

exports.deleteCategory = (req,res,next) => {
    cate.findOneAndRemove({catId : req.params.catId}).exec().then(result=>{
        res.status(200).json(result);
        console.log(result);
    }).catch(err=>{
        res.status(500).json(err);
        console.log(err);
    });
}