//Async Js functions
//setInterval()
// this function only stops for a quick interval and then keep executing the function again and again 
// we can also pass parameters

document.addEventListener("DOMContentLoaded", function(){
    const sayDate = function(str){
        console.log(str, "Samiran", Date.now());
    }
    document.querySelector(".start").addEventListener("click", function(){
        const intervalId = setInterval(sayDate, 1000, "hi")
        document.querySelector(".stop").addEventListener("click", function(){
            clearInterval(intervalId)
        }) 
    })
})

