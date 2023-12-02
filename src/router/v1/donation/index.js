const { getDonation, postADonation } = require("../../../api/v1/donation/controllers/donation");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get('/:email', verifyToken, getDonation);
router.post('/', verifyToken, postADonation)

module.exports = router;