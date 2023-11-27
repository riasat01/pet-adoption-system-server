const {callToActionGet, callToActionPost} = require("../../../api/v1/call-to-action/controllers/callToAction")
const router = require("express").Router();

router.get('/call-to-action', callToActionGet);
router.post('/call-to-action', callToActionPost);
module.exports = router;