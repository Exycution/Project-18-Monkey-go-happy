var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bananaImage,obstacleImage;
var obstacleGroup,foodGroup;
var backImage,score;
var player,player_running;

function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png","Monkey_06.png","Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  ground = createSprite(400,200,400,10);
  ground.addImage("ground",backImage);
  ground.velocityX = -6;
  ground.x = ground.width/2;
  
  player = createSprite(50,360,10,10);
  player.addAnimation("player", player_running);
  player.scale = 0.1;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(220);
  
  if(ground.x < 0){
    ground.x = ground.width/2;
    
  }
  
  drawSprites();
  spawnFood();
}

function spawnFood(){
  if(World.frameCount % 80 === 0){
    food = createSprite(400,200,10,10);
    food.addImage("food",bananaImage);
    food.scale = 0.05;
    food.y = Math.round(random(100,300));
    food.velocityX = -4;
    food.lifetime = 75;
    console.log(food.y);
    
    
     
     }
  
}