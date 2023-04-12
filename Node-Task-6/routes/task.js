const express = require("express");
let router = express.Router();

router.use((req, res, next) => {
  console.log(req.url, "@", Date.now());
  next();
});

router.use(express.json());

router.route("/").get().post();

router
  .route("/:id")
  .get()
  .put()
  .delete();

  module.exports = router;