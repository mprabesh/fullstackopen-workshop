require("dotenv").config();
const { Sequelize, QueryTypes } = require("sequelize");
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

app.get("/api/notes", async (req, res) => {
  const notes = await sequelize.query("SELECT * FROM notes", {
    type: QueryTypes.SELECT,
  });
  res.status(200).json(notes);
});

app.post("/api/notes", async (req, res) => {
  const newNote = req.body;
  console.log(newNote);
  try {
    const response = await sequelize.query(
      `insert into notes (content, important) values ('${newNote.content}', ${newNote.important})`,
      { type: QueryTypes.INSERT }
    );
    res.json(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
