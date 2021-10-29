const getTalkers = require('../functions/getTalkers');
const postTalkers = require('../functions/postTalkers');

const postOneTalker = async (req, res) => {
  const { name, age, talk } = req.body; 
    const talkDate = await getTalkers();
    const id = talkDate.length + 1;
    const talker = { id, name, age, talk };

    await postTalkers([...talkDate, talker]);
    
    res.status(201).json(talker);
};

module.exports = postOneTalker;
