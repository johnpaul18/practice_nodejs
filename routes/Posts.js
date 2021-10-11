const postController = require("./../controllers/postsController");
const validateToken = require("./../middlewares/AuthMiddleware");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(validateToken, postController.getPosts)
  .post(validateToken, postController.createPosts);

router
  .route("/:id")
  .get(postController.getPost)
  .delete(validateToken, postController.deletePost);

module.exports = router;
