const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var track;
var girl;
 var obstacle,obstacleImg,obstacleGroup;
var ground;
var gameState;
function preload(){
track=loadImage("town3.png");
girlImage=loadImage("girl.png");
obstacleImg=loadImage("obstacle.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 // engine = Engine.create();
 //world= engine.world;
girl=createSprite(-windowWidth/2,windowHeight-150,150,150);
girl.addImage(girlImage);
girl.scale=0.1
ground=createSprite(windowWidth/2,windowHeight-50,windowWidth*6,20);
ground.shapeColor="white";
//obstacle=createSprite(windowWidth/3,windowHeight-100,150,150);
//obstacle.addImage(obstacleImg);
//obstacle.scale=0.5;
obstacleGroup=new Group();
}

function draw() {
  background("lightblue");  
  image(track,-windowWidth*2,0,windowWidth*7,windowHeight)
 // Engine.update(engine);
 camera.position.x=girl.x;
 camera.position.y=height/2;
 if(keyDown("right")){
  girl.x+=100;
}
if(keyDown("left")){
  girl.x-=100;
}
  if(girl.x>7000){
    girl.x=5000;
  }
 Obstacle();
  if (gameState===1){
    obstacle.isTouching(girl);
  }
  
  drawSprites();
 //if(flag==1){
  // textSize(30);
  // stroke(3);
 //  fill("lightblue");/
 //  text("CRASH",500,200);
 //  crashSound.play();
 }

//  }
function Obstacle(){
  if (frameCount % 80 === 0) {
    obstacle= createSprite(100,windowHeight-100,10,10); 
    obstacle.addImage(obstacleImg);
    obstacle.scale=0.5;      
    obstacle.velocityX = 2;
    obstacleGroup.add(obstacle);
    /*switch(){
        case 1: obstacle.addImage("obstacle",obstacleImg);
        break;
        case 2: obstacle.addImage("obstacle",obstacleImg);
        break;

    }
  
 */  
}

}
  

 
