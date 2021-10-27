const express = require('express');
const bodyParser = require('body-parser');
const talkerRouter = require('./routers/talkerRouter');
const error = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use('/talker', talkerRouter);

app.use(error);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
