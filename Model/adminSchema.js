const mongoose = require("mongoose");
//const { autoInc } = require('auto-increment-group');

// create admin schema
const Schema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

// create a model
const admin = mongoose.model("Admin", Schema);

/*// auto increment
Schema.plugin(autoInc, {
    field: "id",
    startAt: 1,
    unique: true
});*/

// export the model
module.exports = admin;