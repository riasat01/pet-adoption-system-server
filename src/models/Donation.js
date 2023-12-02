const { Schema, model } = require("mongoose");

const DonationDchema = new Schema({
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
        type: Number
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
    }
});

const Donation = new model("donation", DonationDchema);
module.exports = Donation;