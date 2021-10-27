const emailFormat = (email) => /^[\w_.]+@\w+\.com(\.br)?$/.test(email);

module.exports = emailFormat;
