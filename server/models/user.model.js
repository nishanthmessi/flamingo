const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

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

// Password hashing
userSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

// Password Validataion
userSchema.methods.isValidPassword = async function (plainPassword) {
  const currentUser = this;
  const compare = await bcrypt.compare(plainPassword, currentUser.password);
  return compare;
}

const User = mongoose.model("User", userSchema)
module.exports = User