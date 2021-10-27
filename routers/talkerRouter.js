const { Router } = require('express');
const getTalkers = require('../functions/getTalkers');
const { ERROR_REQ, NOT_FOUND_TALKER } = require('../constants/messages');

const router = Router();

router.get('/', (req, res, next) => {
  try {
    const talker = getTalkers();
    res.status(200).json(talker);
  } catch (_err) {
    next(ERROR_REQ);
  }
});

router.get('/:id', (req, res, next) => {
  try {
    const { id: idParam } = req.params;
    const talkers = getTalkers();
    const talker = talkers.find(({ id }) => id === +idParam);

    if (!talker) return next(NOT_FOUND_TALKER);
    
    res.status(200).json(talker);
  } catch (_err) {
    next(ERROR_REQ);
  }
});

module.exports = router;
