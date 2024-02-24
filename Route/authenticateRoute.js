const express = require("express");
const authenticateController = require("../Controller/authenticateController");
const router = express.Router();

router.post("/login", authenticateController.Login);

module.exports = router;