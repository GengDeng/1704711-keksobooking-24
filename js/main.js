

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInteger(0,15));
// выводит случайное число от 0 до 15.
console.log(getRandomInteger(5,0));
//если значение "до" меньше "от",выводится от 4 до 1.
console.log(getRandomInteger(1,1));
//если значение "до" и "от" равны, выводит это значение.


function getRandomFloat(min,max,numberAfterPoint){
  const numberAfterFormula = Math.random() * (max - min + 1) + min;
  return numberAfterFormula.toFixed(numberAfterPoint);
}
console.log(getRandomFloat(1,6,5));
// выводит случайное число в диапазое от 1 до 6, с 5 знаками после запятой.
// ссылка на источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
