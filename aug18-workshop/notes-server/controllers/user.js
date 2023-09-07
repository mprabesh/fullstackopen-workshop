const userRoute = require("express").Router();
const User = require("../models/user");

userRoute.get("/", async (req, res) => {
  try {
    const result = await User.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

userRoute.post("/", async (req, res) => {
  const { username, name, password } = req.body;
  try {
    if (username && name && password) {
      const newUser = new User({
        username,
        name,
        password,
      });
      const result = await newUser.save();
      res.status(200).json(result);
    } else {
      res.status(400).json({ error: "content missing" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

userRoute.put("/:id", async (req, res) => {
  const myId = req.params.id;
  const updateObj = req.body;
  try {
    const result = await User.findByIdAndUpdate(myId, updateObj, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = userRoute;
