const express = require("express");
const getAllUser = require("../../controller/user/get");
const getSingleUser = require("../../controller/user/getbyid");
const deleteUser = require("../../controller/user/delete");

const router = express.Router({ mergeParams: true });

router.route("/").get(getAllUser);
router.route("/:userId").get(getSingleUser).delete(deleteUser);

module.exports = router;