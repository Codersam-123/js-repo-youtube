// for-of loop 
// here the iterator means any vaiable we use to iterate 
// for (const iterator of object) {    // and Object doesn't replesent the js object only we can sue string, array and many more datatypes   
// }

let number = [1, 3, 4, 20];
for (const num of number) {
    // console.log(`The the array elements are ${num}`)
}

// Map Datatype
// map is a data type like Object which has a Key Value pair but the key values bothe are unique not repeatable
// which means even if you insert same values and keys twice in the map it will only print once
// we can alo use loops on it

const  map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
// console.log(map);

// using for of loop on map
for (const [key,  Value] of map) {   // if we used any one values then it would have come as a 3 small arrays but using the array destructure we are getting the output like this
    // console.log(`${key} :- ${Value}`);  
}


// Objects can be iterated using for of loops like this
// const myObject = {
//     name: "Samiran",
//     age: 24
// }

// for (const object of myObject) {
//     console.log(object); 
// }
