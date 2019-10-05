const express = require('express');
const router = express.Router();
const { userInfo } = require('../controllers/userController');
const { getAllCourses } = require('../controllers/courseController');

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

module.exports = router;
