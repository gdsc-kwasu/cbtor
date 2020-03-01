const mongoose = require('mongoose');
const Score = mongoose.model('Score');
const Course = mongoose.model('Course');
const Wallet = mongoose.model('Wallet');
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

/**
 * Synchronize User's score to the database.
 */
exports.syncResult = (req, res, next) => {
    Score.create(Object.assign(req.body, { user: req.user._id }))
        .then(score => {
            res.json(score)
        })
}

/*
* Retrieve question from the database and send to the caller.
* How question is fetch depends on how the API is called (using the
* query string).
* */
exports.getQuestion = async (req, res, next) => {
    const { type, amount = 20 } = req.query;
    const course = await Course.findById(req.params.id);
    if (!course) return next(new Error('Course not found'));

    // Deduct user's credit or send error if not enought for exam.
    Wallet.findOne({ user: req.user._id})
        .then(wallet => {
            if (wallet.credit < 10) return res.status(404)
                .json({ message: 'Not enough credit.'})
            
            wallet.credit = wallet.credit - 10
            wallet.save()
        })

    return type === 'standard'
        ? res.json(
            JSONFormat(
                await retrieveQFromDatabase(course._id, course.standard.question),
                course.standard.time, course._id))
        : res.json(
            JSONFormat(
                await retrieveQFromDatabase(course._id, Number(amount)),
                Math.floor(amount * 0.90), course._id));
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
    }])
        .project({
            question: 1, answer: 1, options: 1, _id: 1,
        })
        .sample(amount);
};

/*
* Data structure of the question API response.
* (This data structure is subjected to change).
* */
const JSONFormat = (question, time, course) => {
    return {
        duration: time,
        question,
        course
    };
};