let myName = 'Samiran'
console.log(myName);

// although this way i can createa string with myName variable with 'Samiran' value
// but there's another way to create and print string, concatenate

let name = new String("Suman");
console.log(`Hello there my name is ${name}` );
console.log(`hello wold ${myName} and ${name} are good friends`) //concatination good way to practice

//aside from this there are some methods or functiond we can use in string
//Following: 
const gameName = new String("Samiranch-cc-com")
console.log(gameName[0]) // this way we can target the string index se its value
console.log(gameName.charAt(3)) //to find the charatcter which is present in that index no.
console.log(gameName.indexOf('-')) // to find the index no. of that charatcter

const newName = gameName.substring(0,6) // but can not use negative in substring 
console.log(newName)

const anotherName = gameName.slice(-8, 6)
console.log(anotherName)

const newStringOne = "    Samiran    "
console.log(newStringOne);
console.log(newStringOne.trim()); // it only removes the white line spaces and new line /n 

const url = "https:/samiranch/%20@.com"
console.log(url.replace('%20', '-')) //uses to replace certain characters in url
console.log(url.includes('Sundar')) // checks if the certain character is present or not by returning boolean value
console.log(gameName.split('-')) //splits a big string depending on a certain special character or value


