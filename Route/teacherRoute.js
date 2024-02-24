const express = require("express");
const router = express.Router();
const controller = require("../Controller/teacherController")
const { bodyValidate, paramValidate, changePasswordValidate } = require("../MiddleWare/Validation/TeacherValidation");
const validator = require("../MiddleWare/Validation/Validator");
const { isAdmin } = require("../MiddleWare/AuthenticationMW");

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: API endpoints for managing teachers
 */

/**
 * @swagger
 * /teachers:
 *   get:
 *     summary: Get all teachers
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 *   put:
 *     summary: Update teachers
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *   delete:
 *     summary: Delete a teacher
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 */

router.route("/teachers")
    .all(isAdmin)
    .get(controller.getAllTeachers)
    .put(bodyValidate, validator, controller.updateTeachers)
    .delete(controller.deleteTeacher);

/**
 * @swagger
 * /teachers/supervisors:
 *   get:
 *     summary: Get teachers who are supervisors
 *     tags: [Teachers]
 *     responses:
 *       200:
 *         description: Success
 */

router.route("/teachers/supervisors")
    .get(controller.getSupervisorTeachers);

/**
 * @swagger
 * /teachers/changePassword:
 *   put:
 *     summary: Change teacher's password
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangePassword'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 */

router.route("/teachers/changePassword")
    .put(changePasswordValidate, validator, controller.changePassword);

/**
 * @swagger
 * /teachers/{id}:
 *   get:
 *     summary: Get teacher by ID
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 */

router.route("/teachers/:id")
    .get(paramValidate, validator, controller.getTeacherById);

module.exports = router;