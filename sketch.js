
function preload() {
    //load the images here
    tomimg1=loadImage("images/tomOne.png");
    tomimg3=loadAnimation("images/tomThree.png");
    tomimg2=loadImage("images/tomTwo.png");

    jerryimg1=loadImage("images/jerryOne.png");
    jerryimg3=loadAnimation("images/jerryThree.png");
    jerryimg2=loadImage("images/jerryTwo.png");

    gardenimg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden=createSprite(500,400,20,20);
     garden.addImage(gardenimg);

     tom=createSprite(750,550,20,20);
     tom.addImage(tomimg1);
     tom.scale=0.1;

     jerry=createSprite(150,600,20,20);
     jerry.addImage(jerryimg1);
     jerry.scale=0.1;

     

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x===jerry.width/2+tom.width/2){
       jerry.addImage(jerryimg2);
       tom.addImage(tomimg2);
       tom.velocityX-0;

       keyPressed();
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation(tomimg3);
    tom.chaneAnimation("tomRunning");
    jerry.addAnimation(jerryimg3);
    jerry.chaneAnimatioin("jerry teasing");
}

}
