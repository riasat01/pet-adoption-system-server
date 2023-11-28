const {callToActionGet, callToActionPost} = require("../../../api/v1/call-to-action/controllers/callToAction")
const router = require("express").Router();

router.get('/', callToActionGet);
router.post('/', callToActionPost);
module.exports = router;