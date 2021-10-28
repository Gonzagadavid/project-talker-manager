const NOT_FOUND_TALKER = { status: 404, message: 'Pessoa palestrante não encontrada' };

const ERROR_REQ = { status: 500, message: 'ocorreu um erro com a requisição' };

const EMPTY_EMAIL = { status: 400, message: 'O campo "email" é obrigatório' };

const EMAIL_FORMAT = { status: 400, message: 'O "email" deve ter o formato "email@email.com"' };

const EMPTY_PASSWORD = { status: 400, message: 'O campo "password" é obrigatório' };

const PASSWORD_FORMAT = { status: 400, message: 'O "password" deve ter pelo menos 6 caracteres' };

const TALK_FIELD = { 
  status: 400, 
  message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios', 
};

const NAME_FORMAT = { status: 400, message: 'O "name" deve ter pelo menos 3 caracteres' };

const AGE_FORMAT = { status: 400, message: 'A pessoa palestrante deve ser maior de idade' };

const WATCHED_AT_FORMAT = { 
  status: 400, 
  message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"', 
};

const RATE_FORMAT = { status: 400, message: 'O campo "rate" deve ser um inteiro de 1 à 5' };

module.exports = { 
  NOT_FOUND_TALKER,
  ERROR_REQ,
  EMPTY_EMAIL,
  EMAIL_FORMAT,
  EMPTY_PASSWORD,
  PASSWORD_FORMAT,
  TALK_FIELD,
  NAME_FORMAT,
  AGE_FORMAT,
  WATCHED_AT_FORMAT,
  RATE_FORMAT,
};
