const Tour = require("../models/Tour");

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

exports.getTourService = async (filters) => {
  const tours = await Tour.find(filters);
  const total = await Tour.countDocuments();
  return { total, tours };
};
