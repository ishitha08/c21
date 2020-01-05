var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(50, 600,50, 100);
  rect2 = createSprite(1100, 600,50,100);
  rect1.velocityX = 5;
  rect2.velocityX = -6;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching(movingRect ,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 } 
bounceOff (rect1,rect2);
  drawSprites();
}
