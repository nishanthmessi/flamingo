const { STATUS } = require("../utils/statuscodes")

const validateSignupRequest = async (req, res, next) => {
  // validate name of the user
  if(!req.body.name) {
      const err = "Name of the user not present in the request";
      return res.status(STATUS.BAD_REQUEST).json(err);
  }

  // validate email of the user
  if(!req.body.email) {
      const err = "Email of the user not present in the request";
      return res.status(STATUS.BAD_REQUEST).json(err);
  }

  // validate password present of the user
  if(!req.body.password) {
      const err = "Password of the user not present in the request";
      return res.status(STATUS.BAD_REQUEST).json(err);
  }

  // request is valid
  next();
}

const validateSigninRequest = async (req, res, next) => {
  // validate user email
  if(!req.body.email) {
      const err = "No email provided for sign in";
      return res.status(STATUS.BAD_REQUEST).json(err);
  }

  // validate user password 
  if(!req.body.password) {
      const err = "No password provided for sign in";
      return res.status(STATUS.BAD_REQUEST).json(err);
  }
  // request is valid
  next();
}

const validateUserCreation = (req, res, next) => {
  if(!req.body.username) {
    const error = "Username is required"
    return res.status(STATUS.NOT_FOUND).json(error)
  }
  if(!req.body.name) {
    const error = "Name is required"
    return res.status(STATUS.NOT_FOUND).json(error)
  }
  if(!req.body.email) {
    const error = "Email is required"
    return res.status(STATUS.NOT_FOUND).json(error)
  }
  if(!req.body.password) {
    const error = "Password is required"
    return res.status(STATUS.NOT_FOUND).json(error)
  }

  next()
}

module.exports = { validateSignupRequest, validateSigninRequest, validateUserCreation }