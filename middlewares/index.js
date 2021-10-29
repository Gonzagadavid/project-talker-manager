const auth = require('registry-auth-token');
const error = require('./error');
const tokenAuth = require('./tokenAuth');
const validTalkerFields = require('./validTalkerFields');
const validTalkerFormat = require('./validTalkerFormat');
const validToken = require('./validToken');

module.exports = { auth, error, tokenAuth, validTalkerFields, validTalkerFormat, validToken };
