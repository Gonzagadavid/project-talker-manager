const emailFormat = require('../functions/emailFormat');
const { 
  EMPTY_EMAIL, EMAIL_FORMAT, EMPTY_PASSWORD, PASSWORD_FORMAT, 
} = require('../constants/messages');

const auth = (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email) return next(EMPTY_EMAIL);

  if (!emailFormat(email)) return next(EMAIL_FORMAT);

  if (!password) return next(EMPTY_PASSWORD);

  if (password.length < 6) return next(PASSWORD_FORMAT);

  next();
};

module.exports = auth;
