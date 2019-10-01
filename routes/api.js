const express = require('express');
const router = express.Router();
const { getAllCourses } = require('../controllers/courseController');

/*
* Ensure an authenticated user is making request to
*  the endpoints listed here.
* */
router.use((req, res, next) => {
    if (!req.user)
        return res.redirect('/login');
    next();
});

/*
* Get all course from the database.
* */
router.get('/courses', (req, res, next) => {
    setTimeout(() => next(), 1950)
}, getAllCourses);

module.exports = router;
