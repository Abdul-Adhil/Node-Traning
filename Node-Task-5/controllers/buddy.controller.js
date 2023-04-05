let buddyServices = require("../services/buddyServices");
const logger = require("../utils/logger");

function getAllBuddy(req, res, next) {
  try {
    res.send(buddyServices.getBuddy());
  } catch (err) {
    logger.error(`Error while getting buddy information ` + err.message);
  }
}
function getBuddy(req, res, next) {
  try {
    res.send(buddyServices.singleBuddy(req));
  } catch (err) {
    logger.error(`Error while getting buddy information ` + err.message);
  }
}
function add(req, res, next) {
  try {
    console.log(req.body);
    res.send(buddyServices.addBuddy(req.body));
  } catch (err) {
    logger.error(`Error while adding buddy to file ` + err.message);
  }
}

function update(req, res, next) {
  try {
    res.send(buddyServices.updateBuddy(req));
  } catch (err) {
    logger.error(`Error while updating buddy information ` + err.message);
  }
}

function deleteBud(req, res, next) {
  try {
    console.log(req);
    res.send(buddyServices.deleteBuddy(req));
  } catch (err) {
    logger.error(`Error while deleting buddy information` + err.message);
  }
}
module.exports = { getAllBuddy, getBuddy, add, update, deleteBud };
