let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const remark = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")
let prevGuess = [] // to store all previous guesses an empty array
let guessNum = 1 //starting guess number

let playGame = true;
if(playGame){
  submit.addEventListener("click", function(event){
    event.preventDefault()
    const guess = parseInt(userInput.value)
    validGuess(guess)
  })
}

function validGuess(guess){

  // validating if the user input is a valid number or not
  if(isNaN(guess)){
    alert("please add a valid number")
  }else if (guess<1){
    alert("please add a number greater than 1")
  }else if(guess>100){
    alert("please add a number greater than 100")
  }else{
    prevGuess.push(guess)
    if(guessNum === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random Number Was: ${randomNumber} `)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  // printing Messsage that our guess number is right or high or low
  if(guess === randomNumber){
    displayMessage(`You Guessed it right`)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`The number is too low`)
  }else{
    displayMessage(`The number is too high`)
  }
}

function displayGuess(guess){
  // we passing the guess and it will interact with Dom
  userInput.value = "" // cleaning the guess slot 
  guessSlot.innerHTML += `${guess} ` // storing it to into the array
  guessNum++   // incrementing the nunber of guess taken
  remaining.innerHTML = `${11 - guessNum}` // decrementing the number of guess
}

function displayMessage(message){
  remark.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  //ending the oldgame after the user guesses the right num or the  remaining guess value becomes 0
  userInput.value = ""
  userInput.setAttribute("disabled", "") // after all the guesses completed it disables the guess slot 
  p.classList.add("button") // creating a new paragraph or button to start the game again and adding list
  p.innerHTML = `<h2 id = "newGame">Start new game</h2>` // addding it to innerHtml
  startOver.appendChild(p) // appending it or the resulapara class div
  playGame = false  // amking sure the game doesn't start again so revering the olayingcondition
  newGame()
}

function newGame(){
  // strating a new game
  // here we are resetting each and every value to it's starting position
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener("click", function(event){
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessNum = 1
    prevGuess = []
    guessSlot.innerHTML = ""
    remaining.innerHTML = `${11 - guessNum}`
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    playGame = true
  })
}




