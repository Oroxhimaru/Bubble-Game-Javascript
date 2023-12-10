function makeBubble() {
var clutter = "";

for (let index = 1; index <= 133; index++) {
    let random = Math.floor(Math.random()*10)
    clutter +=  `<div class="bubble">${random}</div>`
}

/* = mean above enter one div save it, then another div remove the old one save new one.
   += mean that save this  one and then save other too whatever coming from  loop */

document.querySelector('#bottom').innerHTML = clutter;
}


var timer = 60;
function runTimer() {
var time =  setInterval(() => {
    if (timer > 0) {
        timer--;
        document.querySelector('#timervalue').textContent = timer;
     }
     else{
        clearInterval(time);
        document.querySelector("#bottom").innerHTML = `<h1>Game Over</h1>`;
     }
  },1000);
}

var hitrandom = 0;
function getNewHit() {
     hitrandom = Math.floor(Math.random()*10);
     document.querySelector('#hit').textContent = hitrandom;
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector('#score').textContent = score;
}


document.querySelector('#bottom').addEventListener('click', function(details){
  var clickedNumber = Number(details.target.textContent);
  if (clickedNumber === hitrandom) {
      increaseScore();
      makeBubble();
      getNewHit();
  }
});

getNewHit();
runTimer();
makeBubble();

