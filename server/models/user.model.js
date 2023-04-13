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
        "https://firebasestorage.googleapis.com/v0/b/flamingo-react-app.appspot.com/o/post-images%2Fuser.png?alt=media&token=0e4d4c80-01ab-4a07-98d4-d6dc46b6545e",
    },
    coverImage: {
      type: String,
      required: false,
      default: "",
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
