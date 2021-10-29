const { ERROR_REQ } = require('../constants/messages');

const error = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = status === 500 ? ERROR_REQ : err.message;
  res.status(status).json({ message });
};

module.exports = error;
