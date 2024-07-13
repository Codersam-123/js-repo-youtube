const randomColor = function(){
    let hex = "#";
    const hexColor = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
        hex+= hexColor[Math.floor(Math.random() * 16)]      
    }
    return hex;
}
let intervalId ;

const startChaniginColor = function(){
    const changingColor= function(){
        document.querySelector("body").style.backgroundColor = randomColor();
    }
    if(!intervalId){   // if we making it null later then we have to make this check box as well
        intervalId = setInterval(changingColor, 1000);
    }
   
}
const stopChaniginColor = function(){
    clearInterval(intervalId);
    intervalId = null; // this check is for to add to optimise the code because each time the method overrides it put pressure on the memory 

}


document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#start").addEventListener("click", startChaniginColor )

    document.querySelector("#stop").addEventListener("click", stopChaniginColor )
})