const jwt = require("jsonwebtoken");
require("dotenv").config();

const getToken = async (req, res) => {
    try {
        const data = req.body;
        const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        res
        .cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })
        .send({success: true});
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = getToken;