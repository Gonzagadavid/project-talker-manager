const tokenGenerator = require('../functions/tokenGenerator');

const tokenAuth = (req, res, next) => {
  const token16 = tokenGenerator(16);
  req.token = token16;
  next();
};

module.exports = tokenAuth;
