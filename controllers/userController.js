const mongoose = require('mongoose');
const User = mongoose.model('User');

/*
* Get user details and send as JSON.
* */
exports.userInfo = (req, res, next) => {
    User.findById(req.user._id)
        .lean()
        .exec((err, user) => {
            if (err) return next(err);
            res.json(user);
        })
};