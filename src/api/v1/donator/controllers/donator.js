const { Donator } = require("../../../../models/Donator");

const getDonatorWithEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const filter = { email: email };
        const result = await Donator.find(filter, null, null);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const postADonator = async (req, res) => {
    try {
        const info = req.body;
        const newInfo = new Donator(info);
        const result = await newInfo.save();
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const deleteADonator = async (req, res) => {
    try {
        const id = req.params.id;
        const filter = { _id: id };
        const result = await Donator.deleteOne(filter, null, null);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

module.exports = { getDonatorWithEmail, postADonator, deleteADonator };