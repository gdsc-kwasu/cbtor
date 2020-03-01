const mongoose = require('mongoose');
const questionUploadRule = require('../validation/QuestionUploadRule');

const Question = mongoose.model('Question');
const Course = mongoose.model('Course')
const Coupon = mongoose.model('Coupon')


exports.uploadQuestion = [questionUploadRule, (req, res, next) => {
    Question.create({
        question: req.body.question,
        answer: req.body.answer,
        course: req.body.course,
        options: req.body.options,
    }, function(err) {
        if (err) return next(err);
        res.json({ status: true })
    })
}];

exports.createCoupons = (req, res, next) => {
    // if (req.user.role < 5) {
    //     return res.status(400).json({ message: 'You cannot add coupon!'})
    // }

    Coupon.insertMany(req.body.coupons, { pin: 1, amount: 1, _id: 0, is_used: 0})
        .then((response) => {
            res.json(response)
        })
        .catch(next)
}

exports.getAllCourses = (req, res, next) => {
    Course.find({}, { code: 1, title: 1})
        .then(courses => {
            res.json(courses)
        })
        .catch(next)
}

exports.createCourse = (req, res, next) => {
    Course.create({
        code: req.body.code,
        title: req.body.title,
        standard: {
            time: 45,
            question: 45 // Dummy.
        }
    })
    .then(course => res.json(course))
    .catch(error => {
        res.status(400).json(error)
    })
}

/**
 * Delete a course by ID
 */
exports.deleteCourse = (req, res, next) => {
    Course.findByIdAndDelete(req.body.id)
        .then(course => {
            res.json(course)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}