const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helpers = require('./utility/helper');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files only from public folder.
app.use(express.static(path.join(__dirname, 'public')));
// Setup the view engine (Pug)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Have some helpers available in the template.
app.use((req, res, next) => {
    res.locals.h = helpers;

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