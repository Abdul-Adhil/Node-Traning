const express = require("express");
const taskController = require("../controllers/tasks.controller");
const validateBody = require("../utils/validate.utils");

let router = express.Router();

router.use(express.json());

router
  .route("/")
  .get(taskController.getAllTask)
  .post(validateBody.validate, taskController.add);

router
  .route("/:id")
  .get(taskController.getTask)
  .put(taskController.update)
  .delete(taskController.deleteTask);

module.exports = router;
