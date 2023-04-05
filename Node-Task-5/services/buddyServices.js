const fs = require("fs");
const logger = require("../utils/logger");
const { error } = require("winston");
const path = "./data/cdw_ace23_buddies.json";

const data = fs.readFileSync(path, "utf8");

//getting all the buddy
function getBuddy() {
  try {
    if (data == null) throw error;
    return data;
  } catch (error) {
    logger.error(`Error while reading the file` + error.message);
  }
}

//Adding buddy
function addBuddy(req) {
  const buddy = req;
  const add = JSON.parse(data);
  add.push(buddy);
  fs.writeFileSync(path, JSON.stringify(add));
  return "Buddy Added";
}

//Single buddy info
function singleBuddy(req, res) {
  const param = req.params.id;
  const get = JSON.parse(data);
  const myBuddy = get.filter((bd) => bd.employeeId == param);

  return myBuddy;
}

//update buddy
function updateBuddy(req) {
  const param = req.params.id;
  const newBuddy = req.body;
  const buddyData = JSON.parse(data);
  const findBuddy = buddyData.findIndex(
    (buddy) => buddy.employeeId === parseInt(param)
  );
  let targetBuddy = buddyData[findBuddy];

  for (const key in newBuddy) {
    targetBuddy[key] = newBuddy[key];
  }
  fs.writeFileSync(path, JSON.stringify(buddyData));
  return "updated the buddy";
}

//delete buddy

function deleteBuddy(req) {
  const param = req.params.id;
  const get = JSON.parse(data);
  const deletedBuddy = get.filter((bd) => bd.employeeId != param);
  fs.writeFileSync(path, JSON.stringify(deletedBuddy));
  return "Buddy deleted";
}
module.exports = {
  getBuddy,
  addBuddy,
  singleBuddy,
  updateBuddy,
  deleteBuddy,
};
