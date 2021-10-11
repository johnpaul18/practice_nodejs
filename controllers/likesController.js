const { Likes } = require("./../models");

exports.likes = async (req, res) => {
  const UserId = req.user.id;
  const PostId = req.params.postId;

  const found = await Likes.findOne({ where: { UserId, PostId } });

  if (!found) await Likes.create({ UserId, PostId });
  else await Likes.destroy({ where: { UserId, PostId } });

  like = await Likes.findAll();

  res.json(like);
};
