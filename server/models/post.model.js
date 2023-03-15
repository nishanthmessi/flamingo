const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
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