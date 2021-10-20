var path, path_Image

function preload(){
  path_Image = loadImage("path.png");
  runner_Image = loadAnimation("Runner-1.png", "Runner-2.png")

  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here

path = createSprite(200,200, 50, 50);
path.addImage("path_Image", path_Image);
path.scale = 1.2;
runner = createSprite(200,300,20,20);
runner.addAnimation("runner_Image", runner_Image)
runner.scale = 0.1
invs_l = createSprite(70,200,10,400)
invs_r = createSprite(370,200,10,400)
invs_l.visible = false
invs_r.visible = false

}
function draw() {
  background("white");
  path.velocityY = 3;  

  if(path.y>400){
    path.y = 0
  }
 
  runner.x = World.mouseX;

  drawSprites();
}
