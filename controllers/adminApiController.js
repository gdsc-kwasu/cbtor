const mongoose = require('mongoose');
const questionUploadRule = require('../validation/QuestionUploadRule');

const Question = mongoose.model('Question');
const Course = mongoose.model('Course')
const Coupon = mongoose.model('Coupon')
const User = mongoose.model('User')


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
    if (!req.user.isSuperAdmin) {
        return res.status(400).json({ message: 'You cannot add coupon!'})
    }
    const credits = req.body.coupons.map(({ pin, amount}) => ({ pin: 
        pin.split('-').join(''), 
        amount 
    }))

    Coupon.insertMany(credits, { pin: 1, amount: 1, _id: 0, is_used: 0})
        .then(() => {
            res.json(req.body.coupons)
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

/**
 * Add administrator account
 */
exports.createAccount = (req, res, next) => {
    if (!req.user.isSuperAdmin) {
        return res.status(401).json({}) //hack
    }

    const couponCredit = Math.floor(Math.random() * (Math.random() * 100))
    const user = new User(Object.assign(req.body, { isAdmin: true, couponCredit }))
    User.register(user, req.body.password, (error, account) => {
        if (error) {
            res.status(400).json({ message: 'Failed to create account', error })
        }

        res.json(account)
    })
}

/**
 * Get all administrator accounts.
 */
exports.getAccounts = (req, res, next) => {
    if (!req.user.isSuperAdmin) {
        return res.status(401).json({}) //hack
    }

    User.find({ isAdmin: true })
        .then(users => {
            res.json(users)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
}

/**
 * Delete an Administrator account's by ID.
 */
exports.deleteAccount = (req, res, next) => {
    if (!req.user.isSuperAdmin) {
        return res.status(401).json({}) // hack
    }

    if (req.user._id == req.body.id) {
        return res.status(400).json({ error: 'Cannot remove your account'})
    }

    User.findOneAndDelete(req.body.id)
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            res.status(400).json({error})
        })
}