let buddyServices = require("../services/buddy.services");
let response = require("../utils/response.utils");
const logger = require("../config/logger.config");
const validateBody = require("../utils/validate.utils");

/**
 *
 *This function is to getting buddy info from database
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function getAllBuddy(req, res, next) {
  try {
    response.successResponse(
      res,
      200,
      "Success",
      JSON.parse(buddyServices.getBuddy())
    );
  } catch (err) {
    response.errorResponse(
      res,
      500,
      "Failed",
      "Failed to get buddy information"
    );

    logger.error(`Error while getting buddy information`, err.message);
  }
}

/**
 *
 *This function is to get Single buddy info from database
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function getBuddy(req, res, next) {
  try {
    successResponse(
      res,
      200,
      "Your Success message",
      buddyServices.singleBuddy(req)
    );
  } catch (err) {
    response.errorResponse(
      res,
      500,
      "Failed",
      "Failed to get buddy information"
    );
    logger.error(`Error while getting buddy information`, err.message);
  }
}

/**
 *
 *This function is to adding buddy info to database
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function add(req, res, next) {
  try {
    response.successResponse(res, 200, buddyServices.addBuddy(req.body));
  } catch (err) {
    response.errorResponse(res, 500, "Failed", "User Already Exist");
    logger.error(`Error while adding buddy information`, err.message);
  }
}

/**
 *
 *This function is to update  buddy info in database
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function update(req, res, next) {
  try {
    successResponse(res, 200, buddyServices.updateBuddy(req));
  } catch (err) {
    res.status(500).send({
      status: "Failed",
      message: "Failed to update buddy information",
    });
    response.errorResponse(
      res,
      500,
      "Failed",
      "Failed to update buddy information"
    );

    logger.error(`Error while updating buddy information`, err.message);
  }
}

/**
 *
 *This function is to delete buddy info in database
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function deleteBud(req, res, next) {
  try {
    successResponse(res, 200, buddyServices.deleteBuddy(req));
  } catch (err) {
    response.errorResponse(res, 500, "Failed", "No Buddy found!!");
    logger.error(`Error while deleting buddy information`, err.message);
  }
}
module.exports = { getAllBuddy, getBuddy, add, update, deleteBud };
