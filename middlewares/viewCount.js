const { updateTourViewCountByIdService } = require("../services/tour.services");

exports.viewCount = async (req, res, next) => {
  const { id } = req.params;

  await updateTourViewCountByIdService(id);

  next();
};
