const mongoose = require('mongoose');
const Wallet = mongoose.model('Wallet');

/*
* Get the wallet balance of the logged in user.
* */
exports.getWalletBalance = (req, res, next) => {
    Wallet.findOne({ user: req.user._id })
        .then(wallet => res.json(wallet))
        .catch(error => next(error));
};