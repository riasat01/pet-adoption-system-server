const { getDonation, postADonation, getAllDonation, getADonation, updateAdonation, updateDonatedAmount, deleteADonation } = require("../../../api/v1/donation/controllers/donation");
const verifyAdmin = require("../../../middlewares/verifyAdmin");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get('/', getAllDonation);
router.get('/id/:id', verifyToken, getADonation);
router.get('/:email', verifyToken, getDonation);
router.post('/', verifyToken, postADonation);
router.put('/donated/:id', verifyToken, updateDonatedAmount);
router.put('/:id', verifyToken, updateAdonation);
router.delete('/:id', verifyToken, verifyAdmin, deleteADonation);

module.exports = router;