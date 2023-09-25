require("dotenv").config();
const { Sequelize, Model, DataTypes } = require("sequelize");
const express = require("express");
const app = express();

const PORT = process.env.PORT ? process.env.PORT : 3002;

app.use(express.json());

const sequelize = new Sequelize(process.env.DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

class Note extends Model {}
Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    important: {
      type: DataTypes.BOOLEAN,
    },
    date: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "note",
  }
);

// this creates DB if it does not exists
Note.sync();

app.get("/api/notes", async (req, res) => {
  const notes = await Note.findAll();
  res.status(200).json(notes);
});

app.get("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const note = await Note.findByPk(id);
  res.status(200).json(note);
});

app.post("/api/notes", async (req, res) => {
  const newNote = req.body;
  try {
    const data = await Note.create(newNote);
    res.json(data);
  } catch (error) {
    res.status(400).send({ error });
  }
});

app.put("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Note.findByPk(id);
    if (note) {
      note.important = req.body.important;
      await note.save();
      res.json(note);
    } else {
      res.status(401).json({ error: "requested note not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
