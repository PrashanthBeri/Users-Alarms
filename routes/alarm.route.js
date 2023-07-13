const router = require('express').Router();
const alarmController = require("../controller/alarm.controller");

router.get('/', alarmController.getAlarm);
router.post('/', alarmController.createAlarm);

module.exports = router;