const express = require("express");
const router = express.Router();
const tourController = require("../../controllers/tour.controller");
const { viewCount } = require("../../middlewares/viewCount");

router
  .route("/tours")
  .post(tourController.createTour)
  .get(tourController.getTour);

router.route("/tour/cheapest").get(tourController.getTourCheapest);
router.route("/tour/trending").get(tourController.getTourTrending);

router.route("/tour/:id").patch(tourController.updateTourById);

router.route("/tours/:id").get(viewCount, tourController.getTourById);

module.exports = router;
