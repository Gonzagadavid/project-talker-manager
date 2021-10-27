const fs = require('fs');
const path = require('path');

const getTalkers = () => {
  const talkersPath = path.join(__dirname, '..', 'talker.json');
  const talkers = fs.readFileSync(talkersPath, 'utf8');
  const talkersJs = JSON.parse(talkers);

  return talkersJs;
};

module.exports = getTalkers;
