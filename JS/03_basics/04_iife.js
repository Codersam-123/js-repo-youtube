// Immediately Invoked Function Expressions (IIFE)

// taking the whole function into another parentheses we did IIFE
(function chai(){ // it's a named IIFE
    console.log(`Database Connected`);
}) (); // be sure to give line end here otherwise it won't stop running in back

//like this we can also use the "Arrow function" like that as well
// treat this like an function 
( (name ) => { // unnamed IIFE
    console.log(`Database Connected Too, ${name}`);
}) ("Samiran");

