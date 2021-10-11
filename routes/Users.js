const authController = require("./../controllers/authController");
const express = require("express");
const router = express.Router();
const validateToken = require("./../middlewares/AuthMiddleware");

router.route("/").post(authController.signup);
router.route("/signin").post(authController.signin);
router.route("/auth").get(validateToken, authController.auth);

module.exports = router;
