// 09. Boolean value is either true or false.
// - Write three JavaScript statement example which provide truthy value.
// - Write three JavaScript statement example which provide falsy value.

// Falsy values
// 👇👇Here below is the list of values which are considered as falsy values.👇👇

// false,-0, 0,0n, null, ""(empty string), "undefined", NaN

// If you have anyone of this value while execting if & else statement so your if block of code will be considered as false

const noIsEven = -0n;
if (noIsEven) {
  console.log("It's a true statement");
} else {
  console.log("a false statement");
}

let userCardInfo = null;
if (userCardInfo) {
  console.log("It's a true statement");
} else {
  console.log("a false statement");
}

let input = 0;
if (input) {
  console.log("It's a true statement");
} else {
  console.log("a false statement");
}

// So What are truthy values anything other than above mentioned will be truthy values

// Any positive or negative number other than 0 will be considered truthy
let number = -11111111;
if (number) {
  console.log("yup again a true statement");
}

// Also a string with a value is a truthy
let codition = "false";
if (codition) {
  console.log("yup again a true statement");
}

// assigned an empty (---object {}---)or (---empty array[]---) also will be considered as true statement
let coditionTwo = {};
if (coditionTwo) {
  console.log("yup again a true statement");
}
