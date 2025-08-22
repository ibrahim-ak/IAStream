const jwt = require("jsonwebtoken");
const env = require("../configs/env");

const createToken = ({ userId }) => {
  const token = jwt.sign(userId, env.JWT_SECRET, {
    expiresIn: '24h'
  });
  return token;
}

const verifyToken = (token) => {
  return jwt.verify(token, env.JWT_SECRET);
}

module.exports = { createToken, verifyToken };