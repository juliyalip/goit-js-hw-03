const countTotalSalary = function (employees) {
  "use strict";
  const values = Object.values(employees); // переберем значения
  let total = 0; // создана переменная для записи суммы з.п
  for (const value of values) {
    total += value;
  }
  return total;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
