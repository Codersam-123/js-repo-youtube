// JavaScipt Event Study Material: 
// type, timestamp, defaultPrevented
// target, twoElement, srcElement, currentTarget
// Also some position related events: clientX, clientY, screenX, screenY
// some keyboard Keys: altKey, ctrlKey, shiftKey, keyCode

// simply just demonstrating a clicking event but still it ain't optimal way
// document.getElementById("owl").onclick = function(){
//     alert("owl clicked")
// }

//it's a better way than before
// document.getElementById("owl").addEventListener("click", function(event){
//     alert("owl clicked again")
// }, false)

//Event Propogation : 1) Event bubling     [both of them are depends on the use case of the program]
//                    2) event Capturing
// understand it using Example

//1) Event bubling

// document.getElementById("images").addEventListener("click", function(event){
//     alert("clicking on the ul")
//     console.log("clicking on the ul");
// }, false)
// document.getElementById("owl").addEventListener("click", function(event){
//     alert("owl clicked")
//     event.stopPropagation() // using this method will stop the propogation alltogether
//     console.log("owl clicked");
// }, false)  // this is a proper example of event bubbling where we click on the deepest img tag and then it's going outside li and ul so inside to outside event propogation event bubbling and execution of the event will be happening in that order as well

//2) Event Capturing Proogation

// document.getElementById("images").addEventListener("click", function(){
//     alert("clicking on the ul")
//     console.log("clicking on the ul");
// }, true)
// document.getElementById("owl").addEventListener("click", function(){
//     alert("owl clicked")
//     console.log("owl clicked");
// }, true) // this is the complete opposite of the vent bubbling it folloes the sequencial order . No matter where to clicked first. this is called event capturing


// like stopPropagation() we also have preventDefault() mostly used in forms so that it doesn't take or submit the default value
// here we going to use it on the <a> tag to stop from going to Google website

// document.getElementById("google").addEventListener("click", (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     console.log("Google clicked");
// })

// let's try a small project off removing the images upon clicking

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#images").addEventListener("click", function (event) {
        let bigDiv = event.target.tagName
        if (bigDiv === "IMG") {
            let removeIt = event.target.parentNode
            removeIt.remove();
        }
    }, false)
})


