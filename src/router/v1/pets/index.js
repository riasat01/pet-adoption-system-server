const { petsGet, getAPet, postAPet } = require("../../../api/v1/pets/controllers/pets");

const router = require("express").Router();

router.get('/pets', petsGet);
router.get('/pets/:id', getAPet);
router.post('/pets', postAPet);

module.exports = router;