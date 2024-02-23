const express = require("express");


exports.getTeachers = (req, res, next) => {
    res.json({ data: "get / All Teachers" })
};

exports.insertTeachers = (req, res, next) => {
    res.json({ data: "post / New Teacher", input: req.body })
};

exports.updateTeachers = (req, res, next) => {
    res.json({ data: "put / Update Teacher", input: req.body })
};

exports.deleteTeacher = (req, res, next) => {
    res.json({ data: "delete / Delete Teacher", input: req.body })
};

exports.getTeacherById = (req, res, next) => {
    res.json({ data: "get / Get Teacher By Id", id: req.params["id"] })
};

exports.getSupervisorTeachers = (req, res, next) => {
    res.json({ data: "get / Get Supervisor Teachers" })
};