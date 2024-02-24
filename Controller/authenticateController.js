const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const admin = require("../Model/adminSchema");
const teacher = require("../Model/teacherSchema");
require("dotenv").config();

// teacher login
exports.teacherLogin = (req, res, next) => {
    const { email, password } = req.body;
    teacher.findOne({ email })
        .then((teacher) => {
            if (!teacher) {
                let error = new Error("Invalid email or password");
                error.statusCode = 401;
                throw error;
            }
            return bcrypt.compare(password, teacher.password);
        })
        .then((isMatch) => {
            if (!isMatch) {
                let error = new Error("Invalid email or password");
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign(
                {
                    id: teacher._id,
                    fullname: teacher.fullName,
                    role: "teacher",
                },
                process.env.SECRET_KEY,
                { expiresIn: "1h" }
            );
            res.status(200).json({
                message: "Login successful",
                token
            });
        })
        .catch((error) => {
            next(error);
        });
};

// admin login
exports.adminLogin = (req, res, next) => {
    const { userName, password } = req.body;
    admin.findOne({ userName })
        .then((admin) => {
            if (!admin) {
                let error = new Error("Invalid email or password");
                error.statusCode = 401;
                throw error;
            }
            return bcrypt.compare(password, admin.password);
        })
        .then((isMatch) => {
            if (!isMatch) {
                let error = new Error("Invalid email or password");
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign(
                {
                    id: admin._id,
                    fullname: admin.fullName,
                    role: "admin",
                },
                process.env.SECRET_KEY,
                { expiresIn: "1h" }
            );
            res.status(200).json({
                message: "Login successful",
                token
            });
        })
        .catch((error) => {
            next(error);
        });
};
