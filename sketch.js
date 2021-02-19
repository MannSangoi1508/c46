var immunity, covid;
var slingShot;
var immunityImage, covidImage, slingShotImage, backGround;

function preload(){
slingShotImage=loadImage("images/slingshot.png");
immunityImage=loadImage("images/immunity.png");
covidImage=loadImage("images/covid.png");
backGround=loadImage("images/bg.jpeg")
}

function setup(){
createCanvas(1200,800);

slingShot=createSprite(600,400);
slingShot.addImage(slingShotImage);
slingShot.scale=0.9;

immunity=createSprite(600,400);
immunity.addImage(immunityImage);
immunity.scale=0.2;
immunity.depth=slingShot.depth+10;
console.log(slingShot.depth);
console.log(immunity.depth);
}

function draw(){
    background(backGround);
    immunity.setCollider("circle",0,0,1000);
    immunity.debug = true
    
    // immunity.display();
    // slingShot.display();
    spawnCovid();
    drawSprites();
}

function spawnCovid (){
    if(frameCount % 120 === 0){
      var covidUL = createSprite(random(0,500)||random(0,200),20,20);
      covidUL.addImage(covidImage);
      covidUL.scale = 0.1;
      covidUL.velocityX =random(7);
      covidUL.velocityY =random(7);
      //covid.lifeTime = 10;

      var covidUR = createSprite(random(700,1200)||random(0,200),20,20);
      covidUR.addImage(covidImage);
      covidUR.scale = 0.1;
      covidUR.velocityX =random(7);
      covidUR.velocityY =random(-7);

      var covidBL = createSprite(random(0,500)||random(600,800),20,20);
      covidBL.addImage(covidImage);
      covidBL.scale = 0.1;
      covidBL.velocityX =random(-7);
      covidBL.velocityY =random(7);
      //covid.lifeTime = 10;
      var covidBR = createSprite(random(700,1200)||random(0,200),20,20);
      covidBR.addImage(covidImage);
      covidBR.scale = 0.1;
      covidBR.velocityY =random(-7);
      covidBR.velocityX =random(-7);
    }
}