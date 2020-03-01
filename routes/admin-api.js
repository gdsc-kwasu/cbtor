const express = require('express');
const { uploadQuestion, 
    createCoupons, 
    getAllCourses, 
    createCourse, 
    deleteCourse } = require('../controllers/adminApiController');

const router = express.Router();

router.post('/question', uploadQuestion);

router.post('/credit', createCoupons)

router.get('/courses', getAllCourses)

router.post('/courses', createCourse)

router.delete('/courses', deleteCourse)

module.exports = router;