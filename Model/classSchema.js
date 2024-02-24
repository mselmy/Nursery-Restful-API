// require all variables
const mongoose = require("mongoose");
//const { autoInc } = require('auto-increment-group');

// create class a schema
const Schema = new mongoose.Schema({
    _id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
    },
    children: {
        type: [Number],
        ref: "Child",
    }
});

// create a model
const _class = mongoose.model("Class", Schema);

/*// auto increment
Schema.plugin(autoInc, {
    field: "id",
    startAt: 1,
    unique: true
});*/

// export the model
module.exports = _class;