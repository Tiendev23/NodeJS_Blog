// Using Node.js `require()`
const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB');
    }
}


module.exports = { connect };