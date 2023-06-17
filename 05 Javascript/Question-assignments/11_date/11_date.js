// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let todayDate = new Date();

console.log(`Current Full year: ${todayDate.getFullYear()}`);
console.log(`current Month: ${todayDate.getMonth() + 1}`); //count jan as 0
console.log(`Todays Date: ${todayDate.getDate()}`);
console.log(`Today day: ${todayDate.getDay()}`); // this day start counting from sunday as 0...6
console.log(`current hours now: ${todayDate.getHours()}`); // represent in 24hours formate
console.log(`current minutes now: ${todayDate.getMinutes()}`);

const totalSecond = todayDate.getTime() / 1000;
console.log(
  `numbers of seconds elapsed from January 1, 1970 to now: ${totalSecond}`
);
