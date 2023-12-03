const { getDonation, postADonation, getAllDonation, getADonation, updateAdonation } = require("../../../api/v1/donation/controllers/donation");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get('/', getAllDonation);
router.get('/id/:id', verifyToken, getADonation);
router.get('/:email', verifyToken, getDonation);
router.post('/', verifyToken, postADonation);
router.put('/:id', verifyToken, updateAdonation);

module.exports = router;