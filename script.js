let userSequence = [];
let gameSequence = [];

let startbtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let gameOverTxt = document.querySelector('.gameover');
let scorebtn = document.getElementById("score");
let isGameStarted = false;
let colors = ["yellow","red","green","blue"];
let score = 0;


function randomColorsBlink(){

  userSequence = [];
  let randomColorIdx = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomColorIdx];
  let randomBlinkBtn = document.querySelector(`#${randomColor}`);
  randomBlinkBtn.classList.add(`blink${randomColor}`);
  setTimeout(function(){
    randomBlinkBtn.classList.remove(`blink${randomColor}`)
  },250);
  gameSequence.push(randomColor);
  //console.log(gameSequence);
};

function checkColors(idx){
  if(gameSequence[idx] == userSequence[idx]){
      if(gameSequence.length == userSequence.length){
        setTimeout(randomColorsBlink,1000);
        score++;
        scorebtn.innerText = `${score}`;
      }
  }
  else{
    gameOverTxt.innerHTML = `Game over your <b> score : ${score} </b> <br> Press start button to start the game`;
  }

}

function resetGame(){
    userSequence = [];
    gameSequence = [];
    isGameStarted = false;
    score = 0;
    scorebtn.innerText = `${0}`;
    gameOverTxt.innerHTML = "";

}



function userBlinkColors(btn){
  let userBlinkColor = btn.id;
  btn.classList.add(`blink${userBlinkColor}`);
  setTimeout(function(){
    btn.classList.remove(`blink${userBlinkColor}`);
  },250);

  userSequence.push(btn.id);
  checkColors(userSequence.length-1);
};


startbtn.addEventListener("click", function(){
    if(!isGameStarted){
      randomColorsBlink();
      isGameStarted = true;
    }
})

resetBtn.addEventListener("click",resetGame);


let btns = document.querySelectorAll(".btn");
for(let btn of btns){
  btn.addEventListener("click", function(e){
    userBlinkColors(e.target);
  })
}
