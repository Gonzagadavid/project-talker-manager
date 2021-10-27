const NOT_FOUND_TALKER = { status: 404, message: 'Pessoa palestrante não encontrada' };

const ERROR_REQ = { status: 500, message: 'ocorreu um erro com a requisição' };

const EMPTY_EMAIL = { status: 400, message: 'O campo "email" é obrigatório' };

const EMAIL_FORMAT = { status: 400, message: 'O "email" deve ter o formato "email@email.com"' };

const EMPTY_PASSWORD = { status: 400, message: 'O campo "password" é obrigatório' };

const PASSWORD_FORMAT = { status: 400, message: 'O "password" deve ter pelo menos 6 caracteres' };

module.exports = { 
  NOT_FOUND_TALKER, ERROR_REQ, EMPTY_EMAIL, EMAIL_FORMAT, EMPTY_PASSWORD, PASSWORD_FORMAT, 
};