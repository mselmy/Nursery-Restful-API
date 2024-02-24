// require all variables
const mongoose = require("mongoose");
//const { autoInc } = require('auto-increment-group');

// create teacher schema
const Schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

// create a model
const teacher = mongoose.model("Teacher", Schema);

/*// auto increment
Schema.plugin(autoInc, {
    field: "id",
    startAt: 1,
    unique: true
});*/

// export the model
module.exports = teacher;

