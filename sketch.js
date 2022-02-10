var player1, player2 ,shuttle,player1img
var gameState="serve";
var player1score=0;
var player2score=0;


function preload(){
  player1img=loadImage("player1.png")
  player2img=loadImage("player2.png")
  shuttleimg=loadImage("shuttle1.png")
  backgroundimg=loadImage("court.png")
}


function setup() {
  createCanvas(400,400);
  player1=createSprite(45,180,10,100);
  player1.addImage(player1img)
  player1.scale=0.2
  player2=createSprite(365,180,10,100);
  player2.addImage(player2img)
  player2.scale=0.3
  shuttle=createSprite(200,220,10,10)
  shuttle.addImage(shuttleimg)
  shuttle.scale=0.1
  
}

function draw() {
  background(backgroundimg);
  textSize(15)
  fill("blue")
  text("Player1 : "+player1score,30,40)
  fill("red")
  text("Player2 : "+player2score,290,40)
  player2.y=World.mouseY;
  player1.y=shuttle.y;
  fill("yellow")
  
  if (gameState==="serve"){
    textSize(13)
    text("Press space to start",140,245);

  }
  if(keyDown("space")&&gameState==="serve"){
    serveShuttle();
    gameState="play" ;
  }
  
  if(shuttle.x>400 || shuttle.x<0){
    if(shuttle.x>400){
      player1score=player1score+1;
    }
    if(shuttle.x<0){
      player2score=player2score+1;
    }
    reset();
      gameState="serve";
      
    
      
  }
  if(player1score===5 || player2score===5){
    gameState="over";
    textSize(15)
    fill("skyblue")
    text("Game Over",160,160)
    text("Press R to Restart",137,180)

  }

  if(keyDown("R")&& gameState==="over"){
    gameState="serve";
    player1score=0;
    player2score=0;
  }
  
    edges=createEdgeSprites();
    shuttle.bounceOff (edges[2]);
    shuttle.bounceOff(edges[3]);
    shuttle.bounceOff(player2);
    shuttle.bounceOff(player1);

 
  
  drawSprites();
}

function serveShuttle(){
  
    shuttle.velocityX=3;
    shuttle.velocityY=3;
    
  
}

function reset (){
  shuttle.x=200
  shuttle.y=200
  shuttle.velocityX=0
  shuttle.velocityY=0
}