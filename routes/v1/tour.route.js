const express = require("express");
const router = express.Router();
const tourController = require("../../controllers/tour.controller");

router
  .route("/tours")
  .post(tourController.createTour)
  .get(tourController.getTour);

router.route("/tour/:id").get(tourController.getTourById);

module.exports = router;
