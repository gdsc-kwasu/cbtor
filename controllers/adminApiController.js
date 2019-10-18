const mongoose = require('mongoose');
const questionUploadRule = require('../validation/QuestionUploadRule');

const Question = mongoose.model('Question');


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
