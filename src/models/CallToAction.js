const { model, Schema } = require("mongoose");

const CallToActionSchema = new Schema ({
    "imageURL" : {
        type: String,
        required: true
    },
    "text" : {
        type: String,
        required: true
    }
})

const CallToAction = new model("callToAction", CallToActionSchema, 'callToAction');
module.exports = CallToAction;