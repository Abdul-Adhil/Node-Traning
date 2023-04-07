const express = require("express");
let router = express.Router();
const validateBody = require("../utils/validate.utils");
let buddyController = require("../controllers/buddy.controller");

router.use(express.json());

router.use((req, res, next) => {
  validateBody.validate(req, res, next);
});

router.route("/").get(buddyController.getAllBuddy).post(buddyController.add);

router
  .route("/:id")
  .get(buddyController.getBuddy)
  .put(buddyController.update)
  .delete(buddyController.deleteBud);

module.exports = router;
