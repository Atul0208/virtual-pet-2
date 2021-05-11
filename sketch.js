//Create variables here
 var dog, happyDog,  foodS, foodStock;
 var database;
var food = 20;

function preload()
{
	 dogImg = loadImage("images/dog.png")
  dImg = loadImage("images/dog1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database;

  dog = createSprite(250,300,50,50)
  dog.addImage(dogImg)
  dog.scale=0.25
 
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
if(keyDown(UP_ARROW)){
//writeStock(foodS);
dog.addImage(dImg)
food=food-1;
} else {
  dog.addImage(dogImg)
}
textSize(15)
        fill("white")
        text("Press up arrow key to feed the dog", 150, 50)
        textSize(35)
        fill("white")
        text("Food "+ food, 150, 150)
  
if(food<=1){
  food=0
if(keyWentDown(DOWN_ARROW)){
food=food+20
}
}
textSize(15)
        fill("white")
        text("Press down arrow key to full the food bar", 150, 450)
}




