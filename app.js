const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const helpers = require('./utility/helper');
const app = express();

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
// Serve static files only from public folder.
app.use(express.static(path.join(__dirname, 'public')));
// Setup the view engine (Pug)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Have some helpers available in the template.
app.use((req, res, next) => {
    res.locals.h = helpers;
    // Make whatever is flashed into session available to view template
    res.locals.flashes = req.flash();

    next();
});

app.get('/', (req, res) => {
    res.render('index', {
        title: 'CBTor &mdash; DSC KWASU',
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'CBTor &mdash; Login Page',
    });
});

app.post('/contact', (req, res) => {
    res.send(JSON.stringify(req.body))
});

app.use((req, res) => {
    res.send('File not found');
});

module.exports = app;