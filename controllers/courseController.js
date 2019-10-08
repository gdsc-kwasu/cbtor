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

/*
* Retrieve an individual course by its ID
* */
exports.getCourseById = (req, res, next) => {
    Course.findById(req.params.id)
        .lean()
        .exec((err, course) => {
            if (err) return next(err);
            res.json(course);
        })
};
