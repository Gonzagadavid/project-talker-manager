const { Router } = require('express');
const getTalkers = require('../functions/getTalkers');
const { ERROR_REQ, NOT_FOUND_TALKER, DELETE_TALKER } = require('../constants/messages');
const validFields = require('../middlewares/validTalkerFields');
const validFormat = require('../middlewares/validTalkerFormat');
const postTalkers = require('../functions/postTalkers');
const validToken = require('../middlewares/validToken');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const talker = await getTalkers();
    res.status(200).json(talker);
  } catch (_err) {
    next(ERROR_REQ);
  }
});

router.get('/search', validToken, async (req, res, next) => {
  const { q } = req.query;
  try {
    const talkers = await getTalkers();
    if (!q) return res.status(200).json(talkers);
    const talkerFiltered = talkers.filter(({ name }) => name.includes(q));
    res.status(200).json(talkerFiltered);
  } catch (_err) {
    next(ERROR_REQ);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id: idParam } = req.params;
    const talkers = await getTalkers();
    const talker = talkers.find(({ id }) => id === +idParam);

    if (!talker) return next(NOT_FOUND_TALKER);
    
    res.status(200).json(talker);
  } catch (_err) {
    next(ERROR_REQ);
  }
});

router.post('/', validToken, validFields, validFormat, async (req, res, next) => {
  const { name, age, talk } = req.body; 
  try {
    const talkDate = await getTalkers();
    const id = talkDate.length + 1;
    const talker = { id, name, age, talk };

    await postTalkers([...talkDate, talker]);
    
    res.status(201).json(talker);
  } catch (_err) {
    next(ERROR_REQ);
  }
});

router.put('/:id', validToken, validFields, validFormat, async (req, res, next) => {
  const { id } = req.params;
  const { name, age, talk } = req.body; 
  const newTalker = { id: +id, name, age, talk };
  try {
    const talkDate = await getTalkers();
    const newTalkDate = talkDate.map((oldTalker) => (oldTalker.id === +id ? newTalker : oldTalker));
    
    await postTalkers(newTalkDate);
    
    res.status(200).json(newTalker);
  } catch (_err) {
    next(ERROR_REQ);
  }
});

router.delete('/:id', validToken, async (req, res, next) => {
  const { id } = req.params;

  try {
    const talkDate = await getTalkers();
    const newTalkDate = talkDate.filter((talker) => talker.id !== +id);
    
    await postTalkers(newTalkDate);

    res.status(200).json(DELETE_TALKER);
  } catch (_err) {
    next(ERROR_REQ);
  }
});

module.exports = router;
