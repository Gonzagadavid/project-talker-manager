const { TALK_FIELD } = require('../constants/messages');
const checkFields = require('../functions/checkFields');

const validTalkerFields = (req, res, next) => {
  const { name, age, talk } = req.body;

  if (!talk) return next(TALK_FIELD);

  const { watchedAt, rate } = talk;
  
  const fields = checkFields({ name, age });
  const checkTalk = checkFields({ talk, watchedAt, rate });
  
  if (fields) return next({ status: 400, message: fields });
  if (checkTalk) return next(TALK_FIELD);

  next();
};

module.exports = validTalkerFields;
