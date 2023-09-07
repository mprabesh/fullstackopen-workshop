const express = require("express");
const app = express();
const mongoose = require("mongoose");
const noteRoute = require("./controllers/note");
const userRoute = require("./controllers/user");
const { requestLogger, noHandlers } = require("./utils/middlewares");
const { url, PORT } = require("./utils/config");
const info = require("./utils/logger");
const cors = require("cors");

mongoose.set("strictQuery", false);
mongoose
  .connect(url)
  .then(() => {
    info("DB connected successfully!");
  })
  .catch((e) => info(e));

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/api/notes", noteRoute);
app.use("/api/users", userRoute);

app.use(noHandlers);
app.listen(PORT, () => {
  info("Listening to PORT", PORT);
});
