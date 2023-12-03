const { payment } = require("../../../api/v1/payment/controllers/payment");

const router = require("express").Router();

router.post('/', payment);

module.exports = router;