const removeToken = require("../../../api/v1/authentication/removeToken");

const router = require("express").Router();

router.post('/', removeToken);

module.exports = router;