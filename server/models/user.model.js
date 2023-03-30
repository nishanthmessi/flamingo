const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    bio: {
      type: String,
      required: false,
    },
    profileImage: {
      type: String,
      required: false,
      default:
        "https://firebasestorage.googleapis.com/v0/b/flamingo-react-app.appspot.com/o/images%2Fprofile_images%2Fuser.png?alt=media&token=3e56c8d6-aea4-4031-9e75-9b4294d971f0",
    },
    coverImage: {
      type: String,
      required: false,
    },
    savedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
      },
    ],
  },
  { timestamps: true }
)

// Password hashing
userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

// Password Validataion
userSchema.methods.isValidPassword = async function (plainPassword) {
  const currentUser = this
  const compare = await bcrypt.compare(plainPassword, currentUser.password)
  return compare
}

const User = mongoose.model("User", userSchema)
module.exports = User
