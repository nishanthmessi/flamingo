const UserController = require("../controllers/user.controller")
const UserMiddleware = require("../middlewares/user.middleware")

const routes = (app) => {
  app.post("/api/auth/signup",
    UserMiddleware.validateSignupRequest,
    UserController.signUp
  )

  app.post("/api/auth/signin", 
    UserMiddleware.validateSigninRequest,
    UserController.signIn
  )

  app.get("/api/user/:id",
    UserController.getUserById
  )
}

module.exports = routes