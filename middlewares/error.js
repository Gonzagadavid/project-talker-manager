const error = (err, _req, res, _next) => {
  res.status(err.status).json(err.message);
};

module.exports = error;