const checkFields = (objectFields) => {
  const emptyField = Object
    .keys(objectFields)
    .map((key) => (!objectFields[key] && objectFields[key] !== 0 ? key : false))
    .filter((field) => field)[0];
  
  if (emptyField) return `O campo "${emptyField}" é obrigatório`;

  return false;
};

module.exports = checkFields;
