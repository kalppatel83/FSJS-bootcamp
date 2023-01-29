// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const techGiants = [
  "LCO",
  "Pw skills",
  "Microsoft",
  "Google",
  "Pw skills",
  "Ineuron",
];

console.log(techGiants.indexOf("Pw skills")); //Will return the first exact match from the array
console.log(techGiants.lastIndexOf("Pw skills")); ////Will return the last exact match from the array

// TODO:
// finding first index using lastIndex Method
