const Post = require("../models/post.model")
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
  updateLikes,
  updatePost,
  deletePost,
}
