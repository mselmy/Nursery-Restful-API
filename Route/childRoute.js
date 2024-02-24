const express = require("express");
const router = express.Router();
const controller = require("../Controller/childController");
const { bodyValidate, paramValidate } = require("../MiddleWare/Validation/ChildValidation");
const validator = require("../MiddleWare/Validation/Validator");
const {isAdmin} = require("../MiddleWare/AuthenticationMW");


router.route("/child")
    .get(controller.getAllChildren)
    .post(isAdmin ,bodyValidate, validator, controller.insertChildren)
    .put(isAdmin, bodyValidate, validator, controller.updateChildren)
    .delete(isAdmin, controller.deleteChildren);

router.route("/child/:id")
    .get(paramValidate, validator, controller.getChildById);

module.exports = router;