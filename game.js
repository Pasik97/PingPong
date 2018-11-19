const ball=document.getElementsByClassName("ball")[0];
const block1=document.getElementsByClassName("block")[0];
const block2=document.getElementsByClassName("block")[1];
var maxY=false;
var maxX=false;
var minY=true;
var minX=true;
var stop=false;
var blockY1=block1.offsetTop;
var blockY2=block2.offsetTop;
var scorePlayer1=0;
var scorePlayer2=0;
var score=[scorePlayer1," / ",scorePlayer2];
var posl=450;
var post=275;

var keys = [];
var keyPressed = function(e){
    keys[e.keyCode] = true;
};
var keyReleased = function(e){
    keys[e.keyCode] = false;
};

function play() {
  posl=450;
  post=275;
  var id = setInterval(frame, 5);
  function frame() {
    var ballPositionX = ball.offsetLeft;
    var ballPositionY = ball.offsetTop;
    var blockY1=block1.offsetTop;
    var blockY2=block2.offsetTop;

      if(!maxX && minX && !maxY && minY && !stop){
        posl++;
        post++;
      }

      if(!maxX && minX && maxY && !minY && !stop){
        posl++;
        post--;
      }

      if(maxX && !minX && maxY && !minY && !stop){
        posl--;
        post--;
      }

      if(maxX && !minX && !maxY && minY && !stop){
        posl--;
        post++;
      }

      if(ballPositionY>=550){
        maxY=true;
        minY=false;
      }

      if(ballPositionX>=900){
        posl=450;
        post=275;
        scorePlayer1++;
        score[0]=scorePlayer1;
      }

      if(ballPositionY<=0){
        maxY=false;
        minY=true;
      }

      if(ballPositionX<=0){
        posl=450;
        post=275;
        scorePlayer2++;
        score[2]=scorePlayer2;
      }

      if(ballPositionX<20 && ballPositionY+50<blockY1+150 && ballPositionY+50>blockY1){
        maxX=false;
        minX=true;
      }

      if(ballPositionX>880 && ballPositionY+50<blockY2+150 && ballPositionY+50>blockY2){
        maxX=true;
        minX=false;
      }

      ball.style.top = post + 'px';
      ball.style.left = posl + 'px';
      document.getElementsByClassName("score")[0].innerHTML=score.join("");

      if (keys[87]) {
       movePlayer2Up();
      }
       if (keys[83]) {
       movePlayer2Down();
      }
       if (keys[38]) {
       movePlayer1Up();
      }
       if (keys[40]) {
       movePlayer1Down();
      }

      if(scorePlayer2==10 || scorePlayer1==10){
        posl=450;
        post=275;
        stop=true;
        if(scorePlayer1==10)
          document.getElementsByClassName("com")[0].innerHTML="PLAYER 1 WINS!";
        else
          document.getElementsByClassName("com")[0].innerHTML="PLAYER 2 WINS!";
      }
    }
}


function movePlayer1Up(){
  if(blockY1>0){
    blockY1=blockY1-2;
    block1.style.top = blockY1 + 'px';
  }
}

function movePlayer2Up(){
  if(blockY2>0){
    blockY2=blockY2-2;
    block2.style.top = blockY2 + 'px';
  }
}

function movePlayer1Down(){
  if(blockY1<450){
    blockY1=blockY1+2;
    block1.style.top = blockY1 + 'px';
  }
}

function movePlayer2Down(){
  if(blockY2<450){
    blockY2=blockY2+2;
    block2.style.top = blockY2 + 'px';
  }
}

function  rst(){
  scorePlayer1=0;
  scorePlayer2=0;
  posl=450;
  post=275;
}

const start=document.getElementsByClassName("button")[0];
const reset=document.getElementsByClassName("button")[1];

start.addEventListener("click", play);
reset.addEventListener("click", rst);

window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);
