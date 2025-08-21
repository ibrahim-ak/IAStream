const mongoose = require("mongoose");
const logger = require("./logger");

const throwCustomError = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error;
}

const showError = (err, res) => {
  logger.error(err);

  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({ message: "Database validation error occured!"});
  }

  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({ message: `Database Cast Error: ${err.message}`});
  }

  if (typeof err === "object" && err !== null && "message" in err) {
    return res.status(500).json({ message: err.message });
  }

  return res.status(500).json({ error: "Internal Server Error!"});

}

module.exports = {
  throwCustomError, 
  showError
}