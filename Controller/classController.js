const express = require("express");

exports.getClasses = (req, res, next) => {
    res.json({ data: "get / all classes" });
};

exports.insertClasses = (req, res, next) => {
    res.json({ data: "post / all classes", input: req.body });
};

exports.updateClasses = (req, res, next) => {
    res.json({ data: "put / all classes", input: req.body });
};

exports.deleteClasses = (req, res, next) => {
    res.json({ data: "delete / all classes", input: req.body });
};

exports.getClassById = (req, res, next) => {
    res.json({ data: "get / specific class by id", id: req.params["id"] });
};

exports.getClassByStudentId = (req, res, next) => {
    res.json({ data: "get / specific class of child with id", id: req.params["id"] });
};

exports.getClassByTeacherId = (req, res, next) => {
    res.json({ data: "get / specific class of teacher with id", id: req.params["id"] });
};