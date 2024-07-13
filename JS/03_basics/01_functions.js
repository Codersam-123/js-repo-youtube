// to declare a function you need to rememfer basics first
// first use "Function" Keyword => 'Function-name' => "( )" to pass parameter => "{ }" to run the funtion code

// inthis below function we just returned the addition value of two numbers
function addTwoNumbers (num1, num2){
    return num1 + num2;
}

// but when we call that we just running the functions but didn't print it so it wont show any values
addTwoNumbers(5, 3) // if don't pass any argument then it will prints NaN = not a number
let result = addTwoNumbers(5, 3);
// console.log(result);
// let anotherresult = addTwoNumbers();
// console.log(anotherresult);

// we can also use if-else 
function notice (username){
    return `${username} just logged in` // string interpolation
}
// console.log(notice("Samiran"));


// REST operator or  Spread Operator both of them denotes as "..."
// Rest & Spread both operator are used by same sign ... 
//but which one is which that can be understand by on which situation its been using
// it's used when you need to add more than one number of values or array items without knowwing how many
// this is an example of rest operator
function calulateCartPrice(val1, val2, ...num1){
    return num1;
}
//console.log(calulateCartPrice(200, 400, 500, 2000)); // first value went inside val1, 2nd = val2 and rest = ...num1

//passing object into functtion

let user = {
    username: "Sam",
    price: 211
}
// this is one way to use object in functions 
function objectHandler(anyone){
    console.log(`Username is ${anyone.username} and the price is ${anyone.price}`);
}
// objectHandler(user)

// another one is
objectHandler(
    {
        username: "Hari",
        price: 232
    }
);

// like object we can do it using array too

let myArray = [200, 400, 500, 100];

function getSecondValue(getArray){
    return getArray[1]
};
// console.log(getSecondValue(myArray));

//swcond method
//console.log(getSecondValue([200, 400, 500, 600]));


