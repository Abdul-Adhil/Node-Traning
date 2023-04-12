
const logger = require("../utils/logger");

function getAllTask(req, res, next) {
  try {
    res.send();
  } catch (err) {
    logger.error(`Error while getting buddy information ` + err.message);
  }
}
function getTask(req, res, next) {
  try {
    res.send();
  } catch (err) {
    logger.error(`Error while getting buddy information ` + err.message);
  }
}
function add(req, res, next) {
  try {
    
    res.send();
  } catch (err) {
    logger.error(`Error while adding buddy to file ` + err.message);
  }
}

function update(req, res, next) {
  try {
    res.send();
  } catch (err) {
    logger.error(`Error while updating buddy information ` + err.message);
  }
}

function deleteTask(req, res, next) {
  try {
    res.send();
  } catch (err) {
    logger.error(`Error while deleting buddy information` + err.message);
  }
}
module.exports = { getAllTask, getTask, add, update, deleteTask };
