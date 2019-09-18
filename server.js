const app = require('./app');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const PORT = process.env.PORT;

app.listen(PORT,
    () => console.log(`App now listening on ${PORT}`)
);