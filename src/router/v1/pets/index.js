const { petsGet, getAPet, postAPet, updatePets } = require("../../../api/v1/pets/controllers/pets");

const router = require("express").Router();

router.get('/', petsGet);
router.get('/:id', getAPet);
router.post('/', postAPet);
router.put('/:id', updatePets);

module.exports = router;