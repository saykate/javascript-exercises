const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0
  } else {

    let sumArr = arr.reduce((total, current) => { 
      return total + current}, 0)

      return sumArr
  }
  
};

const multiply = function(...args) {
  console.log('NUMS', nums)
  let product = nums.reduce((total, current) => {
    return total * current
  }, 1); console.log(typeof product)
};
//something is wonky...

const power = function(x, y) {
  let num = 1;
	for (let times = 0; times < y; times++) {
      num *= x
  }; return num
};

const factorial = function(x) {
  if (x === 0) {
    return 1
  } else {
    let num = 1
    for (let i = x; i > 0; i--) {
      num *= i;
    } return num
  }
	
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
