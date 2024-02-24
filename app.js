// require all variables
const express = require("express");
const morgan = require("morgan");
const server = express();
const port = process.env.Port || 8080;
const childRoute = require("./Route/childRoute");
const teacherRoute = require("./Route/teacherRoute");
const classRoute = require("./Route/classRoute");
require("dotenv").config();
const mongoose = require("mongoose");
const upload = require("./MiddleWare/MulterMW");
const { insertNewTeachers } = require("./Controller/teacherController");
const { bodyValidate } = require("./MiddleWare/Validation/TeacherValidation");
const validator = require("./MiddleWare/Validation/Validator");
const authenticateRoute = require("./Route/authenticateRoute");
const authenticationMW = require("./MiddleWare/AuthenticationMW");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require("./Swagger/swaggerSpec");

// connect to mongo DB
mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log("Connected to mongo database...");
        server.listen(port, () => {
            console.log("Server is running on port " + port);
        })
    })
    .catch((error) => {
        console.log("Error can't connect to the server", error);
    });

// require all middlewares
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(upload.single("image"));
server.use(morgan("dev"));


// Register teachers first
/**
 * @swagger
 * /teachers:
 *   post:
 *     summary: Register a new teacher
 *     tags: [Teachers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: Teacher registered successfully
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */
server.post('/teachers', bodyValidate, validator, insertNewTeachers);

// authenticate route
server.use(authenticateRoute);
server.use(authenticationMW);

// routes
server.use(childRoute);
server.use(teacherRoute);
server.use(classRoute);

/////////////////////////////Page not found error//////////////////////////
server.use((req, res) => {
    res.status(404).json({ message: "Page Not Found" });
})
/////////////////////////////catch all errors/////////////////////////////
server.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
})