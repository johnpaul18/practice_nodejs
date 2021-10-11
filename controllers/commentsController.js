const { Comments } = require("./../models");
const { Op } = require("sequelize");

exports.getComments = async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { postId } });

  res.json(comments);
};

exports.createComments = async (req, res) => {
  const PostId = req.params.postId;
  const comment = { ...req.body, PostId };
  const username = req.user.username;

  comment.username = username;
  await Comments.create(comment);

  res.json(comment);
};

exports.deleteComments = async (req, res) => {
  try {
    Comments.destroy({
      where: {
        [Op.and]: [
          { id: req.params.commentId },
          { username: req.user.username },
        ],
      },
    });

    res.json({ status: "success" });
  } catch (err) {
    res.json({ status: "failed" });
  }
};
