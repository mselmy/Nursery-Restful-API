const express = require("express");
const router = express.Router();
const controller = require("../Controller/childController");

router.route("/child")
    .get(controller.getStudents)
    .post(controller.insertStudents)
    .put(controller.updateStudents)
    .delete(controller.deleteStudents);

router.route("/child/:id")
    .get(controller.getStudentById);

module.exports = router;