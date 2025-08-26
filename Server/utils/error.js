const mongoose = require("mongoose");
const logger = require("./logger");

const throwCustomError = (statusCode, message) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  throw err;
};

const showError = (err, res) => {
  logger.error(err);

  if (err instanceof mongoose.Error.ValidationError) {
    return res
      .status(400)
      .json({ message: "Database validation error occured!" });
  }

  if (err instanceof mongoose.Error.CastError) {
    return res
      .status(400)
      .json({ message: `Database Cast Error: ${err.message}` });
  }

  if (
    typeof err === "object" &&
    err !== null &&
    "message" in err &&
    err instanceof Error
  ) {
    const error = new Error(err.message);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({ message: error.message });
  }

  return res.status(500).json({ error: "Internal Server Error!" });
};

module.exports = {
  throwCustomError,
  showError,
};
