// map function working

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNum = myNums.map( (num) => num + 1); // thts's how mapping works and it returns automatically if no 
// scopes are used in the arrow function

// but another impostant fact is we can chain call the map method multiple times in same line
// and even we can use filter method too
// the execution of the methods happen sequencially from left to right

const newNum = myNums.map( (num)=> num * 10) .map( (num)=> num + 1) . filter( (num)=> num > 40)
console.log(newNum);