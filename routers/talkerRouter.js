const { Router } = require('express');
const { validTalkerFields, validTalkerFormat, validToken } = require('../middlewares');
const {  
  deleteTalkerById, editTalkerById, getTalkersById,
  getSearchTalkers, getTotalTalkers, postOneTalker, 
} = require('../controllers');

const router = Router();

router.get('/', getTotalTalkers);

router.get('/search', validToken, getSearchTalkers);

router.get('/:id', getTalkersById);

router.post('/', validToken, validTalkerFields, validTalkerFormat, postOneTalker);

router.put('/:id', validToken, validTalkerFields, validTalkerFormat, editTalkerById);

router.delete('/:id', validToken, deleteTalkerById);

module.exports = router;
