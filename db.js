const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://mili-project:1256910mM@cluster0.aony1.mongodb.net/mern-hotel';


mongoose.connect(mongoURL);

var connection = mongoose.connection;

connection.on('error', () => {
    console.log('Mongo DB Connection failed');
});

connection.on('connected', () => {
    console.log('Mongo DB Connection Successful');
});

module.exports = mongoose;
