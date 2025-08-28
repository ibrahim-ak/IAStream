const express = require("express");
const createV1 = require("../../controller/review/create.js");
const deleteV1 = require("../../controller/review/delete.js");
const getV1 = require("../../controller/review/get.js");
const getByIdV1 = require("../../controller/review/getbyid.js");
const updateV1 = require("../../controller/review/update.js");

const router = express.Router({ mergeParams: true });

// Auth Routes
router.route("/user/:userId/movie/:movieId").get(getV1).post(createV1);

router
  .route("/user/:userId/movie/:movieId/review/:reviewId")
  .get(getByIdV1)
  .put(updateV1)
  .delete(deleteV1);

module.exports = router;
