var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/tomOne.png");
    tomImg2 = loadAnimation("images/tomTwo.png",
    "images/tomThree.png");
    tomImg3 = loadAnimation("images/tomFour.png");
    jerryImg1 = loadAnimation("images/jerryOne.png");
    jerryImg2 = loadAnimation("images/jerryTwo.png",
    "images/jerryThree.png");
    jerryImg3 = loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 670);
    tom.addAnimation("acat1",tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 670);
    jerry.addAnimation("amouse1",jerryImg1);
    jerry.scale = 0.17;
}

function draw() {
    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
      tom.velocityX = 0;

      jerry.addAnimation("amouse3",jerryImg3);
      jerry.changeAnimation("amouse3");

      tom.addAnimation("acat3",tomImg3);
      tom.changeAnimation("acat3");

      tom.velocityX = 0;
      tom.velocityY = 0;
    }  

    drawSprites();
}


function keyPressed(){
   if(keyCode === LEFT_ARROW){
      jerry.addAnimation("amouse2",jerryImg2);
      jerry.changeAnimation("amouse2");
      jerry.frameDelay = 25;

      tom.velocityX = -5;
      tom.addAnimation("acat2",tomImg2);
      tom.changeAnimation("acat2");
   }    
}