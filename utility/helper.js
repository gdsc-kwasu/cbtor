const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env')});

const asset = (url) => {
    return `http://`
};

module.exports = {
    asset,
};