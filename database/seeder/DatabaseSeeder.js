const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env')});
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE)
    .then(() => {
        /*
        * Plug in all defined database seeds here.
        * */
        require('./CourseSeeder');
        require('./CouponSeeder');

    })
    .catch((err) => {
        console.log('[-] Failed to seed database');
        throw err;
    });