const express = require("express");
const router = express.Router();
const controller = require("../Controller/classController");
const { bodyValidate, paramValidate } = require("../MiddleWare/Validation/ClassValidation");
const validator = require("../MiddleWare/Validation/Validator");


router.route("/class")
    .get(controller.getClasses)
    .post(bodyValidate, validator, controller.insertClasses)
    .put(bodyValidate, validator, controller.updateClasses)
    .delete(controller.deleteClasses);

router.route("/class/:id")
    .get(controller.getClassById);

router.route("/class/child/:id")
    .get(controller.getStudentByClassId);

router.route("/class/teacher/:id")
    .get(controller.getTeacherByClassId);

module.exports = router;