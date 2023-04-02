const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const fs = require("fs");

const path = "./data/cdw_ace23_buddies.json";

const buddy = require("./routes/buddy");

//middleware
app.use("/buddy", buddy);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//file checking
if (fs.existsSync(path)) {
  console.log("file exists");
} else {
  console.log("file not found!");
  fs.writeFileSync(path, "[]");
}
app.get("/", (req, res) => {
  res.send("Welcome buddy");
});

app.listen(PORT, () => {
  console.log("Server is Walking on " + PORT);
});
