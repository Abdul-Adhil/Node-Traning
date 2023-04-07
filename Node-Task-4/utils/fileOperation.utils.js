const fs = require("fs");
const path = "./data/cdw_ace23_buddies.json";

function readFile() {
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

function writeFileOperation(data){
    fs.writeFileSync(path, JSON.stringify(data));


}
module.exports = { readFile , writeFileOperation};
