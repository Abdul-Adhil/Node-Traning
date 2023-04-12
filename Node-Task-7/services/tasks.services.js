const data = require("../utils/userTaskOperation.utils");
const _ = require("lodash");
const crypto = require("crypto");

const getTasks = (username, query) => {
  if (query.sort) {
    let sortData = JSON.parse(data.readFile(username));
    return _.sortBy(sortData, query.sort);
  } else if (!(Object.keys(query).length === 0) && !query.limit) {
    const filters = query;
    const taskData = JSON.parse(data.readFile(username));
    const filteredTask = taskData.filter((task) => {
      let isValid = true;
      for (key in filters) {
        isValid = isValid && task[key] == filters[key];
      }
      return isValid;
    });
    return filteredTask;
  } else {
    let taskData = JSON.parse(data.readFile(username));
    return taskData.slice(0, parseInt(query.limit) || taskData.length);
  }
};

const singleTask = (username, id) => {
  const singleTask = JSON.parse(data.readFile(username));
  const myTask = singleTask.filter((task) => task.id == id);
  return myTask;
};

const addTask = (username, taskData) => {
  const addTask = JSON.parse(data.readFile(username));
  taskData.id = crypto.randomBytes(16).toString("hex");
  addTask.push(taskData);
  data.writeFileOperation(username, addTask);
  return "New Task Added to the database";
};

const updateTask = (username, id, bodyData) => {
  const taskData = JSON.parse(data.readFile(username));
  const findTask = taskData.findIndex((task) => task.id === id);
  let targetTask = taskData[findTask];
  for (const key in bodyData) {
    targetTask[key] = bodyData[key];
  }
  data.writeFileOperation(username, taskData);
  return "Task updated";
};

function deleteTask(username, id) {
  const getTask = JSON.parse(data.readFile(username));
  const checkTask = getTask.filter((task) => task.id == id);
  if (checkTask.length !== 0) {
    const deletedTask = getTask.filter((task) => task.id != id);
    data.writeFileOperation(username, deletedTask);
    return "Task deleted from the database";
  } else {
    throw new Error();
  }
}
module.exports = { getTasks, singleTask, addTask, updateTask, deleteTask };
