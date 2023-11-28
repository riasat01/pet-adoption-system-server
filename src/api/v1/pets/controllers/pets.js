const {Pets} = require("../../../../models/Pets");

const petsGet = async (req, res) => {
    try {
        const query = req.query.category;
        const name = req.query.name;
        if (name) {
            const filter = { name: name, adopted: false };
            const options = {
                sort: { date: -1 }
            }
            const result = await Pets.find(filter, null, options)
            res.send(result);
        } else if (query) {
            const filter = { category: query, adopted: false };
            const options = {
                sort: { date: -1 }
            }
            const result = await Pets.find(filter, null, options)
            res.send(result);
        } else {
            const filter = {
                adopted: false
            }
            const options = {
                sort: { date: -1 }
            }
            const result = await Pets.find(filter, null, options);
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

const updatePets = async (req, res) => {
    try {
        const id = req.params.id;
        const info = req.body.adopted
        const filter = { _id: id };
        const updatedDoc = {
            $set: {
                adopted: info
            }
        }
        const result = await Pets.updateOne(filter, updatedDoc, null);
        console.log(result, 'hitted here');
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = { petsGet, getAPet, postAPet, updatePets }