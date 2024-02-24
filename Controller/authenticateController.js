// reqire variables
const jwt = require("jsonwebtoken");
const admin = require("../Model/adminSchema");
const teacher = require("../Model/teacherSchema");

// teacher login
exports.teacherLogin = (req, res, next) => {
    teacher.findOne({ email: req.body.email, password: req.body.password })
        .then((teacher) => {
            if (!teacher) {
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
};

// admin login
exports.adminLogin = (req, res, next) => {
    admin.findOne({ userName: req.body.userName, password: req.body.password })
        .then((admin) => {
            if (!admin) {
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
};