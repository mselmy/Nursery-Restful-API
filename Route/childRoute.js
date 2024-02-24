const express = require("express");
const controller = require("../Controller/childController");
const { bodyValidate, paramValidate } = require("../MiddleWare/Validation/ChildValidation");
const validator = require("../MiddleWare/Validation/Validator");
const {isAdmin} = require("../MiddleWare/AuthenticationMW");

/**
 * @swagger
 * tags:
 *   name: Child
 *   description: API endpoints for managing children
 */

const router = express.Router();
/**
 * @swagger
 * /child:
 *   get:
 *     summary: Get all children
 *     tags: [Child]
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 *
 *   post:
 *     summary: Insert a new child
 *     tags: [Child]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Child'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 *
 *   put:
 *     summary: Update a child
 *     tags: [Child]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Child'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Delete a child
 *     tags: [Child]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.route("/child")
    .get(controller.getAllChildren)
    .post(isAdmin, bodyValidate, validator, controller.insertChildren)
    .put(isAdmin, bodyValidate, validator, controller.updateChildren)
    .delete(isAdmin, controller.deleteChildren);

/**
 * @swagger
 * /child/{id}:
 *   get:
 *     summary: Get a child by ID
 *     tags: [Child]
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
 *       500:
 *         description: Internal Server Error
 */
router.route("/child/:id")
    .get(paramValidate, validator, controller.getChildById);

module.exports = router;