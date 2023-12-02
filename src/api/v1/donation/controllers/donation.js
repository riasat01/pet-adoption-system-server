const Donation = require("../../../../models/Donation");

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

const postADonation = async (req, res) => {
    try {
        const donationInfo = req.body;
        const newDonation = new Donation(donationInfo)
        const result = await newDonation.save();
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message })
    }
}

module.exports = {getDonation, postADonation};