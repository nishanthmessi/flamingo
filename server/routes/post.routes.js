const postMiddleware = require("../middlewares/post.middleware")
const postController = require("../controllers/post.controller")

const routes = (app) => {
  app.post(
    "/api/post/create",
    postMiddleware.validatePost,
    postController.createPost
  )
  app.get("/api/posts", postController.getPosts)
  app.get("/api/post/:id", postController.getPost)
  app.get("/api/posts/:userId", postController.getPostByUserId)
  app.patch("/api/postlikes/:postId", postController.updateLikes)
  app.delete("/api/post/:id", postController.deletePost)
}

module.exports = routes
