const express = require("express");
const router = express.Router();
const tourController = require("../../controllers/tour.controller");
const { viewCount } = require("../../middlewares/viewCount");

router
  .route("/tours")
  .post(tourController.createTour)
  .get(tourController.getTour);

router.route("/tour/cheapest").get(tourController.getTourCheapest);

router
  .route("/tour/:id")
  .get(viewCount, tourController.getTourById)
  .patch(tourController.updateTourById);

module.exports = router;
