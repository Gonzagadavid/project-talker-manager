const express = require('express');
const getTalkers = require('../functions/getTalkers');

const router = express.Router();

router.get('/', (req, res) => {
  const talker = getTalkers();
  res.status(200).json(talker);
});

module.exports = router;
