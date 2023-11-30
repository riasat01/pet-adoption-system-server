const removeToken = async (req, res) => {
    const user = req.body;
    res.clearCookie('token', { maxAge: 0 }).send({ tokenRemoved: true })
}

module.exports = removeToken;