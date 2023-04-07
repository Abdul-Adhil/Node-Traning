successResponse = (res, statusCode, message, data) => {
  let responseObj = {};
  responseObj.code = statusCode;
  responseObj.message = message;
  if (data) responseObj.data = data;
  res.status(statusCode || 200).json(responseObj);
};

errorResponse = (res, statusCode, status, message) => {
  let responseObj = {};
  responseObj.code = statusCode;
  responseObj.status = status;
  responseObj.message = message;
  res.status(statusCode || 500).json(responseObj);
};

module.exports = { successResponse, errorResponse };
