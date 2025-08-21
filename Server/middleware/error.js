const { showError } = require("../utils/error.js");

const errorHandler = (err, _req, res, _next) => {
  showError(err=err, res=res);
}

module.exports = errorHandler;