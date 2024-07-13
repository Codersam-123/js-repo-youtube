// setTimeout()
// it's function which activates after certain time and executes only Once.

const changeText = function(){
    document.querySelector("h1").innerHTML = "Best Js Series"
}

// also here we take secons in miliseconds, 1 sec = 1000 mili-sec
const changeMe = setTimeout(changeText, 2000);  // be in mind that using seeTimeout function we are passing an handle or no-name function that's why we just passing reference so need to execute it

// and also if you want to stop it before happening then use
// clearTimeout()

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".stop").addEventListener("click", function(){
        clearTimeout(changeMe); // but be sure to remember this will only work if we click within the 2 second time limit before the setTimeout() executes
        console.log("Stopped");
    })
})
