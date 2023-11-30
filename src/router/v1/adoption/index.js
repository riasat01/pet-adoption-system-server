const { getAdopted, postAdoption } = require("../../../api/v1/adoption/controllers/adoption");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get('/:email', verifyToken, getAdopted);
router.post('/', postAdoption);

module.exports = router;