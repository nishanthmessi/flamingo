const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  profileImage: {
    type: String,
    required: false
  }
}, {timestamps: true})

const User = mongoose.model("User", userSchema)
module.exports = User