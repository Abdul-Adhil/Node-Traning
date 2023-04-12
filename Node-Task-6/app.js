const express = require("express");
const cors = require("cors");
const corsOptions = require("./middleware/crossDomain");
const logger = require("./utils/logger");
const task = require("./routes/task");
require("dotenv").config();
const app = express();
console.log(process.argv);

////middleware
app.use(cors(corsOptions));
app.use("/task", task);

app.get("/", (req, res) => {
  res.send("Welcome To Listify");
});

app.listen(PORT, () => {
  logger.info("Server is Running on " + process.env.PORT);
  console.log("Server is Running on " + process.env.PORT);
});
