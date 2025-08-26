const nodemailer = require("nodemailer");
const env = require("../configs/env.js");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const logger = require("../utils/logger.js");

const transporter = nodemailer.createTransport({
  service: env.STMP.SERVICE,
  auth: {
    user: env.STMP.USER,
    pass: env.STMP.PASS,
  },
});

const sendMail = async (to, template, subject, context) => {
  const templatePath = path.join(__dirname, "..", "view", `${template}.ejs`);
  const temp = fs.readFileSync(templatePath, "utf-8");
  const html = ejs.render(temp, context);

  const info = await transporter.sendMail({
    from: `${env.STMP.NAME} <${env.STMP.EMAIL}>`,
    to: to,
    subject: subject,
    html: html,
  });

  logger.info("Sending Message: " + info.messageId);
};

module.exports = sendMail;
