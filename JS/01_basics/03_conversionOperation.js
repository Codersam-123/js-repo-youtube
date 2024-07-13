let scope =   undefined//null // "33abc"
//console.log(scope)
//console.log(typeof scope)

/*
in above becuae the tring was a whole number that's why when it converted into it prints 33
but if there was additional alphabets there then the value wold have been different
*/
/*
let vauleConversitonInNumber = Number(scope)
console.log(vauleConversitonInNumber);
console.log(typeof vauleConversitonInNumber)
*/
//the output is NaN = Not a Number it's same for the undefined type too
// in case of null the output = 0

let vauleConversitonInNumber = Number(scope)
//console.log(vauleConversitonInNumber); 
//console.log(typeof vauleConversitonInNumber)

//IN Boolean
/*
    1 <=> true ; 0 <=> false
    " " <=> false ; "Samiran" <=> true
*/
let logIn = 1
let booleanConverstion = Boolean(logIn)
console.log(booleanConverstion);


//----------------------------------------------Operators--------------------------------------------------

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2"); don't do

// console.log( (3 + 4) * 5 % 3); don't do

// console.log(+true); don't do
// console.log(+"");  don't do

let num1, num2, num3

num1 = num2 = num3 = 2 + 2   //don't do

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
