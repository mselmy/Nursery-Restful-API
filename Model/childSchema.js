// require all variables
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

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
}, { _id: false });

// auto increment
Schema.plugin(AutoIncrement, { id: "childId", inc_field: "_id" });

// create a model
const Child = mongoose.model("Child", Schema);

// export the model
module.exports = Child;