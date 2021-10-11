const { likes } = require("./../controllers/likesController");
const validateToken = require("./../middlewares/AuthMiddleware");

const express = require("express");
const router = express.Router();

router.route("/:postId").post(validateToken, likes);

module.exports = router;
