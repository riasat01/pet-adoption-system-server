const getToken = require("../../../api/v1/authentication/controllers/getToken");

const router = require("express").Router();

router.post('/', getToken);

module.exports = router;