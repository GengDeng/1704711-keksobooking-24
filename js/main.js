const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

getRandomInteger(0,15);

const getRandomFloat = (min,max,numberAfterPoint) => {
  const numberAfterFormula = Math.random() * (max - min + 1) + min;
  return numberAfterFormula.toFixed(numberAfterPoint);
};

getRandomFloat(1,6,5);

