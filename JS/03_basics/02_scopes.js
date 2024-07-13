// Scopes: scopes are the those which we declare within {} Exception: object
// also we don't use var because it's disobeys the scope 
// when we use any variable outside then it's global scope

if(true){
    const a = 10; // when we use variables between this block scope it called as local scope
    let b = 20;
    var c = 30;
};

// console.log(a); // it won't print because we declared the variable in a block scope
// console.log(b); // it won't print because we declared the variable in a block scope
// console.log(c); // but it does prints itself 

//Important Note: the global scope which is present in our Vs Code IDE using node.js
// is different from the global scope we get from the the browser console

// Nested Scope

function one(){
    const username = "Samiran";

    function two(){
        const website = "Youtube";
        console.log(username); // in this case to this function the first function one is the global scope that's why we can use its's global variable inside our local scope
    }
    //console.log(website); // gives an error because the website vaeiable is inside of a local scope and we cannot use it globally

    two()
}

// one();

// ++++++++++++++++++++++++++++++ Intresting Example of Hosting ++++++++++++++++++++++++++++++++++++

// there are two ways you can define a function 

// in this case we just declared the function didn't assignit to anyother variables
// that's why it's accessible through any line
console.log(addOne(5));
function addOne (num){
    return num + 1;
}


// but  here it gives error because we printing the variable before assigning the line of assigning the function
// console.log(addTwo(6));
// const addTwo = function (num){
//     return num + 1
// }