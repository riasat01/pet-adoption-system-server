const { Schema, model } = require("mongoose");

const UsersSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "imageURL":{
        type: String,
        required: true
    },
    role: String
})

const Users = new model("user", UsersSchema);

module.exports = Users;