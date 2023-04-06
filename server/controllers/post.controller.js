const PostServices = require("../services/post.service")
const { STATUS } = require("../utils/statuscodes")

const createPost = async (req, res) => {
  try {
    const response = await PostServices.createPost(req.body)
    return res.status(STATUS.CREATED).json(response)
  } catch (error) {
    console.log(error)
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const getPost = async (req, res) => {
  try {
    const response = await PostServices.getPost(req.params.id)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const getPostByUsername = async (req, res) => {
  try {
    const response = await PostServices.getPostsByUsername(req.params.username)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const getPostByUserId = async (req, res) => {
  try {
    const response = await PostServices.getPostsByUserId(req.params.userId)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const getPosts = async (req, res) => {
  try {
    const response = await PostServices.getPosts(req.query)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const getSavedPostsId = async (req, res) => {
  try {
    const response = await PostServices.getSavedPostsId(req.params.userId)
    return res.status(STATUS.OK).json({ savedPosts: response?.savedPosts })
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const getSavedPosts = async (req, res) => {
  try {
    const response = await PostServices.getSavedPosts(req.params.userId)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const updatePost = async (req, res) => {
  try {
    const response = await PostServices.updatePost(req.params.id, req.body)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const updateLikes = async (req, res) => {
  try {
    const response = await PostServices.updateLikes(req.params.postId)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    console.log(error)
  }
}

const updateSavedPost = async (req, res) => {
  try {
    const response = await PostServices.updateSavedPost(
      req.body.postId,
      req.body.userId
    )
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const deleteSavedPost = async (req, res) => {
  try {
    const response = await PostServices.removeSavedPost(
      req.body.postId,
      req.body.userId
    )
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    console.log(error)
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const deletePost = async (req, res) => {
  try {
    const response = await PostServices.deletePost(req.params.id)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

module.exports = {
  createPost,
  getPost,
  getPosts,
  getPostByUsername,
  getPostByUserId,
  getSavedPostsId,
  getSavedPosts,
  updatePost,
  updateLikes,
  updateSavedPost,
  deleteSavedPost,
  deletePost,
}
