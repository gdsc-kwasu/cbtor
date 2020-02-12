const mongoose = require('mongoose');

const connect = (mongodbURL) => {
    return mongoose.connect(mongodbURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        socketTimeoutMS: 0,
        connectTimeoutMS: 0,
    })
        .then(() => console.log('Now connected to MongoDB!'))
        .catch(err => console.error('Something went wrong', err));
};

module.exports = connect;
