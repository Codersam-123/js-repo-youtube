// "this" = refers to current context or variables
const user = {
    username : "Samiran",
    price : 399,
    message: function() {
        // here this function uses the cuuent variable of this object thst's why when the username changed it's also changed it's output accordingly
        console.log(`${this.username}, welcome to you to my webpage`);
        console.log(this);
    }
}
// user.message();
// user.username = "Clark";
// user.message();

//console.log(this); // when we use the function loke this directly on node enviorment it's empty object

// Imortant Note: but in web browser's console when we use that it gives a window object not empty object to perfrm windows related operations

// also another thing if we use "this" with ina function it show us some vales too nut it's nest to use it on objects


//++++++++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++

// the way we decalre this fnction without the "Function" keyword and with an arrow this precess called arrow functions
const one = () => {             // this is a basic arrow function which we assign on a variable
    let username = "Samiran";
    console.log(this.username); // and as usual we cannot use this inside an arrow function its's undefined
    console.log(this); // and in this case empty obaject
}

// one()

// we can also declare this arrow function with in one line with out using of {} & return statement

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(5, 3));