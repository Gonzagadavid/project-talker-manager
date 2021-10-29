const { Router } = require('express');
const rescue = require('express-rescue');
const auth = require('../middlewares/auth');
const tokenAuth = require('../middlewares/tokenAuth');

const router = Router();

router.post('/', auth, tokenAuth, rescue((req, res) => {
    const { token } = req;
    res.status(200).json({ token });
}));

module.exports = router;
