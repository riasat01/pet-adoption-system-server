const { petsGet, getAPet, postAPet, updatePets } = require("../../../api/v1/pets/controllers/pets");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get('/', petsGet);
router.get('/:id', getAPet);
router.post('/', verifyToken, postAPet);
router.put('/:id', verifyToken, updatePets);

module.exports = router;