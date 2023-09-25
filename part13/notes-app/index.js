require("dotenv").config();
const { Sequelize, Model, QueryTypes, DataTypes } = require("sequelize");
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
    const reponse = await Note.create(newNote);
    res.json(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
