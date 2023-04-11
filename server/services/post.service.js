const Post = require("../models/post.model")
const User = require("../models/user.model")
const { STATUS } = require("../utils/statuscodes")

const createPost = async (postData) => {
  try {
    const post = await Post.create(postData)
    return post
  } catch (error) {
    console.log(error)
    throw { error: "Unable to create post", code: STATUS.UNPROCESSABLE_ENTITY }
  }
}

const getPost = async (id) => {
  try {
    const post = await Post.findById(id)
    return post
  } catch (error) {
    console.log(error)
    throw { error: "Unable to get posts", code: STATUS.NOT_FOUND }
  }
}

const getPosts = async (filter) => {
  let query = {}

  try {
    if (filter.id) {
      query.id = filter.id
    }
    let posts = await Post.find(query)
    return posts
  } catch (error) {
    console.log(error)
    throw { error: "Unable to get posts", code: STATUS.NOT_FOUND }
  }
}

const getPostsByUsername = async (username) => {
  try {
    const response = await Post.find({
      username: username,
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

const getPostsByUserId = async (userId) => {
  try {
    const response = await Post.find({
      userId: userId,
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

const getSavedPostsId = async (userId) => {
  try {
    const user = await User.findById(userId)
    return user
  } catch (error) {
    console.log(error)
  }
}

const getSavedPosts = async (userId) => {
  try {
    const user = await User.findById(userId)
    const savedPosts = await Post.find({
      _id: { $in: user.savedPosts },
    })
    return savedPosts
  } catch (error) {
    console.log(error)
  }
}

const updateLikes = async (postId) => {
  try {
    const post = await Post.findById(postId)
    const updatePost = await Post.findByIdAndUpdate(
      postId,
      { like: post.likes },
      { new: true }
    )
    console.log(updatePost)
    return updatePost
  } catch (error) {
    console.log(error)
  }
}

const createComment = async (postId, userId, comment) => {
  try {
    const post = await Post.findByIdAndUpdate(postId, comment)
    // const user = await User.findById(userId)

    // post.comments.push(user, comment)
    return post
  } catch (error) {
    throw { error: "Unable to save post", code: STATUS.UNPROCESSABLE_ENTITY }
  }
}

const updateSavedPost = async (postId, userId) => {
  try {
    const post = await Post.findById(postId)
    const user = await User.findById(userId)

    user.savedPosts.push(post)
    await user.save()
    return user.savedPosts
  } catch (error) {
    throw { error: "Unable to save post", code: STATUS.UNPROCESSABLE_ENTITY }
  }
}

const removeSavedPost = async (postId, userId) => {
  try {
    const post = await Post.findById(postId)
    const user = await User.findById(userId)

    function removeValue(currentpost, index, arr) {
      // If the value at the current array index matches the specified value (2)
      if (currentpost === post._id) {
        // Removes the value from the original array
        arr.splice(index, 1)
        return true
      }
      return false
    }

    user.savedPosts.filter(removeValue)
    await user.save()
    return user.savedPosts
  } catch (error) {
    throw { error: "Unable to save post", code: STATUS.UNPROCESSABLE_ENTITY }
  }
}

const updatePost = async (id, data) => {
  try {
    const response = await Post.findByIdAndUpdate(id, data)
    return response
  } catch (error) {
    console.log(error)
    throw { error: "Unable to update post", code: STATUS.UNPROCESSABLE_ENTITY }
  }
}

const deletePost = async (id) => {
  try {
    const response = await Post.findByIdAndDelete(id)
    if (!response) {
      throw {
        error: "No Post found for the id provided",
        code: STATUS.NOT_FOUND,
      }
    }
    return response
  } catch (error) {
    console.log(error)
    throw { error: "Unable to delete post", code: STATUS.UNPROCESSABLE_ENTITY }
  }
}

module.exports = {
  createPost,
  getPost,
  getPosts,
  getPostsByUsername,
  getPostsByUserId,
  getSavedPostsId,
  getSavedPosts,
  updateLikes,
  createComment,
  updateSavedPost,
  removeSavedPost,
  updatePost,
  deletePost,
}
