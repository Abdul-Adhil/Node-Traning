const data = require("../utils/fileOperation.utils");
const response = require("../utils/response.utils");

/**
 *This function is to getting buddy info from database
 * @return {data}
 */
function getBuddy() {
  return data.readFile();
}

//

/**
 *
 *This function is to adding buddy info to database
 * @param {*} req
 * @return {message}
 */
function addBuddy(buddyData) {
  const buddy = buddyData;
  const addBuddy = JSON.parse(data.readFile());
  const checkBuddy = addBuddy.filter((bd) => bd.employeeId == buddy.employeeId);

  if (checkBuddy.length === 0) {
    addBuddy.push(buddy);
    data.writeFileOperation(addBuddy);
    return "Buddy Added to the database";
  } else {
    throw new Error();
  }
}

/**
 *
 *This function is to get Single buddy info from database
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
function singleBuddy(req, res) {
  const param = req.params.id;
  const getSingleBuddy = JSON.parse(data.readFile());
  const myBuddy = getSingleBuddy.filter((bd) => bd.employeeId == param);
  return myBuddy;
}

/**
 *
 *This function is to update  buddy info in database
 * @param {*} req
 * @return {message}
 */
function updateBuddy(req) {
  const param = req.params.id;
  const newBuddy = req.body;
  const buddyData = JSON.parse(data.readFile());
  const findBuddy = buddyData.findIndex(
    (buddy) => buddy.employeeId === parseInt(param)
  );
  let targetBuddy = buddyData[findBuddy];

  for (const key in newBuddy) {
    targetBuddy[key] = newBuddy[key];
  }
  data.writeFileOperation(buddyData);
  return "updated the buddy";
}

/**
 *
 *This function is to delete buddy info in database
 * @param {*} req
 * @return {message}
 */
function deleteBuddy(req) {
  const param = req.params.id;
  const getBuddy = JSON.parse(data.readFile());
  const checkBuddy = getBuddy.filter((bd) => bd.employeeId == param);
  if (checkBuddy.length !== 0) {
    const deletedBuddy = getBuddy.filter((bd) => bd.employeeId != param);
    data.writeFileOperation(deletedBuddy);
    return "Buddy deleted from the database";
  } else {
    throw new Error();
  }
}
module.exports = {
  getBuddy,
  addBuddy,
  singleBuddy,
  updateBuddy,
  deleteBuddy,
};
