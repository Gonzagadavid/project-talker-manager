const getTalkers = require('../functions/getTalkers');

const getTotalTalkers = async (req, res) => {
    const talker = await getTalkers();
    res.status(200).json(talker);
};

module.exports = getTotalTalkers;
