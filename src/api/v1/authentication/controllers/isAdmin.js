const Users = require("../../../../models/Users");

const isAdmin = async (req, res) => {
    const email = req.params.email;
    if (email !== req.user?.email) {
        return res.status(403).send({ message: 'forbidden access' })
    }

    const query = { email: email };
    const user = await Users.findOne(query);
    let admin = false;
    if (user) {
        admin = user?.role === 'admin';
    }
    res.send({ admin });
}

module.exports = isAdmin;