// 09. Boolean value is either true or false.
// - Write three JavaScript statement example which provide truthy value.
// - Write three JavaScript statement example which provide falsy value.

// Falsy values
// 👇👇Here below is the list of values which are considered as falsy values.👇👇

// false, 0 null, ""(empty string), "undefined", NaN

// If you have anyone of this value while execting if & else statement so your if block of code will be considered as false

const noIsEven = "";
if (noIsEven) {
  // console.log("no. is even");
}

let numberArray = [1, 2, 3, 4, 5];

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

let result = sum(1, 2, 3);
console.log(result);
