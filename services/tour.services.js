const Tour = require("../models/Tour");

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

exports.getTourService = async (filters, queries) => {
  const tours = await Tour.find(filters).select(queries.fields);

  const total = await Tour.countDocuments(filters);

  // const page = Math.ceil(total);

  return { total, tours };
};
