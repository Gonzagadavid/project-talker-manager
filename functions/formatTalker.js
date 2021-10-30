const { NAME_FORMAT, AGE_FORMAT, RATE_FORMAT } = require('../constants/messages');

const formatTalker = ({ name, age, rate }) => {
  if (name.length < 3) return NAME_FORMAT;

  if (age < 18) return AGE_FORMAT;

  if ((rate < 1 || rate > 5) && parseInt(rate) === rate) return RATE_FORMAT;

  return false;
};

module.exports = formatTalker;
