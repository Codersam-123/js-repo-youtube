//Singleton Object Creation
// const tinderUser = new Object();

//object literals
const tinderUser = {};
// using . function we accesed the empty object and put the desired values into it
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.password = "124#125"

// console.log(tinderUser);
// console.log(tinderUser.hasOwnProperty("password")); // returns the boolean value depending on the key is present or not
// console.log(Object.keys(tinderUser)); // returns the object keys in a an array form
// console.log(Object.values(tinderUser)); // returns the vaule from key-value pairs of an object as an array
// console.log(Object.entries(tinderUser)); //returns each key- value pairs as an array inside of a big array

let newUser = {
    email: "someone@gmail.com",
    fullname: {
        userFullname:{
            firstname : "Samiran",
            lastname : "Chakraborty"
        }
    }
}

//to access it to the inner most level use . functon
// console.log(newUser.fullname.userFullname.lastname);

let obj1 ={1: "a", 2: "b"};
let obj2 = {3: "c", 4: "d"};
let obj3 = {5: "e", 6: "f"};

// using the follwing method we can add multiple object into a single one
// in this fnction thr first parameter is an empty object = target
// and the rest of them are source
let newObject = Object.assign({}, obj1, obj2, obj3);
// console.log(newObject);

// in this type of array where you have multiple sub-ojects inside
const newArray = [
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
]

// console.log(newArray);
// // to access in this scenrio
// console.log(newArray[1].email);

// Object de-structuring
const course = {
    courseName: "JS in Hindi",
    couseInstrutor: "Hitesh",
    courseFee: 999
}

//to access the course instructor we can use . function
console.log(course.couseInstrutor);
//but there is another way by de-structuring it
// const {couseInstrutor}= course; 
const {couseInstrutor:instructor}= course; // if we want we can rename it too by assigning a new name
console.log(instructor);

// also there si a into abour JASON api need to understand it a bit clearly
