const mongoose = require('mongoose');
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');
const  Wallet = require('./Wallet');

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
    /*
    * The first coupon amount they load (recharge) on sign up.
    * */
    couponCredit: {
        type: Number,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    isSuperAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
});

/*
* Virtual fields declaration.
* */
userSchema.virtual('name').get(function() {
    return `${this.firstName} ${this.lastName}`;
});

/*
* Create a wallet whenever a user account is created.
* */
userSchema.post('save', function(user) {
    Wallet.create({
        credit: user.couponCredit,
        user: user._id,
    })
});

/*
* Fuse User schema with Passport Local Mongoose for Passport
* Authentication.
* */
userSchema.plugin(passportLocalMongoose,
    { usernameField: 'email' });

const User = mongoose.model('User', userSchema);

module.exports = User;