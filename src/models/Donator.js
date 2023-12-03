const { Schema, model } = require("mongoose");
const { DonationSchema } = require("./Donation");

const DonatorSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "transactionId": {
        type: String,
        required: true
    },
    "donation": DonationSchema
})

const Donator = new model('donator', DonatorSchema);
module.exports = { Donator };