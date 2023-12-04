const { Pets } = require("../../../../models/Pets");

const petsGet = async (req, res) => {
    try {
        const query = req.query?.category;
        const name = req.query?.name;
        const admin = req.query?.admin;
        // console.log(1);
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
        } else if(admin){
            const options = {
                sort: { date: -1 }
            }
            // console.log(2);
            const result = await Pets.find(null, null, options);
            res.send(result);
        }else {
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
        // console.log(3);
        res.status(400).send({ error: error?.message });
    }
}

const getPetWithEmail = async (req, res) => {
    try {
        const email = req.query?.email;
        const filter = { email: email };
        const options = {
            sort: { date: -1 }
        }
        const result = await Pets?.find(filter, null, options);
        res.send(result)
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
        const info = req.body;
        const filter = { _id: id };
        const updatedDoc = {
            $set: {
                imageURL: info?.imageURL,
                name: info?.name,
                age: info?.age,
                location: info?.location,
                date: info?.date,
                adopted: info?.adopted,
                shortDescription: info?.shortDescription,
                longDescription: info?.longDescription,
                email: info?.email
            }
        }
        const result = await Pets.updateOne(filter, updatedDoc, null);
        // console.log(result, 'hitted here', info);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const updateAdoptionStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const info = req.body;
        const filter = { _id: id };
        const update = {
            $set: {
                adopted: true
            }
        }
        const result = await Pets.updateOne(filter, update, null);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const deleteAPet = async (req, res) => {
    try {
        const id = req.params.id;
        const filter = {_id: id};
        const result = await Pets.deleteOne(filter);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = { petsGet, getAPet, postAPet, updatePets, getPetWithEmail, updateAdoptionStatus, deleteAPet };