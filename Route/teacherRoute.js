const express = require("express");
const router = express.Router();
const controller = require("../Controller/teacherController")
const { bodyValidate, paramValidate } = require("../MiddleWare/Validation/TeacherValidation");
const validator = require("../MiddleWare/Validation/Validator");
const { isAdmin } = require("../MiddleWare/AuthenticationMW");

router.route("/teachers")
    .all(isAdmin)
    .get(controller.getAllTeachers)
    .put(bodyValidate, validator, controller.updateTeachers)
    .delete(controller.deleteTeacher);

router.route("/teachers/supervisors")
    .get(controller.getSupervisorTeachers);

router.route("/teachers/changePassword")
    .put(controller.changePassword);

router.route("/teachers/:id")
    .get(paramValidate, validator, controller.getTeacherById);

module.exports = router;