const UserService = require("../services/user.service")
const { STATUS } = require("../utils/statuscodes")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const signUp = async (req, res) => {
  try {
    const response = await UserService.createUser(req.body)

    const token = jwt.sign(
      { id: response.id, email: response.email },
      process.env.AUTH_KEY,
      {
        expiresIn: "48h",
      }
    )

    const userData = {
      id: response._id,
      token,
    }

    return res.status(STATUS.OK).json(userData)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const signIn = async (req, res) => {
  try {
    const user = await UserService.getUserByEmail(req.body.email)
    // const isValidPassword = await user.isValidPassword(req.body.password)

    const verifyPassword = await bcrypt.compare(
      req.body.password,
      user.password
    )

    if (!verifyPassword) {
      throw { err: "Invalid password for the given email", code: 401 }
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.AUTH_KEY,
      {
        expiresIn: "7d",
      }
    )

    const response = {
      id: user.id,
      token: token,
    }
    return res.status(STATUS.OK).send(response)
  } catch (error) {
    console.log(error)
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const getUserById = async (req, res) => {
  try {
    const response = await UserService.getUserById(req.params.id)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const response = await UserService.getUsers(req.query)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const getRandomUsers = async (req, res) => {
  try {
    const response = await UserService.getRandomUsers(req.query)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const updateUser = async (req, res) => {
  try {
    const response = await UserService.updateUser(req.params.id, req.body)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

module.exports = {
  signUp,
  signIn,
  getUserById,
  getAllUsers,
  getRandomUsers,
  updateUser,
}
