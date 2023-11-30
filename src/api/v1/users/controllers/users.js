const Users = require("../../../../models/Users");

const getUsers = async (req, res) => {
    try {
        const result = await Users.find(null, null, null);
        res.send(result);
    } catch (error) {
        res.status(401).send({error: error.message})
    }
}

const postAnUser = async (req, res) => {
    try {
        const user = req.body;
        const query = { email: user.email }
        const existingUser = await Users.findOne(query);
        if (existingUser) {
            return res.send({ message: 'user already exists' })
        }
        const newUser = new Users(user)
        const result = await newUser.save(user);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

module.exports = {getUsers, postAnUser};