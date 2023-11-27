const { Schema, model } = require("mongoose");

const PetsSchema = new Schema({
    "imageURL": {
        type: String,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "age": {
        type: Number,
        required: true
    },
    "location": {
        type: String,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "date": {
        type: Date,
        required: true
    }
});

const Pets = new model("pet", PetsSchema);
module.exports = Pets;