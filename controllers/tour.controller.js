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
    let filters = { ...req.query };

    const excludeFields = ["sort", "limit", "page"];

    excludeFields.forEach((field) => delete filters[field]);

    const queries = {};

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }

    if (req.query.page || req.query.limit) {
      const { page = 1, limit = 10 } = req.query;

      const skip = (page - 1) * +limit;

      queries.skip = skip;
      queries.limit = +limit;
    }

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    const tours = await getTourService(filters, queries);

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
