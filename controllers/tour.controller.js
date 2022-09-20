const { createTourService } = require("../services/tour.services");

exports.createTour = async (req, res) => {
  try {
    const tour = await createTourService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Tour inserted",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Could not insert",
      error: error.message,
    });
  }
};
