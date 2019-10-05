const mongoose = require('mongoose');
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: "We want your first name.",
    },
    lastName: {
        type: String,
        required: "Tell us your last name too.",
    },
    email: {
        type: String,
        required: "An email is required.",
        unique: true,
        validate: [validator.isEmail, 'That is not a valid email.'],
    },
    phone: {
        type: String,
        required: "Phone number is required.",
        unique: true
    },
});

userSchema.virtual('name').get(function() {
    return `${this.firstName} ${this.lastName}`;
});

/*
* Fuse User schema with Passport Local Mongoose for Passport
* Authentication.
* */
userSchema.plugin(passportLocalMongoose,
    { usernameField: 'email' });

const User = mongoose.model('User', userSchema);

module.exports = User;