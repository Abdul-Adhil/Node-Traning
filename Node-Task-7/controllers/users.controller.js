const logger = require("../config/logger.config");
const responce = require("../utils/response.utils");
const userServices = require("../services/users.services");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).json({ message: "Username and Password is required" });
    }

    let responceMsg = await userServices.register(req.body);
    responce.registerResponse(
      res,
      responceMsg.statuscode,
      responceMsg.message,
      responceMsg.token
    );
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  //   console.log(req.headers["authorization"]);
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).json({ message: "Username and Password is required" });
    }

    let responceMsg = await userServices.login(req.body);
    responce.registerResponse(
      res,
      responceMsg.statuscode,
      responceMsg.message,
      responceMsg.token
    );
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { register, login };
