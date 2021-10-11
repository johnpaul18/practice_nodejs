const express = require("express");
const router = express.Router();
const {
  getComments,
  createComments,
  deleteComments,
} = require("./../controllers/commentsController");
const validateToken = require("./../middlewares/AuthMiddleware");

router.route("/:postId").get(getComments).post(validateToken, createComments);

router.route("/:commentId").delete(validateToken, deleteComments);

module.exports = router;
