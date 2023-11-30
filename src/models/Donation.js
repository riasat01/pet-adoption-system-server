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
    "maxDonationAmount": {
        type: Number,
        required: true
    },
    "donatedAmount": {
        type: Number,
        required: true
    },
    "date": {
        type: Date,
        required: true
    }
});

const Donation = new model("donation", DonationDchema);
module.exports = Donation;