const express = require("express");
let router = express.Router();

let buddyController = require("../controllers/buddy.controller");

router.use((req, res, next) => {
  console.log(req.url, "@", Date.now());
  next();
});

router.use(express.json());

router.route("/").get(buddyController.getAllBuddy).post(buddyController.add);

router
  .route("/:id")
  .get(buddyController.getBuddy)
  .put(buddyController.update)
  .delete(buddyController.deleteBud);

module.exports = router;
