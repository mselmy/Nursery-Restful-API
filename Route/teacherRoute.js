const express = require("express");
const router = express.Router();
const controller = require("../Controller/teacherController")
const upload = require("../MiddleWare/MulterMW");

router.route("/teachers")
    .get(controller.getAllTeachers)
    .post(controller.insertNewTeachers)
    .put(controller.updateTeachers)
    .delete(controller.deleteTeacher);

router.route("/teachers/supervisors")
    .get(controller.getSupervisorTeachers);

router.route("/teachers/:id")
    .get(controller.getTeacherById);

module.exports = router;