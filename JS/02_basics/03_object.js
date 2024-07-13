// Object.create => using this way to create object using constructor
// Singelton

//using object literals doesn't create singleton
const userSymbol = Symbol("Key1"); //to use this symol in an object as a key

// in back of the computer the key is also treated as a string
const JsUser = {
    name: "Samiran",
    age: 23,
    email: "chakrbortysamiran7@gmail.com",
    location: "Kolkata",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
    [userSymbol]: "mykey1"
};

// so the best way to access the values of the objects
// console.log(JsUser.email); // in normal ways we use .method
// console.log(JsUser["email"]); // special way to access an object's key
// console.log(JsUser);

//to update a value of a kwy in an object
JsUser.email = "chakrabortysamiran7@microsoft.com";
// console.log(JsUser);
// Object.freeze(JsUser);// using this function freezes the object which means you can't update it
JsUser.email = "chakrabortysamiran7@yahoo.com";
// console.log(JsUser);

// creating a object function
JsUser.greeting = function(){
    console.log("Hello I am JsUser");
}

JsUser.grettingTwo = function(){
    console.log(`Hello JsUser my name is ${this.name}`); // usin this means we reffer to the present object 
}
console.log(JsUser.greeting());
console.log(JsUser.grettingTwo());