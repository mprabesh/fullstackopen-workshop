import express from "express";
import { calculator, Operation } from "./calculator";
const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("using TypeScript");
});

app.post("/calculator", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { val1, val2, op } = req.body;
  const result = calculator(Number(val1), Number(val2), op as Operation);
  res.send({ result });
});

app.listen(3001, () => {
  console.log("Listening to port", 3001);
});
