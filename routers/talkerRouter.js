const express = require('express');
const getTalkers = require('../functions/getTalkers');

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    const talker = getTalkers();
    res.status(200).json(talker);
  } catch (_err) {
    next({ status: 500, message: 'ocorreu um erro com a requisição' });
  }
});

module.exports = router;
