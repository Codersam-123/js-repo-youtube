//index starts from 0
// Arrrya can have multi datatype attributes such as : number, string together ina single array
//there are following 2 ways you can declare an array
const myArr = [0, 1, 2, 3, 4, 5];
const muHeros = new Array("Batman", "Iron-man", "Spider-man");
// console.log(myArr[3]);
// console.log(muHeros);

// muHeros.push("Sand-man"); //pushes an element in the last index
// muHeros.pop(); //kicks out the last index item

// muHeros.unshift(2); //pushes the desired element into the first or 0th index
// muHeros.shift(); // leeps removing elements from that index
// console.log(muHeros);

// console.log(myArr.includes(4)); //returns the boolean value if the element is prest or not
// console.log(myArr.indexOf(4)); // returns the index position if not present then returns -1

let newHeros = muHeros.join(); //joijs all the array elements into one and converts into this a string
// console.log(newHeros);
// console.log(typeof newHeros);

//Slice & Splice
console.log("A", myArr); //Original array
let myN1 = myArr.slice(1, 3);
console.log(myN1); // array after slice it only prints copy of main array from the given range 
console.log("B", myArr);
let myN2 = myArr.splice(1, 3);
console.log(myN2); // but this literally breaks the array from the original one from the given range
console.log("C", myArr);// the Remaining array after Splice