const jwt = require("jsonwebtoken");
const loginRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

const { SECRET_KEY } = require("../utils/config");

loginRouter.post("/", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(passwordCorrect && user)) {
      res.status(401).json({ error: "invalid username or password" });
    }
    const userForToken = {
      username: user.username,
      id: user._id,
    };
    const token = jwt.sign(userForToken, SECRET_KEY, { expiresIn: 60 * 60 });

    res.status(200).json({ token, username: user.username, name: user.name });
  } catch (err) {
    next(err);
  }
});

module.exports = loginRouter;
