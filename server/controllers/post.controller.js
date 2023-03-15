const PostServices = require("../services/post.service")
const { STATUS } = require("../utils/statuscodes")

const createPost = async (req, res) => {
  try {
    const response = await PostServices.createPost(req.body)
    return res.status(STATUS.CREATED).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
    console.log(error)
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

module.exports = { createPost, getPosts }