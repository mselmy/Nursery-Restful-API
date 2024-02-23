const express = require("express");

exports.getStudents = (req, res, next) => {
    res.json({ data: "get / all childs" });
};

exports.insertStudents = (req, res, next) => {
    res.json({ data: "post / all childs", input: req.body });
};

exports.updateStudents = (req, res, next) => {
    res.json({ data: "put / all childs", input: req.body });
};

exports.deleteStudents = (req, res, next) => {
    res.json({ data: "delete / all childs", input: req.body });
};

exports.getStudentById = (req, res, next) => {
    res.json({ data: "get / child with spesific id", id: req.params["id"] });
};