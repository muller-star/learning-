const express = require('express');
const router = express.Router();
const teacher = require('../controller/teacher');

const multer = require('multer');
const storage = multer.diskStorage({destination : function(req,res,cb){
    cb(null,'uploads/');
},
filename:function(req,file,cb){
    cb(null,new Date().toISOString()+file.originalname);
}
});

const upload = multer({storage : storage})


router.get('/',teacher.getSchedule);

router.get('/:teacherId',teacher.getScheduleById)

router.post('/',teacher.createSchedule)

router.put('/:teacherId',teacher.updateSchedule)

module.exports = router;    