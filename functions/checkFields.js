const checkFields = (objectFields) => {
  const emptyField = Object
    .keys(objectFields)
    .map((key) => (!objectFields[key] ? key : false))
    .filter((field) => field)[0];
  
  return emptyField;
};

module.exports = checkFields;
