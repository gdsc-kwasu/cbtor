const mongoose = require('mongoose');
const Course = mongoose.model('Course');
const { check, validationResult } = require('express-validator');

const rules = [
    // Question field cannot be empty
    check('question').not().isEmpty().withMessage('Question cannot be empty.'),
    // Answer field cannot be empty.
    check('answer').not().isEmpty().withMessage('Answer cannot be empty.'),
    // Course field cannot be empty
    check('course').not().isEmpty().withMessage('Course cannot be empty.'),
    // question options, and must be an array.
    check('options').not().isEmpty().withMessage('Options cannot be empty.'),
    check('options').isArray(),
    check('course').custom(course =>
        Course.findOne({ _id: course })
            .then(course => course
                ? true
                : Promise.reject('Course does not exits.')
            ))
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400)
            .json({ errors: errors.array() })
    }

    return next();
};

module.exports = Array.prototype.concat.call(rules, validate);
