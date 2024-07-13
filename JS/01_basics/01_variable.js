// we use this for those varibles which we wont be changing ever again
const accountId = 456548


let accountEmail = "chakrabortysam@gmail.com"


var accountPassword = "123456"
/*
prefer to not use of var
becise of it's block scope and functional scope isue
*/

//and also this type of varable initialization also bad practice
accountCity = "Kolkata"

// this line will print single variable
console.log(accountId);

// this will be printing multple variable in tabular format
console.table([accountId, accountEmail, accountPassword, accountCity])
