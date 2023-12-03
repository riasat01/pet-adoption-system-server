const { getDonatorWithEmail, postADonator, deleteADonator } = require("../../../api/v1/donator/controllers/donator")
const verifyToken = require("../../../middlewares/verifyToken")

const router = require("express").Router()

router.get('/:email', verifyToken, getDonatorWithEmail);
router.post('/', verifyToken, postADonator);
router.delete('/:id', verifyToken, deleteADonator);

module.exports = router;