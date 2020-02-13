const path = require('path');
// Load configurations stored on .env to node env.
require('dotenv').config({ path: path.join(__dirname, '.env') });
const dbConnect = require('./database/connect');

/*
* Connect to Mongo database and register models
* */
dbConnect(process.env.DATABASE);
require('./models/user');
require('./models/course');
require('./models/Wallet');
require('./models/Coupon');
require('./models/question');

// Call in our express application.
const app = require('./app');

const PORT = process.env.PORT;
app.listen(PORT,
    () => console.log(`App now listening on ${PORT}`)
);
