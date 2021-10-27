const randomType = () => {
  const numbers = Math.round(Math.random() * 9 + 48);
  const upperChar = Math.round(Math.random() * 25 + 65);
  const lowerChar = Math.round(Math.random() * 25 + 97);
  const randomIndex = Math.round(Math.random() * 2);
  const types = [numbers, upperChar, lowerChar];
  
  return types[randomIndex];
};

const codeGenerator = () => {
  const type = randomType();
  const code = String.fromCharCode(type);
  return code;
};

const tokenGenerator = (bits) => {
  const token = Array(bits).fill(0).map(codeGenerator).join('');
  return token;
};

module.exports = tokenGenerator;
