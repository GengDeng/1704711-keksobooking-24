const getRandomInteger = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

const getRandomFloat = (min, max, numberAfterPoint) => {
  const numberAfterFormula = Math.random() * (max - min) + min;

  return numberAfterFormula.toFixed(numberAfterPoint);
};

export {getRandomInteger, getRandomFloat};
