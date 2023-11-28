const { getAdopted, postAdoption } = require("../../../api/v1/adoption/controllers/adoption");

const router = require("express").Router();

router.get('/:email', getAdopted);
router.post('/', postAdoption);

module.exports = router;