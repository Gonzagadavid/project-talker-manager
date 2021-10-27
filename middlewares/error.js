const error = (err, _req, res, _next) => {
  console.log(err.message);
  res.status(err.status).json({ message: err.message });
};

module.exports = error;
