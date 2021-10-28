const checkToken = require('../functions/checkToken');

const validToken = (req, res, next) => {
  const { authorization } = req.headers;
  
  const token = checkToken(authorization);
  
  if (token) return next({ status: 401, message: token });

  next();
};

module.exports = validToken;