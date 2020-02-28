const express = require('express');
const controller = require('../controllers/authController');
const registerRequestValidator = require('../validation/RegisterRule');

const router = express.Router();

/*
* It shows the register view.
* */
router.get('/register', controller.redirectIfAuthenticated, (req, res) => {
    res.render('register', {
        title: 'Create an account &mdash; CBTor',
    });
});

/*
* Sign up a new user.
* */
router.post('/register',
    registerRequestValidator,
    controller.redirectIfAuthenticated,
    controller.createUser,
    controller.logUserIn);

/*
* Merely shows the login form
* */
router.get('/login', controller.redirectIfAuthenticated, (req, res) => {
    res.render('login', {
        title: 'Login into your account &mdash; CBTor',
    });
});

router.get('/reset', (req, res) => {
    res.render('resetPassword',{
        title: "Reset Your Password"
    });
});

router.get('/reset-password/:ref', (req, res) => {
    res.render('setPassword',{
        title: "Set Your New Password"
    });
});

/*
* Handles POST Request to log the user in
* */
router.post('/login', controller.logUserIn);

/*
* Handles the logout call
* */
router.get('/logout', controller.isAuth, controller.logout);

module.exports = router;
