const mongoose = require('mongoose');
const passport = require('passport');
const Mailer = require('../utility/mailer')

// Rip off user model from mongoose.
const User = mongoose.model('User')
const Coupon = mongoose.model('Coupon');

/*
* For now, assume no validation - create and store
* a user to the database.
* */
exports.createUser = async (req, res, next) => {
    const coupon = await Coupon.findOneAndUpdate({ pin: req.body.coupon },
        { is_used: true });

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        couponCredit: coupon.amount,
    });

    User.register(user, req.body.password, (err) => {
        if (err) return next(err);

        // Send welcome email to user...
        (new Mailer('mails/welcome', { user }))
            .subject('Welcome to CBTor')
            .send(user.email)
        
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
    failureFlash: 'Your email or password was incorrect.',
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
