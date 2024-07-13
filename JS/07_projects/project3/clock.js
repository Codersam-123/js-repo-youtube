const clock = document.querySelector("#clock");
// to run a js function continuously after some specific time we use this below event
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // here the clock runs every 1 second 
// and the time is calculated as 1 sec = 1000 mili second