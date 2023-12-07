const mongoose = require("mongoose")

// creating user schema for adding in DB 
const userScheme = new mongoose.Schema({
  name: { type: String, require: true, minLength: 3, maxLength: 30 },
  email: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 1024,
  },
})

const User = mongoose.model("User", userScheme)

exports.User = User
