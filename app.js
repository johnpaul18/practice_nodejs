const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routers
const postRouter = require("./routes/Posts");
const commentRouter = require("./routes/Comments");
const userRouter = require("./routes/Users");
const likeRouter = require("./routes/Likes");

app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/auth", userRouter);
app.use("/likes", likeRouter);

module.exports = app;
