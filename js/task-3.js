const findBestEmployee = function (employees) {
  const maxValues = Math.max(...Object.values(employees));
  const keys = Object.keys(employees);
  let message = "";
  for (const key of keys) {
    if (maxValues === employees[key]) {
      message = key;
    }
  }
  return message;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
