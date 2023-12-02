const { petsGet, getAPet, postAPet, updatePets, getPetWithEmail, updateAdoptionStatus, deleteAPet } = require("../../../api/v1/pets/controllers/pets");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get('/', petsGet);
router.get('/email', verifyToken, getPetWithEmail);
router.get('/:id', getAPet);
router.post('/', verifyToken, postAPet);
router.put('/updatestatus/:id', verifyToken, updateAdoptionStatus);
router.put('/:id', verifyToken, updatePets);
router.delete('/:id', verifyToken, deleteAPet);

module.exports = router;