
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var background,backgroundImg;
var ground,groundImg,invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImg = loadImage("jungle (2).jpg")
  groundImg = loadImage("ground(banana run).jfif")
 
}



function setup() {
  createCanvas(500,400)
background = createSprite(480,300,600,600);
  background.addImage("jungle (2).jpg",backgroundImg);
  background.scale = 1
  
  monkey = createSprite(50, 330, 20, 50);
  monkey.addAnimation(monkey_running);
  monkey.scale=0.5

  ground = createSprite(250,380,3000,40);
  ground.addImage(groundImg)
 

  invisibleGround = createSprite(250, 370, 400, 10);
  invisibleGround.visible = false;
}


function draw() {
  background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  ground.velocityX = -3 

    if (ground.x < 0){
      ground.x = 400;
    }
  
  if (invisibleGround.x < 250){
      invisibleGround.x = ground.width/2;
    }
  
  if (keyDown("space") && monkey.y >= 60) {
      monkey.velocityY = -12;
      
    }

    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
 
  monkey.collide(invisibleGround);

  ground.depth = monkey.depth;
    monkey.depth = monkey.depth + 0.5;
  
  drawSprites();
}






