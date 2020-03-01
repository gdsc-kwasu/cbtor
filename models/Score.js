const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    total: {
        type: Number,
        required: true,
    },
    score: {
        type: Number,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Course'
    },
    user: mongoose.Schema.Types.ObjectId,
})

module.exports = mongoose.model('Score', scoreSchema)
