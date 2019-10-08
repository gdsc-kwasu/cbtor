const mongoose = require('mongoose');
const Course = mongoose.model('Course');

/*
* Get a course by its ID, and render the Exam Portal
* Template.
* */
exports.getExamById = async (req, res, next) => {
    const course = await Course.findById(req.params.id);
    res.render('user/exam', {
        title: course.title,
        course,
    });
};