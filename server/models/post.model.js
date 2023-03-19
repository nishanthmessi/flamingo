const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  mediaUrl: {
    type: String,
    required: false
  },
  likes: {
    type: Number,
    required: false
  }
}, {timestamps: true})

const Post = mongoose.model("Post", postSchema)
module.exports = Post

// posts: {
//   type: Schema.Types.ObjectId,
//   ref: "User"
// }