const userController = require("../controller/user.controller");
const router = require('express').Router();

router.get("/users", userController.fetchUsers);
router.get("/", userController.getUser);
router.post("/", userController.createUser);
router.get("/alarms", userController.fetchUsersAlarms);

module.exports = router;