const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;
const Detector = Matter.Detector;

var backgroundImg = [];
var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9,stone10,stone11,stone12,stone13,stone14,
stone15,stone16,stone17,stone18,stone19,stone20,stone21,stone22,stone23;
var spike13;

var level=1;
var gameState ="Intro";

var player;

var healthSprite;
function preload() {
  backgroundImg[0] = loadImage("Pictures/background1.jpg");
  backgroundImg[1] = loadImage("Pictures/background2.jpg");
  backgroundImg[2] = loadImage("Pictures/background3.jpg");
  backgroundImg[3] = loadImage("Pictures/background4.jpg");
  backgroundImg[4] = loadImage("Pictures/background5.png");
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-30);

  engine=Engine.create();
  world=engine.world;

  player= new Player(displayWidth/6,displayHeight-130);
  console.log(player);
 
  if(level===1){
    stone1= new Stone(displayWidth/6,displayHeight-100,200,20);
    stone2= new Stone(displayWidth-1000,displayHeight-140,200,20);
    stone3= new Stone(displayWidth-850,displayHeight-200,200,20);
    stone4= new Stone(displayWidth-650,displayHeight-180,200,20);
    stone5= new Stone(displayWidth-450,displayHeight-160,200,20);
    stone6= new Stone(displayWidth-320,displayHeight-140,200,20);
    stone7= new Stone(displayWidth-180,displayHeight-190,200,20);
    stone8= new Stone(displayWidth-320,displayHeight-250,200,20);
    stone9= new Stone(displayWidth-180,displayHeight-310,200,20);
    stone10= new Stone(displayWidth-320,displayHeight-350,200,20);
    stone11= new Stone(displayWidth-500,displayHeight-400,200,20);    
    stone12= new Stone(displayWidth-800,displayHeight-310,200,20);
    stone13= new Stone(displayWidth-950,displayHeight-370,200,20);
    spike13= new Spike(displayWidth-800,displayHeight-343,20,40)
    stone14= new Stone(displayWidth-1100,displayHeight-400,200,20);
    stone15= new Stone(displayWidth-1250,displayHeight-440,200,20);
    stone16= new Stone(displayWidth-1150,displayHeight-510,200,20);
    stone17= new Stone(displayWidth-1250,displayHeight-580,200,20);
    stone18= new Stone(displayWidth-1100,displayHeight-620,200,20);
    stone19= new Stone(displayWidth-900,displayHeight-620,200,20);
    stone20= new Stone(displayWidth-750,displayHeight-580,200,20);
    stone21= new Stone(displayWidth-650,displayHeight-450,200,20);
    stone22= new Stone(displayWidth-500,displayHeight-620,200,20);

    healthSprite= new Health(10);
    console.log(healthSprite);
  }
}

function draw() {
  background(255);
  //background(backgroundImg[0]);
  Engine.update(engine);

  //player.display();

  if (healthSprite.hp.length < 7 && healthSprite.hp.length > 3){
    for (var i = 0; i < healthSprite.hp.length; i++){
      healthSprite.hp[i].shapeColor = "yellow";
    }
  }
  if (healthSprite.hp.length < 4){
    for (var i = 0; i < healthSprite.hp.length; i++){
      healthSprite.hp[i].shapeColor = "red";
    }
  }

  if(player.body.isTouching(spike13.body)){
    healthSprite.hp.pop();
  }

  if(level===1){
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    stone8.display();
    stone9.display();
    stone10.display();
    stone11.display();
    stone12.display();
    stone13.display();
    //spike13.display();
    stone14.display();
    stone15.display();
    stone16.display();
    stone17.display();
    stone18.display();
    stone19.display();
    stone20.display();
    stone21.display();
    stone22.display();

  }
  drawSprites();
}

function keyPressed(){

  if(keyCode === 38){
    player.body.position.y=player.body.position.y-20;
  }

   if(keyCode === 37){
    player.body.position.x=player.body.position.x-20;
  }

  if(keyCode === 39){
    player.body.position.x=player.body.position.x+20;
  }

  if(keyCode === 40){
    player.body.position.y=player.body.position.y+20;
  }

}