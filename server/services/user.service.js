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

const getUserById = async (id) => {
  try {
    const user = await User.findById(id)
    if(!user) {
      throw {err: "No user found for the given id", code: 404};
    }
    return user
  } catch (error) {
    console.log(error)
    throw { err: "Unable to get user", code: STATUS.NOT_FOUND }
  }
}

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email })
    return user
  } catch (error) {
    console.log(error)
    throw { err: "Unable to get user", code: STATUS.NOT_FOUND }
  }
}

module.exports = { createUser, getUsers, getUserById, getUserByEmail}