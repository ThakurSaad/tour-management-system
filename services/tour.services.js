const Tour = require("../models/Tour");

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

exports.getTourService = async (filters, queries) => {
  const tours = await Tour.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  const total = await Tour.countDocuments(filters);

  const page = Math.ceil(total / queries.limit);

  return { total, page, tours };
};

exports.getTourByIdService = async (tourId) => {
  const tour = await Tour.findById(tourId);
  return tour;
};

exports.getTourCheapestService = async () => {
  const tours = await Tour.find({ price: { $gte: 0 } })
    .sort("price")
    .limit(3);
  return tours;
};

exports.getTourTrendingService = async () => {
  const tours = await Tour.find({}).sort({ views: -1 }).limit(3);
  return tours;
};

exports.updateTourByIdService = async (tourId, data) => {
  const tour = await Tour.updateOne({ _id: tourId }, data, {
    runValidators: true,
  });
  return tour;
};

exports.updateTourViewCountByIdService = async (tourId) => {
  const tour = await Tour.updateOne(
    { _id: tourId },
    { $inc: { views: 1 } },
    { runValidators: true }
  );
  return tour;
};
