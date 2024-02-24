const express = require("express");
const router = express.Router();
const controller = require("../Controller/childController");


router.route("/child")
    .get(controller.getAllChildren)
    .post(controller.insertChildren)
    .put(controller.updateChildren)
    .delete(controller.deleteChildren);

router.route("/child/:id")
    .get(controller.getChildById);

module.exports = router;