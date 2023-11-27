const mongoose = require("mongoose");
require("dotenv").config();

const getconnectionString = () => {
    let connectionUrl;

    if(process.env.NODE_ENV === 'development'){
        connectionUrl = process.env.DATABASE_LOCAL
        connectionUrl = connectionUrl.replace('<username>', process.env.DB_USER);
        connectionUrl = connectionUrl.replace('<password>', process.env.DB_PASSWORD);
    }else{
        connectionUrl = process.env.DATABASE_PROD
    }
    return connectionUrl;
}

// connect ot database
const connectDB = async () => {
    console.log('connecting to database');
    const mongoURI = getconnectionString();

    await mongoose.connect(mongoURI, {dbName: process.env.DB_NAME});
    console.log('connected to database');
}

module.exports = connectDB;