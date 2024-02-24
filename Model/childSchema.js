// require all variables
const mongoose = require("mongoose");
//const { autoInc } = require('auto-increment-group');

// Define the Address sub-schema
const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    building: {
        type: String,
        required: true,
    },

}, { _id: false });

// create child schema
const Schema = new mongoose.Schema({
    _id: {
        type: Number,
         unique: true,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    level: {
        type: String,
        required: true,
        enum: ['PreKG', 'KG1', 'KG2']
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    address: {
        type: addressSchema,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

// create a model
const Child = mongoose.model("Child", Schema);

/*// auto increment
Schema.plugin(autoInc, {
    field: "id",
    startAt: 1,
    unique: true
});*/

// export the model
module.exports = Child;