function setup() {
  
  // create a surface to draw in
 createCanvas(700, 480);


  // R, G,& B values.
  background(21,74,73);

  //take a big brush
  strokeWeight(30);
  //dip it in purple colour
  stroke('yellow');
  frameRate(10);
}

function draw() {
  
 //declare variables
  let posY = mouseX;
  let posX = mouseY;
  //place a dot on screen 
  point(posX, posY)
}
