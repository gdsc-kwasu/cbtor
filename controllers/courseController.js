const mongoose = require('mongoose');
const Course = mongoose.model('Course');

/*
* Retrieve all course from the database.
* */
exports.getAllCourses = (req, res, next) => {
    Course.find({})
        .lean()
        .exec((err, courses) => {
            if (err) return next(err);
            res.json(courses);
        })
};
