const { showError } = require("../utils/error.js");

export const errorHandler = (err, _req, res, _next) => {
  showError(err, res);
}