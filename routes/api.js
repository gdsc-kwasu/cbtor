const express = require('express');
const router = express.Router();
const { userInfo } = require('../controllers/userController');
const { getAllCourses,
    getCourseById } = require('../controllers/courseController');

const { getQuestion } = require('../controllers/examController');

const { getWalletBalance } = require('../controllers/walletController');

const wait = (timeout = 2000) => {
  return  (req, res, next) => {
        setTimeout(() => next(), timeout)
    };
};

/*
* Ensure an authenticated user is making request to
*  the endpoints listed here.
* */
router.use((req, res, next) => {
    if (!req.user)
        return res.redirect('/login');
    next();
});

router.get('/me', wait(), userInfo);
/*
* Get all course from the database.
* */
router.get('/courses', wait(), getAllCourses);
router.get('/courses/:id', wait(), getCourseById);

router.get('/wallet', wait(), getWalletBalance);

/*
* Examination (and exam taking) routes.
* */
router.get('/exam/:id', wait(3000), getQuestion);

module.exports = router;
