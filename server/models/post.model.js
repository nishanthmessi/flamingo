const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    mediaUrl: {
      type: String,
      required: false,
    },
    likes: {
      type: Number,
      required: false,
      default: 0,
    },
    likedUsers: {
      type: Array,
      required: false,
    },
    comments: [
      {
        type: Object,
        required: false,
      },
    ],
  },
  { timestamps: true }
)

const Post = mongoose.model("Post", postSchema)
module.exports = Post

// posts: {
//   type: Schema.Types.ObjectId,
//   ref: "User"
// }
