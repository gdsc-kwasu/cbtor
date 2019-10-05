const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    credit: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }

}, { timestamps: true });

module.exports =  mongoose.model('Wallet', walletSchema);
