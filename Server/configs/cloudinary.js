const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const env = require("./env");

const upload = multer();

cloudinary.config({
  cloud_name: env.CLOUD.NAME,
  api_key: env.CLOUD.API.KEY,
  api_secret: env.CLOUD.API.SECRET
});

module.exports = {cloudinary, upload};