const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
    const token = req.cookies?.token;
    if(!token){
        return res.status(401).send({message: 'unauthorized'});
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
        if(error){
            return res.status(401).send({message: 'unauthorized'});
        }
        req.user = decoded;
        next();
    });
}

module.exports = verifyToken;