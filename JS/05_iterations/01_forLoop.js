// for loop basic strcture

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(let i =0; i<= 10; i++){     
//     const element = i;
//     console.log(element);
// }

// for loop using if-else cndition inside

for(let i =0; i<= 10; i++){     
    const element = i;
    if(element == 5){
        // console.log("It is the middile number");  // aslo this line prints before the number itself
    }
    // console.log(element);
}

// nested loop

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value, ${i}`);
    // console.log(`Table of ${i}: `);
    for (let j = 1; j <=10 ; j++) {
        //console.log(`Inner loop value, ${j}, and Outerloop is ${i}`);   
        //console.log(`${i} X ${j} = ${i * j}`);
    }
}

// Loops using on Array

let myArray = ["Flash", "Batman", "Superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i]; 
    // console.log(element);
}

// Break And Contnue keywoed in for loop

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        // console.log("Detected: 5");  
        break;                      // terminates the loop as it reaches the condition value
    }
    // console.log(`Value of i is: ${i}`);
}


for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("Detected: 5");  
        continue;                      //it igners the 5 value and doesn't  print itinstead it's prints the follwing string but the loops keep going
    }
    console.log(`Value of i is: ${i}`);
}









// Note: short cut 
// to select all of the index ang change ing into another name press  Ctrl + d