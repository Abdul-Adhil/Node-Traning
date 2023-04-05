const express = require("express");
var cors = require("cors");
const app = express();
const logger = require("./utils/logger")
require("dotenv").config();
const PORT = process.env.PORT;
const fs = require("fs");

const path = "./data/cdw_ace23_buddies.json";
const buddy = require("./routes/buddy");

//middleware
app.use(cors());
app.use("/buddy", buddy);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let corsOptions = {
  origin: ["http://localhost:5501"],
};
//file checking
if (fs.existsSync(path)) {
 logger.info("file exists");
} else {
  logger.error("file not found!");
  fs.writeFileSync(path, "[]");
}

app.get("/", (req, res) => {
  res.send("Welcome buddy");
});

app.listen(PORT, () => {
  logger.info("Server is Walking on " + PORT)
  console.log("Server is Walking on " + PORT);
});
