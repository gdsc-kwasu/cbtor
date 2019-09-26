const passport = require('passport');
const mongoose = require('mongoose');

// Grab user model registered into mongoose
const User = mongoose.model('User');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());