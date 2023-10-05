import express from "express";
import diaryRouter from "./src/routes/diaries";
const app = express();

const PORT = 3001;

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});
