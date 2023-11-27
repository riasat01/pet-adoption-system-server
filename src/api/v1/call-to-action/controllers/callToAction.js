const CallToAction = require("../../../../models/CallToAction")

const callToActionGet = async (req, res) => {
    try {
        const result = await CallToAction.find();
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

}

const callToActionPost = async (req, res) => {
    const data = req.body;
    try {
        const newData = new CallToAction(data);
        const result = await newData.save()
        console.log(result, 'result from post');
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = { callToActionGet, callToActionPost };