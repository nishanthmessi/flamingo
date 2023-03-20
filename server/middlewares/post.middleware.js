const { STATUS } = require("../utils/statuscodes")

const validatePost = (req, res, next) => {
  if (!req.body.description && !req.body.mediaUrl) {
    return res.status(STATUS.BAD_REQUEST).json()
  }
  next()
}

module.exports = { validatePost }
