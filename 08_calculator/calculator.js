const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
    let sume = arr.reduce((accu, curr) => {
      return accu + curr
    }, 0);
    return sume;
};

const multiply = function(arr) {
  let product = arr.reduce((accu, curr) => {
    return accu * curr
  }, 1);
  return product;
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(num) {
  if (num === 0 || num === 1) 
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
