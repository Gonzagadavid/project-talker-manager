const getTalkers = require('../functions/getTalkers');
const postTalkers = require('../functions/postTalkers');

const editTalkerById = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body; 
  const newTalker = { id: +id, name, age, talk };
    const talkDate = await getTalkers();
    const newTalkDate = talkDate.map((oldTalker) => (oldTalker.id === +id ? newTalker : oldTalker));
    
    await postTalkers(newTalkDate);
    
    res.status(200).json(newTalker);
  };

module.exports = editTalkerById;
