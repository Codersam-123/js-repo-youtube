// for each loop
// there are multiple ways to use for each loop 
const coding = ["java", "python", "c++", "swift"]

coding.forEach( function (item) {   // here we need to use callback function this type of function doesn;t require name that's why didn't used it
    //console.log(item);  
})

// another way using arrow function
coding.forEach( (element) => {  // in this way e didn't have to assign the arrow function into any other variable
    //console.log(element);
})

// in arrow dunction we alwys don't have only 1 parameter but more like in this case
coding.forEach( (element, index, arr) => {  // here elements = value , index = array index , arr= complete array
    //console.log(element, index, arr);
})

// we can also use our own built function
function printMe(item) {
    console.log(item); 
}

//coding.forEach(printMe);  // in this time we didn'y need to call the function with () just name would be enough

// let's take an array which consists of multiple objectsand we need to itreate it
const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "C++",
        languageFile: "cpp"
    },
    {
        languageName: "Python",
        languageFile: "py"
    }
];

myCoding.forEach( (item)=>{
    console.log(item.languageFile);  // here we trating the item as an object and with . function we getting access to it's key
});