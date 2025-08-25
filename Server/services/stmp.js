const nodemailer = require("nodemailer");
const env = require("../configs/env.js");

const transporter = nodemailer.createTransport({
  service: env.STMP.SERVICE,
  auth: {
    user: env.STMP.USER,
    pass: env.STMP.PASS,
  }
})

const sendMail = async () => {
  const info = await transporter.sendMail({
    from: "IAStream <iastream47@gmail.com>",
    to: "",
    subject: "",
    html: "",
  })
}