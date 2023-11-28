const { Schema, model } = require("mongoose");
const { PetsSchema } = require("./Pets");

const AdoptionSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "pet": PetsSchema,
    "adoptedDate": {
        type: Date,
        required: true
    }
})

const Adoption = new model("adoption", AdoptionSchema);
module.exports = Adoption;