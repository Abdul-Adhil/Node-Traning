registerResponse = (res, statusCode, message, token) => {
  let responseObj = {};
  responseObj.code = statusCode;
  responseObj.message = message;
  if (token) responseObj.token = token;
  res.status(statusCode || 200).json(responseObj);
};

errorResponse = (res, statusCode, status, message) => {
  let responseObj = {};
  responseObj.code = statusCode;
  responseObj.status = status;
  responseObj.message = message;
  res.status(statusCode || 500).json(responseObj);
};

module.exports = { registerResponse, errorResponse };
