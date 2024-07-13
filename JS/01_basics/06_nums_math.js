//+++++++++++++++++++++++++++++++++ Number ++++++++++++++++++++++++++++++++

// this auto matically assigns the number datatype
const num = 123;
console.log(num);
// but here you forced them precisely to add number datatype
const newNum = new Number(100);
console.log(newNum);

//Some functions related to Number datatype
// converting the num into string and then finding it's length
console.log(newNum.toString().length);
//adds the decimal number after .
console.log(newNum.toFixed(2));

//ne carefull on using toprecision function

const otherNumber = 1000000;
console.log(otherNumber.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++


//Math is a funcion or an Object
console.log(Math);
//.abs= absolute value changes the negative into positive
console.log(Math.abs(-59));
//.round= squareoffs the decimal number into close to hole number
console.log(Math.round(4.6));
// other than this 
// .floor & .ceil function enables to gget the base value  an top value repectively

console.log(Math.random()); // generates number between 0 & 1 
console.log(Math.random () * 10); //shifting 1 posotion o the left
console.log((Math.random() * 10) +1); // adding + 1spo that it can avoid 0 value ang always gives >1

// now apractical example
const min = 10;
const max = 20;
console.log((Math.floor(Math.random() * (max - min + 1)) + min))