const { WATCHED_AT_FORMAT } = require('../constants/messages');
const dateFormat = require('../functions/dateFormat');
const formatTalker = require('../functions/formatTalker');

const validTalkerFormat = (req, res, next) => {
  const { name, age, talk } = req.body;
  const { watchedAt, rate } = talk;

  const formats = formatTalker({ name, age, rate });

  if (formats) return next(formats);
  if (!dateFormat(watchedAt)) return next(WATCHED_AT_FORMAT);

  next();
};

module.exports = validTalkerFormat;
