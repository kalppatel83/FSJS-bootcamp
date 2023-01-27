// TODO: 01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

// 👇👇String👇👇

// Here we have assigned a variable with a name of (userFullName) which will be holding our value (which is a type of string quoted) in a computer memory
const userFullName = "Kalp Patel";
console.log(
  `1. User full name is ${userFullName} & (it's of type ${typeof userFullName})`
);

// 👇👇BOOLEAN👇👇

// The below variable is responsible for storing of user is verifed or not
// will assigned boolean value of (true & false) to perform further operations.
let isUserVarified = true;
console.log(
  `2. Is user varified ${isUserVarified} & (it's of type ${typeof isUserVarified})`
);

// 👇👇Undefined👇👇
// Undefined is something refered as we have created a space to hold up the value in
// variable but it's never been assigned any value.
let contactInfo;
console.log(
  `3. user contactInfo ${contactInfo} & (it's of type ${typeof contactInfo})`
);

// 👇👇Null👇👇
// Null is something which is used when it's value is meant to be something but failed to provide that information
// Like asking a question to teacher which was meant to answer your question but he's clueless
var userCardInfo = null;
console.log(
  `4. user userCardInfo ${userCardInfo} & (it's of type ${typeof userCardInfo})`
);
