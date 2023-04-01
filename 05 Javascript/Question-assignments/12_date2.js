// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const hours = today.getHours();

const minutes = today.getMinutes();

let formateDate1 = `${year}-${month}-${date} ${hours}:${minutes}`;
console.log(formateDate1);

let formateDate2 = `${date}-${month}-${year} ${hours}:${minutes}`;
console.log(formateDate2);

let formateDate3 = `${date}/${month}/${year} ${hours}:${minutes}`;
console.log(formateDate3);
