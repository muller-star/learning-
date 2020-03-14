const express = require('express');
const router = express.Router();
const category  = require('../controller/category');

router.get('/',category.getCategory);

router.get('/:catId',category.getCategoryById);

router.post('/',category.createCategory);

router.patch('/:catId',category.updateCategory);

router.delete('/:catId',category.deleteCategory);

module.exports = router;