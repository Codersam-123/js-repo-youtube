const myDate = new Date();
// console.log(typeof myDate);//object type
// console.log(myDate); //default date format
//some other date format
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());

let newDate = new Date(2023, 3, 23, 5, 23); // in this format where we custom sate a date month it strts from 0 means 0 = Jan till 11 = Dec only when they are in single digit
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());

//another format is (mm-dd-yyyy)
let anotherDate = new Date("04-22-2003");
// console.log(anotherDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(anotherDate.getTime());
// console.log(Math.floor(myTimeStamp/1000)); //converting the Mili-Sec time into Sec

let myCreatedDate = new Date();
console.log(myCreatedDate);
console.log(myCreatedDate.getMonth() +1); // by doing this we increment the value of month by 1 so now the jauary starts as 1 lie usual
console.log(myCreatedDate.getDate());

console.log(` Date = ${myCreatedDate.getDate()} month = ${myCreatedDate.getMonth() +1} and the time is ${myCreatedDate.getTime()}`
);
