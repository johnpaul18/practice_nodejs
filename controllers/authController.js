const { Users } = require("./../models");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  await Users.create({
    username,
    password: hashedPassword,
  });

  res.json({ state: "SUCCESS" });
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    res.json({ error: "type your username or password" });

  const user = await Users.findOne({ where: { username } });

  if (!user) res.json({ error: "user doesn't exist" });

  const isAuthenticated = await bcrypt.compare(password, user.password);

  if (isAuthenticated) {
    console.log(process.env.TOKEN);
    const accessToken = sign(
      { username: user.username, id: user.id },
      process.env.TOKEN
    );
    res.json({ accessToken, username: user.username, id: user.id });
  } else res.json({ error: "WRONG USERNAME OR PASSWORD" });
};

exports.auth = async (req, res) => {
  res.json(req.user);
};
