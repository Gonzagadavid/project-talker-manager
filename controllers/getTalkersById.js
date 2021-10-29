const { NOT_FOUND_TALKER } = require('../constants/messages');
const getTalkers = require('../functions/getTalkers');

const getTalkersById = async (req, res, next) => {
    const { id: idParam } = req.params;
    const talkers = await getTalkers();
    const talker = talkers.find(({ id }) => id === +idParam);

    if (!talker) return next(NOT_FOUND_TALKER);
    
    res.status(200).json(talker);
};

module.exports = getTalkersById;
