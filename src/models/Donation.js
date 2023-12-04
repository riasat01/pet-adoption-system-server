const { Schema, model } = require("mongoose");

const DonationSchema = new Schema({
    "imageURL": {
        type: String,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "maxAmount": {
        type: Number,
        required: true
    },
    "donatedAmount": {
        type: Number,
        required: true
    },
    "lastDate": {
        type: Date,
        required: true
    },
    "createdDate": {
        type: Date,
        required: true
    },
    "shortDescription": {
        type: String,
        required: true
    },
    "longDescription": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "isPaused": {
        type: Boolean,
        required: true
    }
});

const Donation = new model("donation", DonationSchema);
module.exports = {Donation, DonationSchema};