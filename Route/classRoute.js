const express = require("express");
const router = express.Router();
const controller = require("../Controller/classController");
const { bodyValidate, paramValidate } = require("../MiddleWare/Validation/ClassValidation");
const validator = require("../MiddleWare/Validation/Validator");

/**
 * @swagger
 * tags:
 *   name: Class
 *   description: API endpoints for managing classes
 */

/**
 * @swagger
 * /class:
 *   get:
 *     summary: Get all classes
 *     tags: [Class]
 *     responses:
 *       200:
 *         description: Returns an array of classes
 *   post:
 *     summary: Create a new class
 *     tags: [Class]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: Successfully created a new class
 *       400:
 *         description: Invalid request body
 *   put:
 *     summary: Update a class
 *     tags: [Class]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: Successfully updated the class
 *       400:
 *         description: Invalid request body
 *   delete:
 *     summary: Delete all classes
 *     tags: [Class]
 *     responses:
 *       200:
 *         description: Successfully deleted all classes
 */

router.route("/class")
    .get(controller.getClasses)
    .post(bodyValidate, validator, controller.insertClasses)
    .put(bodyValidate, validator, controller.updateClasses)
    .delete(controller.deleteClasses);

/**
 * @swagger
 * /class/{id}:
 *   get:
 *     summary: Get a class by ID
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the class with the specified ID
 *       404:
 *         description: Class not found
 */

router.route("/class/:id")
    .get(controller.getClassById);

/**
 * @swagger
 * /class/child/{id}:
 *   get:
 *     summary: Get students by class ID
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns an array of students in the specified class
 *       404:
 *         description: Class not found
 */

router.route("/class/child/:id")
    .get(controller.getStudentByClassId);

/**
 * @swagger
 * /class/teacher/{id}:
 *   get:
 *     summary: Get teacher by class ID
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the teacher of the specified class
 *       404:
 *         description: Class not found
 */

router.route("/class/teacher/:id")
    .get(controller.getTeacherByClassId);

module.exports = router;