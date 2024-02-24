const Class = require("../Model/classSchema");

exports.getClasses = (req, res, next) => {
    Class.find()
        .populate("supervisor")
        .populate("children")
        .then((c) => {
            res.status(200).json(c);
        })
        .catch((error) => {
            next(error);
        });
};

exports.insertClasses = (req, res, next) => {
    const c = new Class(req.body);
    c.save()
        .then((c) => {
            res.status(201).json({
                message: "Class added successfuly",
                c
            })
        }).catch((error) => {
            next(error);
        })
};

exports.updateClasses = (req, res, next) => {
    Class.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then((c) => {
            res.status(200).json({
                message: "class updated successfully",
                c
            });
        })
        .catch((error) => {
            next(error);
        });
};

exports.deleteClasses = (req, res, next) => {
    Class.findByIdAndDelete(req.body._id)
        .then((c) => {
            res.status(200).json({
                message: "class deleted successfully",
                c
            });
        })
        .catch((error) => {
            next(error);
        });
};

exports.getClassById = (req, res, next) => {
    Class.findById(req.params["id"])
        .populate("supervisor")
        .populate("children")
        .then((classes) => {
            if (!classes) throw new Error("Id does not exist");
            res.status(200).json(classes);
        })
        .catch((error) => {
            next(error);
        });
};

exports.getStudentByClassId = (req, res, next) => {
    Class.findById(req.params["id"])
        .populate("children")
        .then((c) => {
            if (!c) throw new Error("Id does not exist");
            res.status(200).json(c.children);
        })
        .catch((error) => {
            next(error);
        });
};

exports.getTeacherByClassId = (req, res, next) => {
    Class.findById(req.params["id"])
        .populate("supervisor")
        .then((c) => {
            if (!c) throw new Error("Id does not exist");
            res.status(200).json(c.supervisor);
        })
        .catch((error) => {
            next(error);
        });
};