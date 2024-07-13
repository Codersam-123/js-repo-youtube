// for in loop

// for in loop in object
const myObject ={
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};

for (const key in myObject) {
    //console.log(key);   // for keys
    //console.log(myObject[key]);  // for values
    console.log(`${key} shortut is of ${myObject[key]}`); // for both
}


// for in loop in array
let programming = ["js", "cpp", "rb", "swift"]
for (const key in programming) {
    //console.log(key);   // for keys of an array in other words the index
    //console.log(programming[key]); // now it prints the element of that array
}

// map isn't iterateble using for in loop