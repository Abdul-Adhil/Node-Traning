const fs = require("fs");

function readFile(username) {
  const path = `./data/tasks/${username}.json`;
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, "utf8");
    return data;
  } else {
    fs.writeFileSync(path, "[]", (err) => {
      console.log(err);
    });
    const data = fs.readFileSync(path, "utf8");
    return data;
  }
}

function writeFileOperation(username, data) {
  const path = `./data/tasks/${username}.json`;
  fs.writeFileSync(path, JSON.stringify(data));
}
module.exports = { readFile, writeFileOperation };
