const express = require("express");
const router = express.Router();
const controller = require("../Controller/childController");
const {bodyValidate, paramValidate} = require("../MiddleWare/Validation/ChildValidation");
const validator = require("../MiddleWare/Validation/Validator");


router.route("/child")
    .get(controller.getAllChildren)
    .post(bodyValidate, validator, controller.insertChildren)
    .put(bodyValidate, validator, controller.updateChildren)
    .delete(bodyValidate, validator, controller.deleteChildren);

router.route("/child/:id")
    .get(paramValidate, validator, controller.getChildById);

module.exports = router;