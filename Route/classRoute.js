const express = require("express");
const router = express.Router();
const controller = require("../Controller/classController");


router.route("/class")
    .get(controller.getClasses)
    .post(controller.insertClasses)
    .put(controller.updateClasses)
    .delete(controller.deleteClasses);

router.route("/class/:id")
    .get(controller.getClassById);

router.route("/class/child/:id")
    .get(controller.getStudentByClassId);

router.route("/class/teacher/:id")
    .get(controller.getTeacherByClassId);

module.exports = router;