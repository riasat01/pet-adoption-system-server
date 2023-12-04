const {Donation} = require("../../../../models/Donation");

const getAllDonation = async (req, res) => {
    try {
        const options = {
            sort: {
                date: - 1
            }
        }
        const result = await Donation.find(null, null, options);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    } 
}

const getDonation = async (req, res) => {
    try {
        const email = req.params.email;
        const filter = { email: email };
        const options = {
            sort: {
                date: - 1
            }
        }
        const result = await Donation.find(filter, null, options);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const getADonation = async (req, res) => {
    try {
        const id = req.params.id;
        const filter = { _id: id };
        const result = await Donation.findOne(filter, null, null);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const postADonation = async (req, res) => {
    try {
        const donationInfo = req.body;
        const newDonation = new Donation(donationInfo)
        const result = await newDonation.save();
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const updateAdonation = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const filter = { _id: id };
        const updatedDoc = {
            $set: {
                imageUrl: data?.imageUrl,
                name: data?.name,
                maxAmount: data?.maxAmount,
                donatedAmount: data?.donatedAmount,
                lastDate: data?.lastDate,
                createdDate: data?.createdDate,
                shortDescription: data?.shortDescription,
                longDescription: data?.longDescription,
                email: data?.email,
                isPaused: data?.isPaused
            }
        }
        const result = await Donation.updateOne(filter, updatedDoc, null);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const updateDonatedAmount = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const amount = parseFloat(data?.amount);
        const filter = {_id: id};
        const requiredDonation = await Donation.findOne(filter, null, null);
        let newAmount;
        if(data?.needToAdd === true){
            newAmount = requiredDonation?.donatedAmount + amount;
        }else{
            newAmount = requiredDonation?.donatedAmount - amount;
        }
        const updatedDoc = {
            $set: {
                donatedAmount: newAmount
            }
        }
        const result = await Donation.updateOne(filter, updatedDoc, null);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const togglePaused = async (req, res) => {
    try {
        const state = req.body.state;
        const id = req.params.id;
        const filter = { _id: id};
        const updatedDoc = {
            $set: {
                isPaused: state
            }
        };
        const result = await Donation.updateOne(filter, updatedDoc, null);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const deleteADonation = async (req, res) => {
    try {
        const id = req.params.id;
        const filter = { _id: id };
        const result = await Donation.deleteOne(filter, null, null);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

module.exports = { getADonation, getAllDonation, getDonation, postADonation, updateAdonation, updateDonatedAmount, deleteADonation, togglePaused };