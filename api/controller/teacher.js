const teacher = require('../models/teacher');


exports.getSchedule = (req,res,next) =>{
    teacher.find().exec().then(result =>{
        res.status(200).json(result);
        console.log(result);
    }).catch(err=>{
        res.status(500).json(err);
        console.log(err);
    });
}

exports.getScheduleById = (req,res,next)=>{
    teacher.findOne({id : req.params.teacherId}).exec().then(doc=>{
        res.status(200).json(doc);
        console.log(doc);
    }).catch(err=>console.log(err));
}

exports.createSchedule = (req,res,next)=>{
    console.log(req.body);
    const teachers = new teacher({
        id : req.body.id,
        date : req.body.date,
        time : req.body.time,
        subject : req.body.subject               
    });
    teachers.save().then(doc =>{
        res.status(201).json(doc);
        console.log(doc);
    }).catch(err=>{
        res.status(500).json(err);
        console.log(err.message);
    });
}

exports.updateSchedule = (req,res,next)=>{
    const teacherId = req.params.teacherId;
    const schedule = {};
    for(const ops of req.body)
    {
        schedule[ops.propName] = ops.propValue;
    }
    prod.updateOne({id : teacherId},{$set : schedule},(err,result)=>{
        if(err)
        res.json(err);
        else
        {
            res.status(200).json(result);
        }
    });
}
