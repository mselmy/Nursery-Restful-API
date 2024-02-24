const express = require("express");
const authenticateController = reqire("../Controller/authenticateController");
const router = express.Router();

router.post("/login", authenticateController.teacherLogin, authenticateController.adminLogin);

module.exports = router;