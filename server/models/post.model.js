const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: false
  }
}, {timestamps: true})

const Post = mongoose.model("Post", postSchema)
module.exports = Post

// posts: {
//   type: Schema.Types.ObjectId,
//   ref: "User"
// }