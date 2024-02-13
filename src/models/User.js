const { Module } = require("module")
const mongoose = require("../config/db")

const userSchema = new mongoose.Schema({
    firstName: String,
    username: String,
    email: String,
    password: String,
})

const User = mongoose.model("User", userSchema)

module.exports = User