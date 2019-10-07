const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    pin: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        default: 100,
    },
    is_used: {
        type: Boolean,
        required: true,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('Coupon', couponSchema);
