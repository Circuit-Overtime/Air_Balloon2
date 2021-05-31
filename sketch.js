var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
   balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y  =  balloon.y - 10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y  =  balloon.y + 10;
  }

  drawSprites();
  fill("red");
  stroke("white");
  textSize(25);
  text("Use arrow keys to move Hot Air Balloon!",40,40);
}


function updateHeight(x,y)
{
    database.ref('Balloon/Position').set({
      'x' : Position.x + x , 
      'y' : Position.y + y
    })
}

function readHeight(data)
{
  Position = data.val();
  Balloon.x = Position.x;
  Balloon.y = Position.y;
}

function showError()
{
  console.log("error while writing to the database");
}