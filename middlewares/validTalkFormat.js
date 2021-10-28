const { WATCHED_AT_FORMAT } = require('../constants/messages');
const dateFormat = require('../functions/dateFormat');
const formatTalker = require('../functions/formatTalker');

const validTalkFormat = (req, res, next) => {
  const { name, age, talk } = req.body;
  const { watchedAt, rate } = talk;

  const formats = formatTalker({ name, age, rate });

  if (formats) return next({ status: 400 });
  if (!dateFormat(watchedAt)) return next(WATCHED_AT_FORMAT);
};

module.exports = validTalkFormat;
