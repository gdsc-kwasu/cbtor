const mongoose = require('mongoose');
const questionUploadRule = require('../validation/QuestionUploadRule');

const Question = mongoose.model('Question');
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