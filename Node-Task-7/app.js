const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const corsOptions = require("./middleware/crossDomain");
const logger = require("./config/logger.config");
const auth = require("./middleware/auth");
const task = require("./routes/tasks.routes");
const users = require("./routes/users.routes");
require("dotenv").config();
const app = express();

////middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/users", users);
app.use("/tasks", auth.verifyToken, task);

app.get("/", (req, res) => {
  res.send("Welcome To Listify");
});

// app.listen(process.env.PORT, () => {
//   logger.info("Server is Running on " + process.env.PORT);
//   console.log("Server is Running on " + process.env.PORT);
// });

// http://localhost:4000/tasks?sort=priority

// http://localhost:4000/tasks?title=games3&priority=medium

module.exports = app;
