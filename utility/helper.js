const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env')});

const HOST = process.env.HOST;
const PORT = process.env.PORT;
console.log(process.env.PORT);
const asset = (url) => {
    return `http://${HOST}:${PORT}/${url}`
};

module.exports = {
    asset,
};