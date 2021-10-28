const { TALK_FIELD } = require('../constants/messages');
const checkFields = require('../functions/checkFields');
const checkToken = require('../functions/checkToken');

const validTalkerFields = (req, res, next) => {
  const { authorization } = req.headers;
  const { name, age, talk } = req.body;

  if (!talk) return next(TALK_FIELD);

  const { watchedAt, rate } = talk;
  
  const token = checkToken(authorization);
  const fields = checkFields({ name, age });
  const checkTalk = checkFields({ talk, watchedAt, rate });
  
  if (token) return next({ status: 401, message: token });
  if (fields) return next({ status: 400, message: fields });
  if (checkTalk) return next(TALK_FIELD);

  next();
};

module.exports = validTalkerFields;
