const marvel_heroes = ["Thor", "Iron-Man", "Spider-Man"];
const dc_heroes = ["Superman", "Flash", "Batman"]
// marvel_heroes.push(dc_heroes); // using push adds another whole array as a single element in an array

// console.log(marvel_heroes); 
// console.log(marvel_heroes [3][2]); // to access that partivular array we can usw it like an 2D aray

// but the better way to concatenate 2 arrays is using concat function
// but it has a limitation onle can be used betwenn 2 arrays not more than 2
const newHeros = marvel_heroes.concat(dc_heroes);
console.log(newHeros);

// so as a alternative we have spread dunction
// which spreads each emelments in multiple array and binds them into a new one
const allNewHeros = [...marvel_heroes, ...dc_heroes];
console.log(allNewHeros);

const anotherArray= [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; 
// to convert this bizzare type of array into a working normal one we can use flat function
const useable_another_array = anotherArray.flat(Infinity); // infinity is a hack basically it automatically detects how many internal sub array is present there
console.log(useable_another_array);

console.log(Array.isArray("Samiran")); // it checks is the given value is Array or not
console.log(Array.from("Samiran")); // it converts a value into an array
console.log(Array.from({name: "Samiran"})); // but in key-value pair object you need to give instructions first to make which one into an array otherwise it will return a empty array

let score1= 100;
let score2= 200;
let score3= 300;
console.log(Array.of(score1, score2, score3)); // in this way also you can create a new array given the set of elements