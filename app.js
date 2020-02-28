const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const passport = require('passport');
const helpers = require('./utility/helper');
const app = express();
require('./auth/passport-local');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Set up session
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

//Flashing messages unto request object.
app.use(flash());

// Parsing Cookies from request
app.use(cookieParser());

// Register passport for authentication.
app.use(passport.initialize());
app.use(passport.session());

// Serve static files only from public folder.
app.use(express.static(path.join(__dirname, 'public')));

// Setup the view engine (Pug)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Have some helpers available in the template.
app.use((req, res, next) => {
    res.locals.h = helpers;
    res.locals.user = req.user || null;
    // Make whatever is flashed into session available to view template
    res.locals.flashes = req.flash();

    next();
});

app.get('/', (req, res) => {
    res.redirect('/login');
});


// Add the authentication and authorization routes.
app.use('/', require('./routes/auth'));

app.get(['/dashboard', '/wallet', '/score', '/feedback', '/password'],
    (req, res, next) => {
        if (!req.user)
            return res.redirect('/login');
        next();
    },
    (req, res) => {
        res.render('user/dashboard', {
            title: 'Dashboard &mdash; CBTor'
        });
});

app.use('/', require('./routes/user'));
/*
* Add routes for all API requests.
* */
app.use('/api', require('./routes/api'));

/*
* Add examination resource routes */
app.use('/exam', require('./routes/exam'));

/*
* Administrator route
* */
app.use('/manage', require('./routes/admin'));
// Administrator API route.
app.use('/api/manage', require('./routes/admin-api'));

/*
* Handles routes that are not found or an error
* occurred on processing requests.
* */
app.use((req, res) => {
    res.status(404)
        .render('error404', {
            title: 'Page Not Found',
        });
});

app.use((err, req, res, next) => {
    res.json({
        error: err
    })
});

module.exports = app;