const UserController = require("../controllers/user.controller")
const UserMiddleware = require("../middlewares/user.middleware")

const routes = (app) => {
  app.post(
    "/api/auth/signup",
    UserMiddleware.validateSignupRequest,
    UserController.signUp
  )

  app.post(
    "/api/auth/signin",
    UserMiddleware.validateSigninRequest,
    UserController.signIn
  )

  app.get("/api/user/:id", UserController.getUserById)

  app.get("/api/users", UserController.getAllUsers)
}

module.exports = routes
