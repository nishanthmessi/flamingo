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
  app.patch("/api/user/:id", UserController.updateUser)
  app.get("/api/users", UserController.getAllUsers)
  app.get("/api/users/random", UserController.getRandomUsers)
}

module.exports = routes
