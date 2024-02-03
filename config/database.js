const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABSE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(console.log('DB connection successfull'))
    .catch((err) => {
        console.log('DB Connection Error');
        console.error(err);
        process.exit(1);
    });
}

module.exports = dbConnect;