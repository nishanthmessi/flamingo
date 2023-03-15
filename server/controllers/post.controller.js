const PostServices = require("../services/post.service")
const { STATUS } = require("../utils/statuscodes")

const createPost = async (req, res) => {
  try {
    const response = await PostServices.createPost(req.body)
    return res.status(STATUS.CREATED).json(response)
  } catch (error) {
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

const getPosts = async (req, res) => {
  try {
    const response = await PostServices.getPosts(req.query)
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

const deletePost = async (req, res) => {
  try {
    const response = await PostServices.deletePost(req.params.id)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

module.exports = { createPost, getPost, getPosts, updatePost, deletePost }