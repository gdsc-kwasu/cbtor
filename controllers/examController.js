const mongoose = require('mongoose');
const Course = mongoose.model('Course');
const Question = mongoose.model('Question');

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

/*
* Retrieve question from the database and send to the caller.
* How question is fetch depends on how the API is called (using the
* query string).
* */
exports.getQuestion = async (req, res, next) => {
    const { type, amount = 20 } = req.query;
    const course = await Course.findById(req.params.id);
    if (!course) return next(new Error('Course not found'));

    return type === 'standard'
        ? res.json(
            JSONFormat(
                await retrieveQFromDatabase(course._id, course.standard.question),
                course.standard.time))
        : res.json(
            JSONFormat(
                await retrieveQFromDatabase(course._id, Number(amount)),
                Math.floor(amount * 0.90)));
};

/*
* Randomly retrieve question(s) of a particular course ID from
* the database using mongoose aggregation.
* */
const retrieveQFromDatabase = async (id, amount) => {
    return await Question.aggregate([{
        "$match": {
            course: id,
        }
    }]).sample(amount);
};

/*
* Data structure of the question API response.
* (This data structure is subjected to change).
* */
const JSONFormat = (question, time) => {
    return {
        duration: time,
        question,
    };
};