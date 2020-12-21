var car, wall, speed, weight; 


function setup() {
  createCanvas(800,400);
car = createSprite(50, 200, 50, 50);
speed=random(55,19)
weight=random(400,1500)
wall=createSprite(700, 200, 60, 300)
car.velocityX=speed
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    var deform = 0.5*weight*speed*speed/22500
    
    if(deform>180){
      car.shapeColor="red"
      
    }
    if(deform<180){
      car.shapeColor="green"
      
    }
  }
  drawSprites();
}