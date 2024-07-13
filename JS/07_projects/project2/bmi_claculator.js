const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value); // we used .value to get value from the input tag
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if(height <0 || isNaN(height) || height === ""){
    results.innerHTML = `please enter a valid height ${height}`
  }
  else if (weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `please enter a valid weight ${weight }`
  }
  else{
    const value = (weight/((height*height)/ 10000)).toFixed(2)
    results.innerHTML = `<span>${value}</span>`;
    const remark = document.createElement("div")
    // just hard coded it to get the remarks
    if(value < 18.6){
      remark.innerText = "Under Weight"
    } else if(value >= 18.6 && value <= 24.9){
      remark.innerText = "Normal Range"
    }
    else{
      remark.innerText = "Overweight"
    }
    results.appendChild(remark);
  };
})