const User = require("../models/user.model")
const { STATUS } = require("../utils/statuscodes")

const createUser = async (data) => {
  try {
    const response = await User.create(data)
    return response
  } catch (error) {
    console.log(error)
    throw { err: "Unable to create user", code: STATUS.UNPROCESSABLE_ENTITY }
  }
}

const getUsers = async (filter) => {
  let query = {}

  try {
    if (filter.id) {
      query.id = filter.id
    }
    const users = await User.find(query)
    return users
  } catch (error) {
    console.log(error)
    throw { err: "Unable to get users", code: STATUS.NOT_FOUND }
  }
}

const getRandomUsers = async (filter) => {
  let query = {}

  try {
    if (filter.id) {
      query.id = filter.id
    }
    const selected = []
    const users = await User.find(query)

    while (selected.length < 3) {
      const randomIndex = Math.floor(Math.random() * users.length)
      const randomElement = users[randomIndex]

      if (!selected.includes(randomElement)) {
        selected.push(randomElement)
      }
    }
    return selected
  } catch (error) {
    console.log(error)
    throw { err: "Unable to get users", code: STATUS.NOT_FOUND }
  }
}

const getUserById = async (id) => {
  try {
    const user = await User.findById(id)
    if (!user) {
      throw { err: "No user found for the given id", code: 404 }
    }
    return user
  } catch (error) {
    console.log(error)
    throw { err: "Unable to get user", code: STATUS.NOT_FOUND }
  }
}

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email.toLowerCase() })
    return user
  } catch (error) {
    console.log(error)
    throw { err: "Unable to get user", code: STATUS.NOT_FOUND }
  }
}

const updateUser = async (userId, data) => {
  try {
    const user = await User.findByIdAndUpdate(userId, data)
    return user
  } catch (error) {
    throw { err: "Unable to update user", code: STATUS.NOT_FOUND }
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  getRandomUsers,
  updateUser,
}
