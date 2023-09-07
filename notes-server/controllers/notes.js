const notesRouter = require("express").Router();
const Note = require("../models/note");
const User = require("../models/user");
const { authMiddleware } = require("../utils/middleware");

notesRouter.get("/", async (request, response) => {
  let result = await Note.find({}).populate("user", {
    username: 1,
    name: 1,
  });
  response.json(result);
});

notesRouter.get("/:id", (request, response, next) => {
  Note.findById(request.params.id)
    .then((result) => {
      if (result) {
        response.json(result);
      } else {
        response.status(404).send(`There are no notes at ${request.params.id}`);
      }
    })
    .catch((e) => {
      next(e);
    });
});

notesRouter.put("/:id", (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(request.params.id, note, {
    new: true,
    runValidators: true,
  })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

notesRouter.delete("/:id", (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

notesRouter.post("/", authMiddleware, async (request, response, next) => {
  const body = request.body;
  try {
    const user = await User.findById(body.user);
    const note = new Note({
      content: body.content,
      important: body.important || false,
      user: user._id,
    });
    const savedNote = await note.save();
    response.status(201).json(savedNote);
    user.notes = user.notes.concat(savedNote.id);
    await user.save();
  } catch (e) {
    next(e);
  }
});

module.exports = notesRouter;
