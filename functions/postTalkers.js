const fs = require('fs');
const path = require('path');

const postTalkers = (content) => {
  const contentJson = JSON.stringify(content);
  const talkersPath = path.join(__dirname, '..', 'talker.json');
  fs.writeFileSync(talkersPath, contentJson);
};

module.exports = postTalkers;
