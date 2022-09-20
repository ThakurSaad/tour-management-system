const Tour = require("../models/Tour");

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

exports.getTourService = async () => {
  const tours = await Tour.find({});
  const total = await Tour.countDocuments();
  return { total, tours };
};
