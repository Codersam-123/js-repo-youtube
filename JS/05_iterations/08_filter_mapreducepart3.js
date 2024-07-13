//Topic : reduce function

const myNums = [1, 2, 3]

// in tyhis function at first iteration the acc value is 0 as we given at the nd of the function
// but second time the acc value is the combination of previous acc value + currvalue
// and the iterations keep going until the array becomes empty
// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`) 
//     return acc + currval
// }, 0)
 
//console.log(myTotal);

// using arrow function
// const myTotal = myNums.reduce( (acc, currval) =>  acc + currval, 0, )
// console.log(myTotal);

const shooppingCart = [
    {
        itemname: "JS couse",
        price: 2999
    },

    {
        itemname: "PY course",
        price: 999
    },

    {
        itemname: "Mobile Development course",
        price: 5999
    },

    {
        itemname: "Data Anlytics couse",
        price: 12999
    },
];

const myBill= shooppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(myBill);