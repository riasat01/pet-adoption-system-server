const Adoption = require("../../../../models/Adoption");

const getAdopted = async (req, res) => {
    try {
        const email = req.params.email;
        const filter = { 'pet.email': email };
        const options = {
            sort: {
                adoptedDate: - 1
            }
        }
        const result = await Adoption.find(filter, null, options);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const postAdoption = async (req, res) => {
    try {
        const info = req.body;
        const adoptionData = new Adoption(info);
        const result = await adoptionData.save();
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const makeAdopted = async (req, res) => {
    try {
        const id = req.params.id;
        const info = req.body;
        const filter = { 'pet._id': id };
        const update = {
            $set: {
                'pet.adopted': info?.adopted
            }
        }
        const result = await Adoption.updateOne(filter, update, null);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const deleteRequest = async (req, res) => {
    try {
        const id = req.params?.id;
        const filter = { 'pet._id': id };
        const result = await Adoption.deleteOne(filter, null, null);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}
module.exports = { getAdopted, postAdoption, makeAdopted, deleteRequest };