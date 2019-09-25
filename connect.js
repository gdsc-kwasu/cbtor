const mongoose = require('mongoose');

const connect = (mongodbURL) => {
    return mongoose.connect(mongodbURL, {
        useNewUrlParser: true
    })
        .then(() => console.log('Now connected to MongoDB!'))
        .catch(err => console.error('Something went wrong', err));
};

module.exports = connect;
