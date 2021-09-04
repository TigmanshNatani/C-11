var Runner_running,coin,bomb;
function preload(){
  //pre-load images
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  var bomb = createSprites(200,200,10,10);
  bomb.AddImage(bomb.png);

  var path = createSprites(200,200,100,400);
  path.AddImage(path.png);


}

function draw() {
  background(0);
 
  drawSprites();
}
