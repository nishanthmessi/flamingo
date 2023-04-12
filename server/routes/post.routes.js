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
  app.get("/api/saved_posts/ids/:userId", postController.getSavedPostsId)
  app.get("/api/saved_posts/:userId", postController.getSavedPosts)
  app.patch("/api/likes/:postId", postController.updateLikes)
  app.patch("/api/comment/:postId", postController.createComment)
  app.put("/api/save_post", postController.updateSavedPost)
  app.put("/api/remove_post", postController.deleteSavedPost)
  app.delete("/api/post/:id", postController.deletePost)
}

module.exports = routes
