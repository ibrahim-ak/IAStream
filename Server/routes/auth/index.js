const express = require("express");

const register = require("../../controller/auth/signup.js");
const signin = require("../../controller/auth/login.js");

const router = express.Router({ mergeParams: true });

router.route("/signin").post(signin);
router.route("/signup").post(register);

module.exports = router;