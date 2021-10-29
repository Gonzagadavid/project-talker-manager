const getTalkers = require('../functions/getTalkers');

const getSearchTalkers = async (req, res) => {
  const { q } = req.query;
  const talkers = await getTalkers();
  
  if (!q) return res.status(200).json(talkers);
  
  const talkerFiltered = talkers.filter(({ name }) => name.includes(q));
  res.status(200).json(talkerFiltered);
};

module.exports = getSearchTalkers;