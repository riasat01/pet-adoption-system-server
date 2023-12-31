const isAdmin = require("../../../api/v1/authentication/controllers/isAdmin");
const { getUsers, postAnUser, makeAdmin } = require("../../../api/v1/users/controllers/users");
const verifyAdmin = require("../../../middlewares/verifyAdmin");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get('/', verifyToken, verifyAdmin, getUsers);
router.post('/', postAnUser);
router.get('/admin/:email', verifyToken, isAdmin);
router.put('/makeAdmin/:id', verifyToken, verifyAdmin, makeAdmin);

module.exports = router;