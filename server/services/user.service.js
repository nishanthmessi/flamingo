const User = require("../models/user.model")
const { STATUS } = require("../utils/statuscodes")

const createUser = async (data) => {
  try {
    const response = await User.create(data)
    return response
  } catch (error) {
    console.log(error)
    throw {err: "Unable to create user", code: STATUS.UNPROCESSABLE_ENTITY}
  }
}

const getUsers = async (filter) => {
  let query = {}

  try {
    if(filter.id) {
      query.id = filter.id
    }   
    const posts = await User.find(query)
    return posts
  } catch (error) {
    console.log(error)
    throw { err: "Unable to get users", code: STATUS.NOT_FOUND }
  }
}

const getUserByName = async (name) => {
  try {
    const response = await User.findOne({ name: name })
    return response
  } catch (error) {
    console.log(error)
    throw { err: "Unable to get user", code: STATUS.NOT_FOUND }
  }
}

const getUserByEmail = async (email) => {
  try {
    const response = await User.findOne({ email: email })
    return response
  } catch (error) {
    console.log(error)
    throw { err: "Unable to get user", code: STATUS.NOT_FOUND }
  }
}

module.exports = { createUser, getUsers, getUserByName, getUserByEmail}