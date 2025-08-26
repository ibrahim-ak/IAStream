const logger = require("../utils/logger.js");
const pinoHttp = require("pino-http");

const pinoLogger = pinoHttp({
  logger,
});

module.exports = pinoLogger;
