const { getAdopted, postAdoption, makeAdopted, deleteRequest } = require("../../../api/v1/adoption/controllers/adoption");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get('/:email', verifyToken, getAdopted);
router.put('/:id', verifyToken, makeAdopted);
router.post('/', verifyToken, postAdoption);
router.delete('/:id', verifyToken, deleteRequest)

module.exports = router;