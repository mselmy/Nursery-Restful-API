const express = require("express");
const router = express.Router();
const controller = require("../Controller/teacherController")

router.route("/teachers")
    .get(controller.getTeachers)
    .post(controller.insertTeachers)
    .put(controller.updateTeachers)
    .delete(controller.deleteTeacher);

router.route("/teachers/:id")
    .get(controller.getTeacherById);

router.route("/teachers/supervisors")
    .get(controller.getSupervisorTeachers);

module.exports = router;