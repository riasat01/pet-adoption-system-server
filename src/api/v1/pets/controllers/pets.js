const Pets = require("../../../../models/Pets");

const petsGet = async (req, res) => {
    try {
        const query = req.query.category;
        if (query) {
            const filter = { category: query };
            const options = {
                sort: { date: -1 }
            }
            const result = await Pets.find(filter, null, options)
            res.send(result);
        } else {
            const options = {
                sort: { date: -1 }
            }
            const result = await Pets.find(null, null, options);
            res.send(result);
        }
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const getAPet = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const result = await Pets.findOne(query);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message })
    }
}

const postAPet = async (req, res) => {
    try {
        const petInfo = req.body;
        const newPet = new Pets(petInfo)
        const result = await newPet.save();
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message })
    }
}

module.exports = { petsGet, getAPet, postAPet }