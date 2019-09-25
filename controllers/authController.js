const mongoose = require('mongoose');
const passport = require('passport');

// Rip off user model from mongoose.
const User = mongoose.model('User');

/*
* For now, assume no validation - create and store
* a user to the database.
* */
exports.createUser = (req, res, next) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
    });

    User.register(user, req.body.password, (err) => {
        if (err) return next(err);

        // Success: Move onto the next Middleware.
        next();
    })
};

/*
* Sign a user into the app with their email and
* password field.
* */
exports.logUserIn = passport.authenticate('local',{
    successRedirect: '/dashboard',
    failureRedirect: '/login',
});

/*
* Redirects a logged in user to the dashboard.
* Applicable when we don't want a logged in user to be seeing
* register or login page.
* */
exports.redirectIfAuthenticated = (req, res, next) => {
    if (req.user) return res.redirect('dashboard');
    next();
};

/*
* Logout an authenticated user.
* */
exports.logout = (req, res) => {
    req.logout();
    // Maybe a flash message here.
    res.redirect('/login');
};

/*
* Check if a user is signed in, allow the request to
* continue (if logged in) or redirect them to login if
* not authenticated.
* */
exports.isAuth = (req, res, next) => {
    if (!req.user) return res.redirect('/login');

    next();
};
