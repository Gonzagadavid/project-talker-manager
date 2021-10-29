const { Router } = require('express');
const rescue = require('express-rescue');
const { validTalkerFields, validTalkerFormat, validToken } = require('../middlewares');
const {  
  deleteTalkerById, editTalkerById, getTalkersById,
  getSearchTalkers, getTotalTalkers, postOneTalker, 
} = require('../controllers');

const router = Router();

router.get('/', rescue(getTotalTalkers));

router.get('/search', validToken, rescue(getSearchTalkers));

router.get('/:id', rescue(getTalkersById));

router.post('/', validToken, validTalkerFields, validTalkerFormat, rescue(postOneTalker));

router.put('/:id', validToken, validTalkerFields, validTalkerFormat, rescue(editTalkerById));

router.delete('/:id', validToken, rescue(deleteTalkerById));

module.exports = router;
