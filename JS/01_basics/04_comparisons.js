// console.log(2 > 1);  /*
// console.log(2 >= 1);
// console.log(2 < 1);  all these operators are fine and easy to use 
// console.log(2 == 1);
// console.log(2 != 1); */


// console.log("2" > 1);
// console.log("02" > 1);

/*
in js the '==' operator and '>' operator woks differently
'>=', '<=', '>', '<' in al these operators the null value converts into number 0 then the comparison happens
but in case of = it doesn't that's why it gives false output
*/
console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //output false     /*
console.log(undefined > 0); //output false      in most cases try to avoid this type of code
console.log(undefined < 0); //output false      */

// === strict comparison here it wil also checks the data type of 2 variable or values
console.log("2" === 2); //false