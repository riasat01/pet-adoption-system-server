const { petsGet, getAPet, postAPet, updatePets, getPetWithEmail, updateAdoptionStatus, deleteAPet, makeNotAdopted } = require("../../../api/v1/pets/controllers/pets");
const verifyAdmin = require("../../../middlewares/verifyAdmin");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get('/', petsGet);
router.get('/email', verifyToken, getPetWithEmail);
router.get('/:id', getAPet);
router.post('/', verifyToken, postAPet);
router.put('/updatestatus/:id', verifyToken, updateAdoptionStatus);
router.put('/makeNotAdopted/:id', verifyToken, verifyAdmin, makeNotAdopted);
router.put('/:id', verifyToken, updatePets);
router.delete('/:id', verifyToken, deleteAPet);

module.exports = router;