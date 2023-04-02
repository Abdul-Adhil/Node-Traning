let buddyServices = require("../services/buddyServices");

function getAllBuddy(req, res, next) {
  try {
    res.send(buddyServices.getBuddy());
  } catch (err) {
    console.error(`Error while getting buddy information`, err.message);
    next(err);
  }
}
function getBuddy(req, res, next) {
  try {
    res.send(buddyServices.singleBuddy(req));
  } catch (err) {
    console.error(`Error while getting buddy information`, err.message);
    next(err);
  }
}
function add(req, res, next) {
  try {
    console.log(req.body);
    res.send(buddyServices.addBuddy(req.body));
  } catch (err) {
    console.error(`Error while getting buddy information`, err.message);
    next(err);
  }
}

function update(req, res, next) {
  try {
    res.send(buddyServices.updateBuddy(req));
  } catch (err) {
    console.error(`Error while getting buddy information`, err.message);
    next(err);
  }
}

function deleteBud(req, res, next) {
  try {
    console.log(req);
    res.send(buddyServices.deleteBuddy(req));
  } catch (err) {
    console.error(`Error while getting buddy information`, err.message);
    next(err);
  }
}
module.exports = { getAllBuddy, getBuddy, add, update, deleteBud };
