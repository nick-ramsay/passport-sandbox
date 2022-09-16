const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    message: { type: String },
    created_date: {type: Date}
})

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;