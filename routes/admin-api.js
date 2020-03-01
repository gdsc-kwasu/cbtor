const express = require('express');
const { uploadQuestion, 
    createCoupons, 
    getAllCourses, 
    createCourse, 
    deleteCourse, 
    createAccount, 
    getAccounts, 
    deleteAccount } = require('../controllers/adminApiController');

const router = express.Router();

router.get('/account', getAccounts)

router.post('/account', createAccount)

router.delete('/account', deleteAccount)

router.post('/question', uploadQuestion);

router.post('/credit', createCoupons)

router.get('/courses', getAllCourses)

router.post('/courses', createCourse)

router.delete('/courses', deleteCourse)

module.exports = router;