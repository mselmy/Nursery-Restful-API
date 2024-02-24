const express = require("express");
const router = express.Router();
const controller = require("../Controller/teacherController")
const { bodyValidate, paramValidate } = require("../MiddleWare/Validation/TeacherValidation");
const validator = require("../MiddleWare/Validation/Validator");

router.route("/teachers")
    .get(controller.getAllTeachers)
    .post(bodyValidate, validator, controller.insertNewTeachers)
    .put(bodyValidate, validator, controller.updateTeachers)
    .delete(controller.deleteTeacher);

router.route("/teachers/supervisors")
    .get(controller.getSupervisorTeachers);

router.route("/teachers/:id")
    .get(paramValidate, validator, controller.getTeacherById);

module.exports = router;