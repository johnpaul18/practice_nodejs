const { Posts, Likes } = require("./../models");

exports.getPosts = async (req, res) => {
  const posts = await Posts.findAll({ include: [Likes] });
  res.json({ posts, liker: req.user.id });
};

exports.getPost = async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
};

exports.createPosts = async (req, res) => {
  const { title, postText } = req.body;
  const { id, username } = req.user;
  await Posts.create({ title, postText, userName: username, UserId: id });
  res.json({ title, postText, username });
};

exports.deletePost = async (req, res) => {
  await Posts.destroy({ where: { id: req.params.id } });
  res.json("success");
};
