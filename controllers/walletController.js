const mongoose = require('mongoose');
const Wallet = mongoose.model('Wallet');
const Coupon = mongoose.model('Coupon');

/*
* Get the wallet balance of the logged in user.
* */
exports.getWalletBalance = (req, res, next) => {
    Wallet.findOne({ user: req.user._id })
        .then(wallet => res.json(wallet))
        .catch(error => next(error));
};

/*
* Loads a valid Coupon to the user's Wallet.
* */
exports.loadCreditToWallet = async (req, res, next) => {
    const coupon = await Coupon.findOne({ pin: req.body.pin });
    if (!coupon || coupon.is_used) {
        req.flash('error', 'Invalid coupon code.');
        return res.redirect('/wallet')
    }

    const wallet = await Wallet.findOne({ user: req.user._id });
    await Wallet.findOneAndUpdate({ user: req.user._id }, { credit: wallet.credit + coupon.amount});
    await Coupon.findOneAndUpdate({ pin: req.body.pin }, { is_used: true});

    req.flash('success', 'Wallet credited successfully.');
    res.redirect('/wallet');
};
