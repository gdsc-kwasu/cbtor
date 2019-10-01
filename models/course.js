const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    code: {
        required: true,
        type: String,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    /*
    * Data for a standard exam */
    standard: {
        /*
        * The time duration for standard exam*/
        time: {
            type: Number,
            required: true,
        },
        /*
        * Amount of questions for standard exam */
        question: {
            type: Number,
            required: true,
        }
    }
});

module.exports = mongoose.model('Course', courseSchema);
