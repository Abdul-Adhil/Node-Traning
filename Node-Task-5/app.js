const express = require("express");
var cors = require("cors");
const logger = require("./config/logger.config");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const fs = require("fs");

const buddy = require("./routes/buddy.routes");

app.use(cors());

let corsOptions = {
  origin: ["http://localhost:5501"],
};

app.use("/buddies", buddy);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome buddy");
});

app.all(/^\/(.+)/, (req, res) => {
  res.send("Invalid Url please check the url");
});

app.listen(PORT, () => {
  logger.info("Server is Walking on " + PORT);
});
