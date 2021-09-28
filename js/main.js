'use strict'

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


getRandomInteger(0,15);
// выводит случайное целое число от 0 до 15.


const getRandomFloat = (min,max,numberAfterPoint) => {
  const numberAfterFormula = Math.random() * (max - min + 1) + min;
  return numberAfterFormula.toFixed(numberAfterPoint);
}
console.log(getRandomFloat(1,6,5));
// выводит случайное число в диапазое от 1 до 6, с 5 знаками после запятой.

