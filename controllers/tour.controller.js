const {
  createTourService,
  getTourService,
} = require("../services/tour.services");

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

exports.getTour = async (req, res) => {
  try {
    const tours = await getTourService(filters);

    res.status(200).json({
      status: "Success",
      message: "Tours found",
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Could not find tours",
      error: error.message,
    });
  }
};
