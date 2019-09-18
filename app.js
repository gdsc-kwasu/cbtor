const express = require('express');
const path = require('path');
const app = express();

// Serve static files only from public folder.
app.use(express.static(path.join(__dirname, 'public')));
// Setup the view engine (Pug)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'CBTor &mdash; DSC KWASU'
    });
});

app.use((req, res) => {
    res.send('File not found');
});

module.exports = app;