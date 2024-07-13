///Topic : filter function
// const coding = ["js", "ruby", "java", "python", "cpp"]

//  in for each loop when we use a ariable to store an array elements with in it
// it doesn't work beccaure for each loop doesn't retun anything we can see that in below code
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);


// to solve that problem we use the .filter method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// now here when we use the console log we will get an array consist of the elements 
// from the previous array whose value is >4 
// console.log(newNums);


// but as i said before that for each doesn't return value 
// that's doesn't mean we can not use it but with some different way

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

// here we can see method overriding 

    userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);