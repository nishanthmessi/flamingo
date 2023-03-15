const UserService = require("../services/user.service")
const { STATUS } = require("../utils/statuscodes")
const jwt = require("jsonwebtoken")

const signUp = async (req, res) => {
  try {
    const response =  await UserService.createUser(req.body)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

const signIn = async (req, res) => {
  try {
    const user = await UserService.getUserByEmail(req.body.email)
    const isValidPassword = await user.isValidPassword(req.body.password)
    if(!isValidPassword) {
      throw {err: 'Invalid password for the given email', code: 401};
    }

    const token = jwt.sign(
      {id:user.id, email: user.email},
      process.env.AUTH_KEY,
      {expiresIn: "24h"}
    )

    const response = {
      email: user.email,
      token: token
    }
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(error)
  }
}

module.exports = { signUp, signIn }
