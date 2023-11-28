const Adoption = require("../../../../models/Adoption");

const getAdopted = async (req, res) => {
    try {
        const email = req.params.email;
        const filter = { email: email };
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
module.exports = { getAdopted, postAdoption };