const dotenv = require("dotenv");

dotenv.config();

const {
  PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  ALLOWED_ORIGIN
} = process.env;


if (!PORT) {
  throw new Error("PORT is not set");
}

if (!DB_NAME) {
  throw new Error("DB_NAME is not set");
}

if (!DB_USERNAME) {
  throw new Error("DB_USERNAME is not set");
}

if (!DB_PASSWORD) {
  throw new Error("DB_PASSWORD is not set");
}

if (!ALLOWED_ORIGIN) {
  throw new Error("ALLOWED_ORIGIN is not set");
}

const config = {
  PORT: PORT,
  DB_NAME: DB_NAME,
  DB_USERNAME: DB_USERNAME,
  DB_PASSWORD: DB_PASSWORD,
  ALLOWED_ORIGIN: ALLOWED_ORIGIN
}

module.exports = config;