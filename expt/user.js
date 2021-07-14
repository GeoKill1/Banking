// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    // Simple declaration of datatype that will be used:
    name: String,
    // You can add specifics to each one too that help with validation, like making something required, or unique
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    emailAddress: [String],
    // Add 'enum' of an array of options to force selection between a given number of options.
    // Anything other than "male" or "female" will be invalid.
    gender: {
        type: String,
        enum: ["male", "female", "non-binary"]
    },
    admin: Boolean,
    location: String
});

// Turn the schema you created into a "Model".
// mongoose.model("ModelNameSingular", modelSchema);
// "ModelNameSingular" will automatically be pluralized for you, and that pluralized version of the model name will also become the name of the MongoDB collection.

module.exports = mongoose.model("User", userSchema);