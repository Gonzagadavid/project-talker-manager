const { DELETE_TALKER } = require('../constants/messages');
const getTalkers = require('../functions/getTalkers');
const postTalkers = require('../functions/postTalkers');

const deleteTalkerById = async (req, res) => {
  const { id } = req.params;

    const talkDate = await getTalkers();
    const newTalkDate = talkDate.filter((talker) => talker.id !== +id);
    
    await postTalkers(newTalkDate);

    res.status(200).json(DELETE_TALKER);
};

module.exports = deleteTalkerById;
