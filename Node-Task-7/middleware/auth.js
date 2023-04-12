const jwt = require("jsonwebtoken");
require("dotenv").config();
const config = process.env;
const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["access-token"]||req.headers["Authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Unauthorized User");
  }
  return next();
};

module.exports = { verifyToken };
