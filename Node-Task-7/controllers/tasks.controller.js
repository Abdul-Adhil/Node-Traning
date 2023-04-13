const logger = require("../config/logger.config");
const tasksServices = require("../services/tasks.services");

function getAllTask(req, res) {
  try {
    res.status(200).json({
      username: req.user.username,
      tasks: tasksServices.getTasks(req.user.username, req.query),
    });
  } catch (err) {
    res.status(404).json({
      message: "Cant get the taskdata",
      status: "failed",
    });
    logger.error(`Error while All the getting Tasks` + err.message);
  }
}
function getTask(req, res) {
  try {
    res.json({
      username: req.user.username,
      Task: tasksServices.singleTask(req.user.username, req.params.id),
    });
  } catch (err) {
    logger.error(`Error while getting the task information ` + err.message);
  }
}
function add(req, res) {
  try {
    res
      .status(200)
      .json({
        status: "Success",
        message: tasksServices.addTask(req.user.username, req.body),
      });
  } catch (err) {
    logger.error(`Error while adding task to file ` + err.message);
  }
}

function update(req, res) {
  try {
    res.res.status(200).json({
      username: req.user.username,
      Task: tasksServices.updateTask(
        req.user.username,
        req.params.id,
        req.body
      ),
    });
  } catch (err) {
    logger.error(`Error while updating the task ` + err.message);
  }
}

function deleteTask(req, res, next) {
  try {
    res.res.status(200).json({
      username: req.user.username,
      Task: tasksServices.deleteTask(req.user.username, req.params.id),
    });
  } catch (err) {
    logger.error(`Error while deleting task` + err.message);
  }
}
module.exports = { getAllTask, getTask, add, update, deleteTask };
