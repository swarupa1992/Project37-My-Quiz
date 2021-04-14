var canvas;
var quiz,form,player;
var database,gameState = 0,playerCount = 0;
var allPlayers;



function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(playerCount === 4){

     quiz.update(1);

  }
  if(gameState === 1){

       clear();
       quiz.play();
  }

}//draw
