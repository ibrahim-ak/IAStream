const dotenv = require("dotenv");

dotenv.config();

const {
  PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  ALLOWED_ORIGIN,
  NODE_ENV,
  JWT_SECRET,
  GMAIL_USER,
  GMAIL_PASS,
  GMAIL_SERVICE,
  GMAIL_EMAIL,
  GMAIL_NAME,
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

if (!NODE_ENV) {
  throw new Error("NODE_ENV is not set");
}

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not set");
}

if (!GMAIL_USER) {
  throw new Error("GMAIL_USER is not set");
}

if (!GMAIL_PASS) {
  throw new Error("GMAIL_PASS is not set");
}

if (!GMAIL_SERVICE) {
  throw new Error("GMAIL_SERVICE is not set");
}

if (!GMAIL_NAME) {
  throw new Error("GMAIL_NAME is not set");
}

if (!GMAIL_EMAIL) {
  throw new Error("GMAIL_EMAIL is not set");
}

const config = {
  PORT: PORT,
  DB_NAME: DB_NAME,
  DB_USERNAME: DB_USERNAME,
  DB_PASSWORD: DB_PASSWORD,
  ALLOWED_ORIGIN: ALLOWED_ORIGIN,
  NODE_ENV: NODE_ENV,
  JWT_SECRET: JWT_SECRET,
  STMP: {
    SERVICE: GMAIL_SERVICE,
    USER: GMAIL_USER,
    PASS: GMAIL_PASS,
    EMAIL: GMAIL_EMAIL,
    NAME: GMAIL_NAME,
  },
};

module.exports = config;
