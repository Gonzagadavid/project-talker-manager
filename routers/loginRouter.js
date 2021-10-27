const { Router } = require('express');
const auth = require('../middlewares/auth');
const { ERROR_REQ } = require('../constants/messages');
const tokenAuth = require('../middlewares/tokenAuth');

const router = Router();

router.post('/', auth, tokenAuth, (req, res, next) => {
  try {
    const { token } = req;
    res.status(200).json({ token });
  } catch (_err) {
    next(ERROR_REQ);
  }
});

module.exports = router;
