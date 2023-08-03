const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.e1nz5ox.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

app.get("/api/notes", (req, res) => {
  Note.find({}).then((result) => {
    res.json(result);
  });
});

app.get("/api/notes/:id", (req, res) => {
  const myId = req.params.id;
  Note.findById(myId).then((result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: `No value with ${myId} exists` });
    }
  });
});

app.put("/api/notes/:id", (req, res) => {
  const myId = req.params.id;
  const updatedNote = req.body;
  Note.findByIdAndUpdate(myId, updatedNote)
    .then((result) => {
      res.status(200).json(updatedNote);
    })
    .catch((err) => console.log(err));
});

app.delete("/api/notes/:id", (req, res) => {
  const myId = req.params.id;
  Note.findByIdAndDelete(myId).then((result) => {
    res.status(204).json({ status: "Deletetion successful" });
  });
});

app.post("/api/notes", (req, res) => {
  const myNewPost = new Note(req.body);
  myNewPost.save().then((result) => {
    res.status(201).json(result);
    mongoose.connection.close();
  });
});

const PORT = process.env.PORT ? process.env.PORT : 8080;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
