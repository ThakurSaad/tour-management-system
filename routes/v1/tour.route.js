const express = require("express");
const router = express.Router();
const tourController = require("../../controllers/tour.controller");

router.route("/tours").post(tourController.createTour);

module.exports = router;
