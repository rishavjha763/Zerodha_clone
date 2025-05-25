const { Schema } = require("mongoose");
const User = new Schema({
    name: String,
    email:String,
 
});

module.exports = { User };
