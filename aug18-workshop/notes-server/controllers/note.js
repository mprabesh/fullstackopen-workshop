const noteRoute = require("express").Router();
const Note = require("../models/note");

noteRoute.get("/", (req, res) => {
  Note.find({})
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

noteRoute.post("/", (req, res) => {
  const { content, important } = req.body;
  if (content) {
    const newNote = new Note({
      content,
      important,
    });
    newNote
      .save()
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => res.status(400).json(err));
  } else {
    console.log(content, important);
    return res.status(400).json({ error: "content missing" });
  }
});

noteRoute.put("/:id", (req, res) => {
  const myId = req.params.id;
  const updateObj = req.body;
  Note.findByIdAndUpdate(myId, updateObj, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

module.exports = noteRoute;
