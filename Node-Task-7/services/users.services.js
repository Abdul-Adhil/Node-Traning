const userDataBase = require("../utils/fileOperation.utils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const register = async (userData) => {
  // Get user input
  const { username, password } = userData;
  const addUser = JSON.parse(userDataBase.readFile());
  const checkUserExist = addUser.filter((user) => user.username == username);

  if (checkUserExist.length !== 0) {
    return { statuscode: 409, message: "User Already Exist. Please Login" };
  }
  const encryptedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    username: username,
    password: encryptedPassword,
  };

  const token = jwt.sign({ username: newUser.username }, SECRET_KEY, {
    expiresIn: "30m",
  });
  console.log(token);
  addUser.push(newUser);

  userDataBase.writeFileOperation(addUser);
  return {
    statuscode: 201,
    message: "User registered Successfully",
    token: token,
  };
};

const login = async (userData) => {
  const { username, password } = userData;
  const addUser = JSON.parse(userDataBase.readFile());
  const checkUserExist = addUser.filter((user) => user.username == username);

  if (checkUserExist.length === 0) {
    return { statuscode: 404, message: "User Not found!!" };
  } else {
    if (
      checkUserExist[0].username &&
      (await bcrypt.compare(password, checkUserExist[0].password))
    ) {
      const token = jwt.sign({ username: username }, SECRET_KEY, {
        expiresIn: "30m",
      });

      return {
        statuscode: 201,
        message: "User Successfully loged in..!!",
        token: token,
      };
    }
  }
};

module.exports = { register, login };
