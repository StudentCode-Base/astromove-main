var bathIMG, bath;
var brushIMG, brush;
var eatingA, eating;
var drinkingA, drink;
var gymA, gym;
var moveA, move;
var sleepA, astronaut;
var bgIMG, BG;

function preload(){
  bgIMG = loadImage("iss.png")
  brushIMG = loadAnimation("brush.png")
  eatingA = loadAnimation("eat1.png","eat2.png")
  drinkingA = loadAnimation("drink1.png","drink2.png")
  gymA = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  moveA = loadAnimation("move.png","move1.png")
  sleepA = loadAnimation("sleep.png")
}

function setup() {
  createCanvas(800,400);
  BG = createSprite(400,200)
  BG.scale = 0.2
  BG.addImage(bgIMG)
  astronaut = createSprite(400,200)
  astronaut.scale = 0.1
  astronaut.addAnimation("sleep",sleepA)
}

function draw() {
  background(0);  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("gym",gymA)
    astronaut.changeAnimation("gym")
    astronaut.x = 200
    astronaut.y = 200
    astronaut.velocityX = 3
  }
  drawSprites();
}

var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  bg= loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  bath = loadAnimation("bath1.png","bath2.png");
 move = loadAnimation("move.png","move.png","move1.png","move1.png");
}

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");

  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");

  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");

  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");

  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
  }

}